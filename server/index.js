import express from 'express';
import next from 'next';
import path from 'path';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import i18nextMiddleware, {
	LanguageDetector
} from 'i18next-express-middleware';
import Backend from 'i18next-node-fs-backend';
import withSass from '@zeit/next-sass';
import withCSS from '@zeit/next-css';

import typeDefs from './graphql/typeDefs.graphql';
import resolvers from './graphql/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const dev = process.env.NODE_ENV !== 'production';
const app = next({
	dev,
	dir: './app',
	conf: withCSS(
		withSass({
			sassLoaderOptions: {
				includePaths: ['node_modules']
			}
		})
	)
});
const handle = app.getRequestHandler();

import { i18nInstance } from '../translation/i18n';

// init i18next with serverside settings
// using i18next-express-middleware
i18nInstance
	.use(Backend)
	.use(LanguageDetector)
	.init(
		{
			fallbackLng: 'pt',
			preload: ['pt', 'en', 'es'], // preload all langages
			backend: {
				loadPath: path.join(__dirname, '/locales/{{lng}}.json'),
				addPath: path.join(__dirname, '/locales/{{lng}}.missing.json')
			},
			debug: false
		},
		() => {
			// loaded translations we can bootstrap our routes
			app.prepare().then(() => {
				const server = express();

				// enable middleware for i18next
				server.use(i18nextMiddleware.handle(i18nInstance));
				server.use(
					'/locales',
					express.static(path.join(__dirname, '/locales'))
				);
				server.post(
					'/locales/add/:lng',
					i18nextMiddleware.missingKeyHandler(i18nInstance)
				);

				//Graphql
				server.use(
					'/graphql',
					bodyParser.json(),
					graphqlExpress(request => ({
						schema,
						context: {
							token: request.header('x-auth-token'),
							userId: request.header('x-user-id')
						}
					}))
				);

				server.use(
					'/graphiql',
					graphiqlExpress({
						endpointURL: '/graphql'
					})
				);

				// use next.js
				server.get('*', (req, res) => handle(req, res));

				server.listen(3000, err => {
					if (err) throw err;
					console.log('> Ready on http://localhost:3000');
				});
			});
		}
	);
