//PascalCase
//App
//HeaderHeading
//ExemploDeComponente
import { Fragment } from 'react/jsx-runtime';
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
	console.log('Inicio');
	return (
		<Fragment>
			<Heading attr={124} attr2='string'>
				Olá Mundo 1
			</Heading>
			<Heading>Olá Mundo 2</Heading>
			<Heading>Olá Mundo 3</Heading>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
				incidunt, pariatur, quidem id quasi assumenda iste veritatis, in saepe
				aliquam labore voluptatum mollitia! Dignissimos aspernatur provident
				facilis suscipit praesentium nostrum.
			</p>
		</Fragment>
	);
}
