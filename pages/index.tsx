import Navbar from "../components/navbar.jsx";
import HomeLayout from "../components/home_layout.jsx";
import Title from "../components/title.jsx";
import Footer from "../components/footer.jsx";
import Button from "../components/button.jsx";
import SecondButton from "../components/second_button.jsx";
import Head from "next/head";
import Link from "next/link";
import Note from "../components/note.jsx";
import Image from "next/image";

function Home() {
  return (
    <div style={{ height: "100%" }}>
      <Head>
        <title>Graviton Editor</title>
      </Head>
      <Navbar />
      <HomeLayout>
        <div className="container">
          <div className="center">
            <Title>Minimalist & fast code editor</Title>
            <p>
              Graviton Editor is an open source, free and cross-platform code
              editor.
            </p>
            <Link href="/download">
              <Button>DOWNLOAD BETA</Button>
            </Link>
            <Link href="https://github.com/Graviton-Code-Editor/Graviton-App">
              <SecondButton>Contribute {"->"}</SecondButton>
            </Link>
            <Note>Note: Graviton is currently being reworked.</Note>
            <br/>
            <Image
              src="/screenshot.png"
              width="812"
              height="585"
              layout="responsive"
            />
          </div>
          <div className="footer">
            <div>
              <a
                title="Source Code"
                target="_blank"
                href="https://github.com/Graviton-Code-Editor/Graviton-App"
              >
                <img alt="Source Code" id="github_link" src="github_mark.png" />
              </a>
              <a
                title="Twitter Account"
                target="_blank"
                href="https://twitter.com/gravitoneditor"
              >
                <img
                  alt="Twitter Account"
                  id="twitter_link"
                  src="twitter.svg"
                />
              </a>
              <a
                title="Discord Server"
                target="_blank"
                href="https://discord.com/invite/gg6CTYA"
              >
                <img alt="Discord Server" id="discord_link" src="discord.svg" />
              </a>
            </div>
            <Footer />
          </div>
        </div>
      </HomeLayout>
    </div>
  );
}

export default Home;
