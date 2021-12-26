import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import SecondButton from "../components/second_button";

const NotFoundMessages = {
    '/store': () => {
        return (
            <p>Store has been removed because of the rewrite. It might come back someday.</p>
        )
    },
    '/default': () => {
        return (
            <p>Page not found.</p>
        )
    }
}

const ErrorPageStyled = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    positition: absolute;
    text-align: center;
    overflow: hidden;
`

export default function Custom404() {
    const { asPath } = useRouter();
    const ErrorPage = NotFoundMessages[asPath] || NotFoundMessages['/default']
    return (
        <ErrorPageStyled>
            <Head>
				<title>Page not found</title>
			</Head>
            <div>
                <h2>404</h2>
                <ErrorPage />
                <Link href="/">
                    <SecondButton> {'<-'} Go Home </SecondButton>
                </Link>
            </div>
        </ErrorPageStyled>
    )
}