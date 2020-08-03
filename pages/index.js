import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import Title from '../components/title.jsx'

function Home() {
	return (
		<HomeLayout>
			<Navbar/>
			<div>
				<div>
					<p>A <b>modern</b> code editor.</p>
					<div>
						<img src="screenshot.png"/>
					</div>
				</div>
			</div>
		</HomeLayout>
	)
}

export default Home
