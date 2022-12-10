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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J12Q30FK82"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-J12Q30FK82');
        </script>
      </Head>
    </Layout>
  );
}
