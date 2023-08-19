import { getNextStaticProps } from "@faustwp/core";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";

export default function CommentPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const comment = router.query.comment as string;

  return (
    <>
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
    </>
  );
}

export function getStaticProps(ctx: GetStaticPropsContext) {
  return getNextStaticProps(ctx, {
    Page: CommentPage,
  });
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
