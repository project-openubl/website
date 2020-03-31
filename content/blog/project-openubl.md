+++
author = "Carlos Feria"
title = "Project OpenUBL"
date = "2019-12-09"
#description = "Project OpenUBL first blog"
tags = [
    "project-openulb",
    "launch",
]
image = "images/logo512.png"
+++

## ¿Qué es Project OpenUBL?

Project OpenUBL es un proyecto Open Source que incluye un conjunto de herramientas, librerias, microservicios asociados a la Facturación Electrónica en el Perú.

<!--more-->

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

{{< css.inline >}}

<style>
.canon { background: white; width: 100%; height: auto;}
</style>

{{< /css.inline >}}
