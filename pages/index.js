import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello! My name is Chip Long. I have been working as a manual software
          quality assurance engineer for the past 12 years. I started that
          career working at a third party testing house so I was able to test a
          very wide variety of software. Everything from games, to websites, to
          security programs. I have also worked briefly in the insurance world,
          but mostly the last several years have been working in FinTech on
          mobile banking solutions.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
