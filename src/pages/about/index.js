import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";

function About() {
  return (
    <Layout
      title={<Translate>¿Qué es Project OpenUBL?</Translate>}
      description={
        <Translate>
          Project OpenUBL es un conjunto de herramientas Open Source para
          ayudarte a crear tu propio software de Facturación Electrónica.
        </Translate>
      }
    >
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>
            <Translate>¿Qué es Project OpenUBL?</Translate>
          </h1>
          <img
            alt="Project OpenUBL"
            src="img/project-openubl-logo.png"
            style={{ height: 100 }}
          />
          <h4>Project OpenUBL</h4>
          <div className="row">
            <div className="col col--6 col--offset-3">
              <p>
                <Translate>
                  Project OpenUBL es un proyecto Open Source que incluye un
                  conjunto de herramientas, librerias, microservicios asociados
                  a la Facturación Electrónica en el Perú.
                </Translate>
              </p>
              <p>
                <Translate>
                  Project OpenUBL nace porque ví que todos crean sus propios
                  softwares y no hay ninguna iniciativa de crear soluciones de
                  nivel empresarial utilizando herramientas Open Source. El
                  conocimiento debe de ser compartido y plasmado en algo
                  concreto.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
