import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import SecondaryButton from "../components/SecondaryButton";

const NotFoundMessages = {
  "/store": () => {
    return (
      <p>
        Store has been removed because of the work-in-progress rework. It might
        come back someday.
      </p>
    );
  },
  "/default": () => {
    return <p>Page not found.</p>;
  },
};

const ErrorPageStyled = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    positition: absolute;
    text-align: center;
    overflow: hidden;
`;

export default function Custom404() {
  const { asPath } = useRouter();
  const ErrorPage = NotFoundMessages[asPath] || NotFoundMessages["/default"];
  return (
    <ErrorPageStyled>
      <Head>
        <title>Page not found</title>
      </Head>
      <div>
        <h2>404</h2>
        <ErrorPage />
        <Link href="/">
          <SecondaryButton>{"<-"} Go Home</SecondaryButton>
        </Link>
      </div>
    </ErrorPageStyled>
  );
}
