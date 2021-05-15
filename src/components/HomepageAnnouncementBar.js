import React from "react";
import clsx from "clsx";
import styles from "./HomepageAnnouncementBar.module.css";

import Translate from "@docusaurus/Translate";

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.announcement, styles.announcementDark)}>
      <div className={clsx(styles.announcementInner)}>
        ¿Deseas hablar con nosotros?{" "}
        <a
          href="https://v1.docusaurus.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Únete al chat
        </a>
        .
      </div>
    </section>
  );
}
