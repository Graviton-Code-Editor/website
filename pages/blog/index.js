import fs from 'fs'
import matter from 'gray-matter'
import Navbar from '../../components/navbar.jsx'
import Link from 'next/link'
import BlogList from '../../components/blog.list.jsx'
import BlogCard from '../../components/blog.card.jsx'
import Title from '../../components/title.jsx'
import Head from 'next/head'

function Blog({ posts }) {
	return (
		<div style={{height: '100%'}}>
			<Navbar/>
			<Head>
				<title>Blog</title>
			</Head>
			<Title>Blog</Title>
			<BlogList>
				{posts.map(post => {
					return (
						<Link key={post.title} href={`/blog/${post.slug}`}>
							<BlogCard >
								<div>
									<h2>{post.title}</h2>
									<span className="date">{post.date}</span>
									<p>{post.description}</p>
								</div>
							</BlogCard> 
						</Link>
					)
				})}
			</BlogList>
		</div>
	)
}


export async function getStaticProps(context) {
	let posts = fs.readdirSync(`${process.cwd()}/blog`)
	
	posts = posts.map(post => {
		const { content, data } =  matter(fs.readFileSync(`${process.cwd()}/blog/${post}`, 'UTF-8'))
		return {
			...data,
			content
		}
	})

	return {
		props: {
			posts
		}
	}
}


export default Blog
