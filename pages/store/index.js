import Navbar from '../../components/navbar.jsx'
import Link from 'next/link'
import StoreList from '../../components/store.list.jsx'
import PluginCard from '../../components/plugin.card.jsx'
import Title from '../../components/title.jsx'
import Head from 'next/head'
import StoreData from '../../store_repo/dist/data.json'

function Store() {
	return (
		<div style={{height: '100%'}}>
			<Navbar/>
			<Head>
				<title>Store</title>
			</Head>
			<Title>Store</Title>
			<StoreList>
				<div>
					{StoreData.list.map(plugin => {
					return (
						<PluginCard key={plugin.id}>
							<Link href={`/store/${plugin.id}`}>
								<div>
									<h2>{plugin.name}</h2>
									<span className="date">by {plugin.author}</span>
									<p>{plugin.description}</p>
								</div>
							</Link>
						</PluginCard>
					)
				})}
				</div>
			</StoreList>
		</div>
	)
}



export default Store
