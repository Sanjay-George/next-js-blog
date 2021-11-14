import Head from "next/head";
import Link from "next/link";

import Date from "../../components/date";
import Layout, { siteTitle } from "../../components/layout";
import Loader from "../../components/loader";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../public/styles/utils.module.css";

const title = "Intro - Myself, Me and I";

export default function Home({ posts }) {
  return (
    <Layout home title={title} legacy>
      <section className={utilStyles.headingMd}>
        <p>Who let the dogs out? Not me! Not that kinda guy.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <a href={`/legacy/posts/${id}`}>
                {title}
              </a>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <Loader></Loader>
    </Layout>
  );
}

export async function getStaticProps() {
  // fetch data and return as props
  // this props will be passed to the component.

  const posts = getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
}

// to prerender a page that needs to fetch data, export getStaticProps() or getServerSideProps()
// These methods will be called by next, either at build time, or for each request
