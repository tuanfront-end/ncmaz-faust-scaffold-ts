import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import React from "react";
import { getNextStaticProps } from "@faustwp/core";

export default function PostPage() {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href={`/post/${id}/first-comment`}> First comment</Link>
        </li>
        <li>
          <Link href={`/post/${id}/second-comment`}> Second comment</Link>
        </li>
      </ul>
    </>
  );
}

export function getStaticProps(ctx: GetStaticPropsContext) {
  return getNextStaticProps(ctx, {
    Page: PostPage,
  });
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
