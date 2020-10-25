import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import Title from '../components/title.jsx'
import Button from '../components/button.jsx'
import Head from 'next/head'
import Link from 'next/link'

function Browser() {
	return (
		<div>
			<Head>
				<title>Graviton Editor</title>
			</Head>
			<Navbar/>
			<HomeLayout>
				<div className="container">
					<h3>Graviton Browser</h3>
					<p>This is still very experimental.</p>
					<Link href="/app" >
						<Button noSpacing={true}>I understand</Button>
					</Link>
				</div>
			</HomeLayout>
		</div>
	)
}

export default Browser
