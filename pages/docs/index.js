import DocsLayout from '../../components/docs.layout.jsx'
import DocsTitle from '../../components/docs.title.jsx'
import Navbar from '../../components/navbar.jsx'
import Sidebar from '../../components/sidebar.jsx'
import LinkCard from '../../components/link_card.jsx'
import Head from 'next/head'

const Docs = () => {
	return(
		<div style={{height: '100%'}}>
			<Head>
				<title>Documentation</title>
			</Head>
			<div style={{height: 100}}>
				<Navbar/>
			</div>
			<DocsLayout>
				<div>
					<Sidebar/>
				</div>
				<div className="container">
					<DocsTitle>Documentation (WIP)</DocsTitle>
					<div>
						<div className="markdown-container">
							<i>NOTE: this docs are updated in accordance with the lastest changes, so, somethings might not work if you target a lower version than the one on the source code.</i>
							<p>Graviton Editor is a cross-platform code editor made using web technologies.</p>
							<h2>Guides</h2>
							<LinkCard href="docs/dev/guides/building" >
								👋🏻 Getting Started
							</LinkCard>
							<LinkCard href="docs/dev/guides/building" >
								🤠 Building manually
							</LinkCard>
							<h2>Fundamentals</h2>
							<LinkCard href="docs/dev/fundamentals/graviton2" >
								🧰 .graviton2
							</LinkCard>
							<LinkCard href="docs/dev/fundamentals/puffin" >
								🐧 Puffin
							</LinkCard>
						</div>
						<div className="spacing"/>
					</div>
				</div>
			</DocsLayout>
		</div>
	)
}



export default Docs
