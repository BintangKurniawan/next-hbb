/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";

const detailBlog = () => {
  const router = useRouter();

  return (
    <>
      <div>Youre now seeing the {router.query.slug} blog</div>
      <div>Now try change the number one in link with everything you want. this will help you to get detail data from api.</div>
    </>
  );
};

export default detailBlog;
