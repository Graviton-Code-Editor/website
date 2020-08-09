import { useRouter } from 'next/router'
import DocsLayout from '../../components/docs.layout.jsx'
import Title from '../../components/title.jsx'
import Navbar from '../../components/navbar.jsx'
import Sidebar from '../../components/sidebar.jsx'
import LinkCard from '../../components/link_card.jsx'

const Docs = () => {
	return(
		<div style={{height: '100%'}}>
			<Navbar/>
			<Title>Documentation (WIP)</Title>
			<DocsLayout>
				<Sidebar/>
				<div class="markdown-container">
					<p>Graviton Editor is a cross-platform code editor made using web technologies.</p>
					<h2>Guides</h2>
					<LinkCard href="docs/guides/building" >
						🤠 Building from source
					</LinkCard>
					<h2>Fundamentals</h2>
					<LinkCard href="docs/fundamentals/graviton2" >
						🧰 .graviton2
					</LinkCard>
					<LinkCard href="docs/fundamentals/plugins" >
						📦 Plugins
					</LinkCard>
				</div>
			</DocsLayout>
		</div>
	)
}



export default Docs
