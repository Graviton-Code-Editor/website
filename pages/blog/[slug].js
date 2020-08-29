import fs from 'fs'
import matter from 'gray-matter'
import Navbar from '../../components/navbar.jsx'
import Layout from '../../components/layout.jsx'
import BlogLayout from '../../components/blog.layout.jsx'
import Title from '../../components/title.jsx'
import unified from 'unified'
import markdown from 'remark-parse'
import highlight from 'remark-highlight.js'
import html from 'remark-html'
import Head from 'next/head'

function Post({ title, content }) {
	return (
		<Layout>
			<Head>
				<title>Blog | {title}</title>
			</Head>
			<Navbar/>
			<Title>{title}</Title>
			<BlogLayout>
				<div>
					<div className="markdown-container" dangerouslySetInnerHTML={{ __html: content}}/>
				</div>
			</BlogLayout>
			
		</Layout>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync(`${process.cwd()}/blog`);

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const { content, data } =  matter(fs.readFileSync(`${process.cwd()}/blog/${slug}.md`, 'UTF-8'))

	const result = await unified()
		.use(markdown)
		.use(highlight) 
		.use(html)
		.process(content)
	return {
		props: {
			...data,
			content: result.toString()
		}
	}
}


export default Post
