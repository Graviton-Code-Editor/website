import { useRouter } from 'next/router'
import path from 'path'
import Link from 'next/link'
import StoreLayout from '../../components/store.layout.jsx'
import Navbar from '../../components/navbar.jsx'
import PluginCard from '../../components/plugin.card.jsx'
import DocsTitle from '../../components/docs.title.jsx'
import Head from 'next/head'
import StoreData from '../../store_repo/dist/data.json'
import Divider from '../../components/divider'

const Store = ({ name, author, description, releases, id, repository }) => {
	const { pathname, query } = useRouter()
	const { path } = query
	return (
		<div>
			<Head>
				<title>Store</title>
			</Head>
			<div style={{height: 100}}>
				<Navbar/>
			</div>
			<StoreLayout>
				<div className="container">
					<div className="info">
						<h2>{name}</h2>
						<span className="author">by {author}</span>
						<p>{description}</p>
						<a className="link" href={repository}>Source Code</a>
					</div>
					<Divider/>
					<div>
						<h4>Releases</h4>
						{releases.map(({ url, version }) => {
							return (
								<PluginCard key={url}>
									<a href={`graviton:install?&id=${id}&url=${url}`}>
										{`Install -> v${version}`}
									</a>
								</PluginCard>
							)
						})}
					</div>
				</div>
			</StoreLayout>
		</div>
	)
}


export async function getStaticProps({ params: { slug } }) {

	console.log(StoreData.list, slug)
	
	const plugin = StoreData.list.find(pg => {
		if(pg.id === slug){
			return pg
		}
	})
	console.log(plugin)
	return {
		props: {
			...plugin
		}
	}
}

export async function getStaticPaths(path) {

	const paths = StoreData.list.map(plugin => {
		return {
			params:{
				slug: plugin.id
			}
		}
	})
	
	return {
		paths,
		fallback: false,
	};
}

export default Store
