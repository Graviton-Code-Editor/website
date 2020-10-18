import { useRouter } from 'next/router'
import path from 'path'
import Link from 'next/link'
import StoreLayout from '../../components/store.layout.jsx'
import Navbar from '../../components/navbar.jsx'
import PluginCard from '../../components/plugin.card.jsx'
import DocsTitle from '../../components/docs.title.jsx'
import Button from '../../components/button.jsx'
import Head from 'next/head'
import StoreData from '../../store_repo/dist/data.json'
import Divider from '../../components/divider'
import matter from 'gray-matter'
import unified from 'unified'
import markdown from 'remark-parse'
import highlight from 'remark-highlight.js'
import html from 'remark-html'
import * as fs from 'fs'

const Store = ({ name, author, description, releases, id, repository, readmeContent }) => {
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
				<div className="sidebar">
					<p>Resources</p>
					<button>
						<a href={repository}>Source Code</a>
					</button>
					<div>
					<p>Releases</p>
					{releases.map(({ url, version }) => {
							return (
								<button>
									<a href={`graviton:install?&id=${id}&url=${url}`}>
										{`v${version}`}
									</a>
								</button>
							)
						})}
				</div>
				</div>
				<div className="container">
					<div className="info">
						<h1>{name}</h1>
						<span className="author">by {author}</span>
						<p>{description}</p>
					</div>
					<Button noSpacing="true">
						<a href={`graviton:install?&id=${id}&url=${releases[0].url}`}>
							Install
						</a>
					</Button>
					<Divider/>
					<div className="markdown-container" dangerouslySetInnerHTML={{ __html: readmeContent }}/>
				</div>
			</StoreLayout>
		</div>
	)
}


export async function getStaticProps({ params: { slug } }) {

	const plugin = StoreData.list.find(pg => {
		if(pg.id === slug){
			return pg
		}
	})
	
	const repoPath = `${process.cwd()}/repos/${slug}`
	
	const readmeName = await new Promise(res => {
		 fs.lstat(`${repoPath}/README.md`).then(() => {
			 res('README.md')
		 }).catch(() => {
			 res('readme.md')
		 })
	})
	
	const { content } =  matter(fs.readFileSync(`${repoPath}/${readmeName}`, 'UTF-8'))

	const readme = await unified()
		.use(markdown)
		.use(highlight) 
		.use(html)
		.process(content)
		
	return {
		props: {
			...plugin,
			readmeContent: readme.toString()
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
