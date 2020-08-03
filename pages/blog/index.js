import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx';
import Navbar from '../../components/navbar.jsx'
import Link from 'next/link'
import Layout from '../../components/layout.jsx'
import BlogList from '../../components/blog.list.jsx'
import BlogCard from '../../components/blog.card.jsx'
import Title from '../../components/title.jsx'

function Blog({ posts }) {
	return (
		<div style={{height: '100%'}}>
			<Navbar/>
			<Title>Blog</Title>
			<BlogList>
				<div>
					{posts.map(post => {
						return (
							<BlogCard key={post.title}>
								<Link href={`/blog/${post.slug}`}>
									<div>
										<img src={post.cover}/>
										<h4>{post.title}</h4>
										<p>{post.description}</p>
									</div>
								</Link>
							</BlogCard> 
						)
					})}
				</div>
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
