import Head from 'next/head'
import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home_layout.jsx'

function About() {
	return (
		<div style={{height: '100%'}}>
			<Head>
				<title>Graviton Editor</title>
			</Head>
			<Navbar/>
			<HomeLayout>
				<div style={{padding: 15}}>
					<h1>About</h1>
					<p>The <b>Graviton Project</b> is not just a editor.</p>
				</div>
			</HomeLayout>
		</div>
	)
}

export default About
