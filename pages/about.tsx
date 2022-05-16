import Head from "next/head";
import Navbar from "../components/Navbar";
import * as MainLayout from "../components/MainLayout";
import Link from "next/link";
import Title from "../components/Title";

function About() {
  return (
    <>
      <Head>
        <title>Graviton Editor</title>
      </Head>
      <Navbar />
      <MainLayout.Content>
        <div style={{ padding: 15 }}>
          <Title>About</Title>
          <p>
            Graviton is a project centered around Graviton Editor, a code editor
            for Desktop, since 2018.
            <br />
            <br />
            Only maintainer:{" "}
            <Link href="https://github.com/marc2332">
              Marc Espín Sanz
            </Link>
            <br />
            <br />
            Source Code:{" "}
            <Link href="https://github.com/Graviton-Code-Editor/Graviton-App">
              Github
            </Link>
          </p>
        </div>
      </MainLayout.Content>
    </>
  );
}

export default About;
