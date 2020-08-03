import { useRouter } from 'next/router'
import DocsLayout from '../../components/docs.layout.jsx'
import Title from '../../components/title.jsx'
import Navbar from '../../components/navbar.jsx'
import Sidebar from '../../components/sidebar.jsx'

const Docs = () => {
	return(
		<div style={{height: '100%'}}>
			<Navbar/>
			<Title>Documentation</Title>
			<DocsLayout>
				<Sidebar/>
				<div>
					<p>Graviton Editor is a cross-platform code editor.</p>
				</div>
			</DocsLayout>
		</div>
	)
}



export default Docs
