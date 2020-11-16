import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import Title from '../components/title.jsx'
import Footer from '../components/footer.jsx'
import Button from '../components/button.jsx'
import SecondButton from '../components/second_button.jsx'
import DownloadCard from '../components/download_card'
import Head from 'next/head'
import Link from 'next/link'
import { IoLogoWindows, IoLogoApple  } from "react-icons/io"
import { GrDebian  } from "react-icons/gr"
import { FaLinux  } from "react-icons/fa"

function Download() {
	return (
		<div style={{height: '100%'}}>
			<Head>
				<title>Graviton Editor</title>
			</Head>
			<Navbar/>
			<HomeLayout>
				<div className="container">
					<Title>Download</Title>
					<p className="note">Last release is version 2.0.92</p>
					<div className="horizontal">
						<DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/2.0.92/GravitonEditor_Installer_2.0.92_win.exe">
							<IoLogoWindows></IoLogoWindows>
							Windows
						</DownloadCard>
						<DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/2.0.92/GravitonEditor_Installer_2.0.92_linux.deb">
							<GrDebian></GrDebian>
							Debian
						</DownloadCard>
						<DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/2.0.92/GravitonEditor_Installer_2.0.92_linux.AppImage">
							<FaLinux></FaLinux>
							AppImage
						</DownloadCard>
						<DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/2.0.92/GravitonEditor_Installer_2.0.92_linux.rpm">
							<FaLinux></FaLinux>
							RPM
						</DownloadCard>
						<DownloadCard href="https://github.com/Graviton-Code-Editor/Graviton-App/releases/download/2.0.92/GravitonEditor_Installer_2.0.92_mac.dmg">
							<IoLogoApple></IoLogoApple>
							<span>MacOS</span>
						</DownloadCard>
					</div>
				</div>
			</HomeLayout>
		</div>
	)
}

export default Download
