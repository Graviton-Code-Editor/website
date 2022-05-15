import Head from "next/head";
import Navbar from "../components/navbar.jsx";
import HomeLayout from "../components/home_layout.jsx";
import Link from "next/link";

function About() {
  return (
    <div style={{ height: "100%" }}>
      <Head>
        <title>Graviton Editor</title>
      </Head>
      <Navbar />
      <HomeLayout>
        <div style={{ padding: 15 }}>
          <h1>About</h1>
          <p>
            Graviton is a project centered around Graviton Editor, a code editor
            for Desktop, since 2018.
            <br />
            <br />
            Only maintainer:{" "}
            <Link href="https://github.com/marc2332">
              Marc Espín Sanz
            </Link>
			<br/>
			<br/>
			Source Code:{" "}
            <Link href="https://github.com/Graviton-Code-Editor/Graviton-App">
             Github
            </Link>
          </p>
        </div>
      </HomeLayout>
    </div>
  );
}

export default About;
