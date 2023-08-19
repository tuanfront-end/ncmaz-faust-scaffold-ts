import "../../faust.config";
import React from "react";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <>
        <Link href="/post/example">_____/post/example</Link>
        <br />
        <Link href="/post/example-1/second-comment">
          ___/post/example-1/second-comment
        </Link>
      </>

      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
