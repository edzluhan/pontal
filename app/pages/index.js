import React from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faComment, faPhone } from '@fortawesome/fontawesome-free-solid';

import { Form, Input, Button, Carousel } from 'antd';

import '../components/Clock';

// import 'bulma/bulma.sass';
// import '../scss/_variables.scss';
import '../scss/global.scss';
import '../scss/index.scss';
import Clock from '../components/Clock';

const handleSubmit = e => {
	e.preventDefault();
};

const deadline = 'Jun 21, 2018 05:05:00 GMT-3';

const Index = () => (
	<section className="container">
		<section id="full-banner" className="hero">
			<div>
				<div
					className="hero-head has-text-centered"
					style={{ paddingTop: '3em', paddingLeft: '2em', paddingRight: '2em' }}
				>
					<h3 className="title is-3">coletânea</h3>
					<h1 className="title is-1">Maiojama</h1>
					<div className="columns">
						<div className="column is-three-fifths has-text-centered">
							<h4 className="title is-4">Trend Nova Carlos Gomes</h4>
							<p align="justify">
								O multiuso se abre para o convívio com o bairro em uma proposta
								que une três torres de negócios e moradia. O empreendimento
								inaugura a presença em uma região privilegiada: o deslocamento
								pela terceira perimetral encurta distâncias e investimentos
								despontam na vizinhança, aquecendo o mercado imobiliário.
							</p>
							<br />
							<div className="columns">
								<div className="column">
									CORPORATE<br />
									de 97 a 682m²
								</div>
								<div className="column">
									OFFICE<br />
									de 44 a 93m²<br />
									<br />
									a partir de R$399 mil
								</div>
								<div className="column">
									RESIDENCE<br />
									de 49 a 77m²<br />
									<br />
									a partir de R$399 mil
								</div>
							</div>
						</div>
						<div className="column is-two-fifths has-text-centered">
							<Form onSubmit={handleSubmit} className="login-form box">
								<p style={{ paddingBottom: '1em' }}>
									Cadastre-se para ter acesso a mais informações do Trend Nova
									Carlos Gomes.
								</p>
								<div className="field">
									<div className="control">
										<Input className="input" placeholder="Seu nome" />
									</div>
								</div>
								<div className="field">
									<div className="control">
										<Input className="input" placeholder="Seu e-mail" />
									</div>
								</div>
								<div className="field">
									<div className="control">
										<Input placeholder="Telefone" />
									</div>
								</div>
								<div className="field">
									<div className="control has-text-centered">
										<Button className="button is-primary">
											RECEBA INFORMAÇÕES
										</Button>
									</div>
								</div>
								<div className="field">
									<div className="control has-text-centered">
										<Button className="button is-secondary">
											Atendimento por WhatsApp
										</Button>
									</div>
								</div>
							</Form>
							<Clock deadline={deadline} />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="carousel" className="hero has-text-centered">
			<Carousel autoplay>
				<figure className="image">
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714404-30330991-480x243x480x270x0x13-rc-0001.jpg" />
				</figure>
				<figure className="image">
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714406-30330981-480x243x480x320x0x38-rc-0455.jpg" />
				</figure>
				<figure className="image">
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714401-30334636-480x243x480x319x0x38-13-PETROPOLIS-POA-IN.JPG" />
				</figure>
				<figure className="image">
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714405-30330996-480x243x480x320x0x38-rc-7419.jpg" />
				</figure>
			</Carousel>
		</section>
		<section id="video" className="hero video">
			<div className="yt-wrapper">
				<iframe
					className="yt-iframe"
					src="https://www.youtube.com/embed/Tj6h5tXtzUQ"
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
				/>
			</div>
		</section>
		<section id="get-to-know" className="container has-text-centered">
			<div className="content">
				<h4 className="title is-4">Conheça o Trend Nova Carlos Gomes</h4>
				<p align="justify">
					As torres OFFICE e CORPORATE trazem plantas versáteis com
					possibilidade de amplos ambientes horizontais, ideais para todo o tipo
					de marca. Seus espaços comuns incluem salas de reunião, auditório e
					tecnologia de ponta no controle de acesso, circulação e monitoramento.
					<br />
					<br />
					A torre RESIDENCE dispõe de apartamentos loft, studio e uma ou duas
					suítes. No terraço, com vista para o Guaíba, piscina aquecida, espaço
					fitness e salões de festa emolduram um pôr do sol de tirar o fôlego e
					vistas exclusivas. A estrutura conta ainda com lavanderia equipada,
					salas de reunião, coworking e playground.
				</p>
			</div>
		</section>
		<section id="blueprints" className="section has-text-centered">
			<h4 className="title is-4">
				Plantas Corporate | Trend Nova Carlos Gomes
			</h4>
			<p>Junção Corporate</p>
			<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714407-30347071-647x342x938x570x178x141-img-planta-corporate.jpg" />
			<h4 className="title is-4">Plantas Offices | Trend Nova Carlos Gomes</h4>
			<div className="columns">
				<div className="column">
					<p>Planta 48,2m² priv. finais 01 e 13</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714411-30347876-212x346x679x411x242x56-Planta-482m-priv.-fi.jpg" />
				</div>
				<div className="column">
					<p>Planta 44,13m² priv. finais 02 e 12</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714412-30347866-213x314x619x376x199x50-Planta-4413m-priv.-f.jpg" />
				</div>
				<div className="column">
					<p>Planta 45,77m² priv. finais 05 e 09</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714413-30347871-192x316x619x376x193x51-Planta-4577m-priv.-f.jpg" />
				</div>
			</div>
			<div className="columns">
				<div className="column">
					<p>Planta 65,54m² priv. finais 04 e 10</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714414-30347891-273x346x570x346x155x0-Planta-6554m-priv.-f.jpg" />
				</div>
				<div className="column">
					<p>Planta 53,61m² priv. finais 03 e 11</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714415-30347886-228x300x553x336x163x36-Planta-5361m-priv.-f.jpg" />
				</div>
				<div className="column">
					<p>Planta 47m² priv. final 06, 07 e 08</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714416-30347881-201x308x576x347x183x39-Planta-47m-priv.-fin.jpg" />
				</div>
			</div>
			<div className="container has-text-center">
				<p>Unificação dos conjuntos 05 e 06, área priv. 93,64m²</p>
				<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714417-30347896-442x421x866x524x208x94-Unificao-dos-conjunt.jpg" />
			</div>
			<h4 className="title is-4">
				Plantas Residence | Trend Nova Carlos Gomes
			</h4>
			<div className="columns">
				<div className="column">
					<p>Planta 1 dorm. 53m² priv. finais 13</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714409-30347091-202x304x557x338x175x34-Planta-1-dorm.-53m-p.jpg" />
				</div>
				<div className="column">
					<p>Planta Studio 49m² priv. finais 05 e 12</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714408-30347086-170x293x554x336x186x43-Planta-Studio-49m-pr.jpg" />
				</div>
			</div>
			<div className="columns">
				<div className="column">
					<p>Planta 1 dorm. 48,32m² priv. finais 01, 02, 08 e 09</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714409-30347076-362x242x595x361x112x81-Planta-1-dorm.-4832m.jpg" />
				</div>
				<div className="column">
					<p>Planta 2 suítes 77,07m² priv. finais 03, 07, 10 e 14</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714410-30347081-356x261x583x354x108x57-Planta-2-sutes-7707m.jpg" />
				</div>
			</div>
			<div className="container has-text-center">
				<p>Planta Duplex 72m² priv. finais 05 e 12</p>
				<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714410-30347096-440x331x763x456x155x76-Planta-Duplex-72m-pr.jpg" />
			</div>
		</section>
		<section id="location" className="has-text-centered">
			<h4 className="title is-4">LOCALIZAÇÃO | Trend Nova Carlos Gomes</h4>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.772264066079!2d-51.1774686842823!3d-30.043390738189462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977f495c9b1ed%3A0x68d5b8f71f19d7e4!2sTREND+Nova+Carlos+Gomes!5e0!3m2!1spt-BR!2sbr!4v1529433077372"
				width="600"
				height="450"
				frameBorder="0"
				style={{ border: '0' }}
				allowFullScreen
			/>
		</section>
		<section id="testimonials" className="has-text-centered">
			<h4 className="title is-4">
				DEPOIMENTOS DA COLETÂNEA | Trend Nova Carlos Gomes
			</h4>
			<div className="columns">
				<div className="column">
					<iframe
						src="https://www.youtube.com/embed/o98qlvrcqiU"
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen
					/>
				</div>
				<div className="column">
					<iframe
						src="https://www.youtube.com/embed/o98qlvrcqiU"
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen
					/>
				</div>
				<div className="column">
					<iframe
						src="https://www.youtube.com/embed/o98qlvrcqiU"
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen
					/>
				</div>
			</div>
		</section>
		<section id="related" className="has-text-centered">
			<p>Saiba mais sobre outros empreendimentos da Coletânea Maiojama:</p>
			<div className="columns">
				<div className="column">
					<p>WALK</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714402-30310151-306x243x434x243x94x0-rc-9128.jpg" />
					<br />
					<button>CONHEÇA</button>
				</div>
				<div className="column">
					<p>TREND 24</p>
					<img src="https://c.fastcdn.co/t/64827b2f/f0915855/1525714403-30310126-306x243x390x243x64x0-rc-0147.jpg" />
					<br />
					<button>CONHEÇA</button>
				</div>
			</div>
		</section>
		<section id="footer-form" className="has-text-center">
			Cadastre-se para ter acesso a mais informações do Trend Nova Carlos Gomes.
			<Form onSubmit={handleSubmit} className="login-form">
				<div className="field">
					<div className="control">
						<Input className="input" placeholder="Seu nome" />
					</div>
				</div>
				<div className="field">
					<div className="control">
						<Input className="input" placeholder="Seu e-mail" />
					</div>
				</div>
				<div className="field">
					<div className="control">
						<Input placeholder="Telefone" />
					</div>
				</div>
				<div className="field">
					<div className="control">
						<Button className="button is-primary" htmlType="submit">
							RECEBA INFORMAÇÕES
						</Button>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<Button className="button is-secondary" htmlType="submit">
							Atendimento por WhatsApp
						</Button>
					</div>
				</div>
			</Form>
		</section>
	</section>
);

export default Index;
