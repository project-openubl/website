import React from "react";
import clsx from "clsx";
import styles from "./HomepagePosibilities.module.css";

import Translate from "@docusaurus/Translate";

export default function HomepageFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="container text--center">
            <div>
              <h2>
                <Translate>
                  Crea tu propio software de facturación electrónica.
                </Translate>
              </h2>
            </div>
            <div className="row">
              <div className="col col--6">
                <div>
                  <img src="img/undraw_software_engineer_lvl5.svg" />
                </div>
              </div>
              <div className="col col--6">
                <div>
                  <img src="img/xml-example.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
