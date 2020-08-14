import { useRouter } from 'next/router'
import DocsLayout from '../../components/docs.layout.jsx'
import DocsTitle from '../../components/docs.title.jsx'
import Navbar from '../../components/navbar.jsx'
import Sidebar from '../../components/sidebar.jsx'
import LinkCard from '../../components/link_card.jsx'

const Docs = () => {
	return(
		<div style={{height: '100%'}}>
			<div style={{height: 100}}>
				<Navbar/>
			</div>
			<DocsLayout>
				<Sidebar/>
				<div className="container">
					<DocsTitle>Documentation (WIP)</DocsTitle>
					<div className="markdown-container">
					<p>Graviton Editor is a cross-platform code editor made using web technologies.</p>
					<h2>Guides</h2>
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
				</div>
			</DocsLayout>
		</div>
	)
}



export default Docs
