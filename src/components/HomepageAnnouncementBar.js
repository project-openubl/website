import React from "react";
import clsx from "clsx";
import styles from "./HomepageAnnouncementBar.module.css";

import Translate from "@docusaurus/Translate";

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.announcement, styles.announcementDark)}>
      <div className={clsx(styles.announcementInner)}>
        <Translate>¿Deseas hablar con nosotros?</Translate>{" "}
        <a
          href="https://projectopenubl.zulipchat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Translate>Únete al chat</Translate>
        </a>
        .
      </div>
    </section>
  );
}
