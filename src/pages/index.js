import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import HeroImg from "../../static/img/Hero.jpg";
import Logo from "../../static/img/logonav.png";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          <img src={Logo} alt="Logo" />
          <h2>
            <i>"Because Code is Poetry"</i>
          </h2>
        </h1>
        <div className={styles.buttonContainer}></div>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Because Code is Poetry">
      <HomepageHeader />
      <Head>
        <meta
          name="google-site-verification"
          content="GSzYIGKuf_zxvjfMsq4PdOnZvl9vG7gyDCqy8KSIYeE"
        />
        <meta property="og:title" content="SPTechBlogs - Shivam Pawar's Blog" />
        <meta
          property="og:description"
          content="Insights, tutorials, and more from Shivam Pawar's tech world."
        />
        <meta name="author" content="Shivam Pawar" />
        <meta
          name="image"
          property="og:image"
          content="https://shivam-pawar.github.io/sptechblogs/img/logonav.png"
        />
        <meta
          property="og:url"
          content="https://shivam-pawar.github.io/sptechblogs/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SP Tech Blogs" />
        <meta
          name="twitter:description"
          content="Insights, tutorials, and more from Shivam Pawar's tech world."
        />
        <meta
          name="twitter:image"
          content="https://shivam-pawar.github.io/sptechblogs/img/logonav.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "SPTechBlogs",
            url: "https://shivam-pawar.github.io/sptechblogs/",
            author: {
              "@type": "Person",
              name: "Shivam Pawar",
            },
          })}
        </script>
      </Head>
    </Layout>
  );
}
