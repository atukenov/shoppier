"use client";
import { useEffect } from "react";
import Head from "next/head";

const useMetadata = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default useMetadata;
