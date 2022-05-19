import Navbar from "../components/Navbar";
import * as MainLayout from "../components/MainLayout";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";
import Head from "next/head";
import Link from "next/link";
import Note from "../components/Note";
import Image from "next/image";
import SocialLinks from "../components/Social";
import Title from "../components/Title";
import CenteredContainer from "../components/CenteredContainer";

function Home() {
  return (
    <>
      <Head>
        <title>Graviton Editor</title>
      </Head>
      <Navbar />
      <MainLayout.Content>
        <CenteredContainer>
          <MainLayout.Header>
            <Title>Minimalist & fast code editor</Title>
            <p>
              Graviton Editor is an open source, free and cross-platform code
              editor. 
              <br/>
              Powered by Rust 🦀, Tauri 🖥️, Deno 🦕 and React ⚛️.
            </p>
            <Link href="/download">
              <Button>DOWNLOAD BETA</Button>
            </Link>
            <Link href="https://github.com/Graviton-Code-Editor/Graviton-App">
              <SecondaryButton>Contribute {"->"}</SecondaryButton>
            </Link>
            <Note>Graviton is currently being redone, this is how it looks like:</Note>
            <br />
            <Image
              src="/screenshot2.png"
              width="6028"
              height="3624"
              layout="responsive"
              alt="Graviton Screenshot"
            />
          </MainLayout.Header>
          <div>
            <SocialLinks />
            <Footer />
          </div>
        </CenteredContainer>
      </MainLayout.Content>
    </>
  );
}

export default Home;
