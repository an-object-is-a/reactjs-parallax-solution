import JSX_withParallax from './components/ParallaxJSXWrapper.js';

import './styles.css';

function App() {
	const FirstOrb = JSX_withParallax(<div style={styles.obj}></div>, 0.05);
	const SecondOrb = JSX_withParallax(<div style={{ ...styles.obj, top: '70%', left: '80%', backgroundColor: 'red' }}></div>, 0.02)

	return (
		<div>
			<img src="./back.png" alt="" />
			<FirstOrb />
			<SecondOrb />
		</div>
	);
}

const styles = {
	obj: {
		margin: 0,
		padding: 0,
		height: '200px',
		width: '200px',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '50%',
		backgroundColor: '#0083FF',
		boxShadow: '0px 0px 20px 10px #0083FF'
	}
}

export default App;
