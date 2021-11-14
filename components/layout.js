import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../public/styles/utils.module.css";
import Link from "next/link";

const name = "Sanjay G.";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home, title, legacy }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title || siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={120}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={144}
                  width={120}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              {!legacy ? (
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              ) : (
                <a href="/legacy/" className={utilStyles.colorInherit}>
                  {name}
                </a>
              )}
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          {!legacy ? (
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          ) : (
            <a href="/legacy/">← Back to home</a>
          )}
        </div>
      )}
    </div>
  );
}

// NOTES
// <>...</> are React Fragments: https://reactjs.org/docs/fragments.html
// Add classes to <a> tag, and not the <Link>
