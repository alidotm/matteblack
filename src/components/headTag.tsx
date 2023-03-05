import Head from "next/head";
import { type FC } from "react";

type HeadProps = {
  title?: string;
  description?: string;
};

const HeadTag: FC<HeadProps> = (props) => {
  return (
    <Head>
      <title>{props.title || "MatteBlack"}</title>
      <meta
        name="description"
        content={
          props.description ||
          "Matteblack is ecommerce website made by github.com/alidotm"
        }
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#141414" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default HeadTag;
