---
id: project-openubl
title: Project OpenUBL
author: carlosthe19916
author_title: Core Team
author_url: https://github.com/carlosthe19916
author_image_url: https://avatars3.githubusercontent.com/u/2582866?s=460&u=8567bb6bedfdc35830b70ce661e3c93cf3edd68a&v=4
tags: [project]
---

## ¿Qué es Project OpenUBL?

Project OpenUBL es un proyecto Open Source que incluye un conjunto de herramientas, librerias, microservicios asociados a la Facturación Electrónica en el Perú.

<!--truncate-->

Project OpenUBL nace porque ví que todos crean sus propios softwares y no hay ninguna iniciativa de crear soluciones de nivel empresarial utilizando herramientas Open Source. El conocimiento debe de ser compartido y plasmado en algo concreto.

## ¿Qué no es Project OpenUBL?

Project OpenUBL no es un software de Facturación Electrónica. El objetivo de Project OpenUBL es crear herramientas que otros softwares, empresas, o desarrolladores puedan usar en sus propios projectos.

## ¿Qué contiene Project OpenUBL?

Por el momento Project OpenUBL contiene 2 herramientas:

- **XML Builder**: microservicio para crear comprobantes de pago electrónicos usando UBL 2.1.
- **SUNAT Web Services**: Libreria Java usada para enviar XMLs a la SUNAT.

## ¿Qué otros projectos serán incluidos en Project OpenUBL?

Pronto Project OpenUBL incluirá:

- XML Signer: microservicio para firmar electrónicamente arachivos XML
- XML Reporter: microservicio para generar PDFs (versión impresa del comprobante)
- XML Sender: microservicio para enviar comprobantes a la SUNAT.

## Hablemos de XML Builder

XML Builder es un microservicio que expone servicios web rest que pueden ser usados para crear comprobantes de pago electrónicos como factura, boleta, nota de crédito, nota de débito, etc. Se llama XML Builder porque cada uno de sus endpoints generan archivos XMLs basados en el estandar UBL 2.1.

La idea de XML Builder es crear comprobantes con los datos mínimos necesarios; XML Builder debe de generar la mayoria de datos automáticamente. Además los endpoints son User Friendly, es decir los endpoints no requieren de engorrosos códigos de Catálogos como los piden la mayoria de softwares en el mercado nacional actual.

Si deseas contribuir al proyecto puedes hacerlo de muchas formas:

- Crear o mejorar la documentación del proyecto
- Crear Github issues reportando errores o mejoras
- Expandir la noticia del projecto
