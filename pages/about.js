import Head from 'next/head'
import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import LinkCard from '../components/link_card.jsx'

function About() {
	return (
		<HomeLayout>
			<Head>
				<title>Graviton Editor</title>
			</Head>
			<Navbar/>
			<div>
				<div style={{padding: 15}}>
					<h1>About</h1>
					<p>The <b>Graviton Project</b> is not just a editor. See projects related to it:</p>
					<ul style={{
							listStyleType: 'none',
							margin: 0,
							padding: 0
						}}>
						<li>
							<LinkCard is="external" href="https://github.com/Graviton-Code-Editor/store-api">
								💫 Store's API
							</LinkCard>
						</li>
						<li>
							<LinkCard is="external" href="https://github.com/PuffinJS/puffin">
								🐧 PuffinJS
							</LinkCard>
						</li>
						<li>
							<LinkCard is="external" href="https://github.com/Graviton-Code-Editor/drac">
								💅🏻 Drac Design System
							</LinkCard>
						</li>
						<li>
							<LinkCard is="external" href="https://github.com/marc2332/lsp-codemirror">
								📐 LSP-CodeMirror
							</LinkCard>
						</li>
						<li>
							<LinkCard is="external" href="https://github.com/Graviton-Code-Editor/graviton-sdk">
								🧵 Graviton SDK
							</LinkCard>
						</li>
						<li>
							<LinkCard is="external" href="https://github.com/Graviton-Code-Editor/website">
								🎡 Graviton website 
							</LinkCard>
						</li>
						<li>
							<LinkCard is="external" href="https://github.com/Graviton-Code-Editor/remote-plugin">
								🔭 Remote Plugin
							</LinkCard>
						</li>
					</ul>
					<p>And many other plugins!</p>
				</div>
			</div>
		</HomeLayout>
	)
}

export default About
