import { Kind } from 'graphql';
import { map, get, filter, size, reduce, join, replace, first } from 'lodash';
import { contains } from 'ramda';
import moment from 'moment';

export default {
	Date: {
		__parseValue(value) {
			return moment(value).toDate(); // value from the client
		},
		__serialize(value) {
			return moment(value).valueOf(); // value sent to the client
		},
		__parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return parseInt(ast.value, 10); // ast value is always in string format
			} else if (ast.kind === Kind.STRING) {
				return moment(ast.value).valueOf();
			}
			return null;
		}
	},
	Any: {
		__serialize: value => value,
		__parseValue: value => value,
		__parseLiteral(ast) {
			switch (ast.kind) {
				case Kind.INT:
					return parseInt(ast.value, 10);
				case Kind.FLOAT:
					return parseFloat(ast.value);
				case Kind.BOOLEAN:
					return /true/i.test(ast.value);
				default:
					return ast.value;
			}
		}
	}
};
