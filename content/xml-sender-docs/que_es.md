---
title: "¿Qué es?"
description: "XML Sender es un microservio para administrar el proceso de declaración de un comprobante XML"
date: 2020-01-28T00:39:09+09:00
draft: false
weight: 1
---

## ¿Qué es XML Sender?

Microservicio que administrar el proceso de declaración de un comprobante electrónico a la SUNAT. Recibe tu XML, envía tu XML a la SUNAT, almacena tu CDR y finalmente notifica a tu software el estado del comprobante.

Sin importar el lenguaje de programación de tu software, siempre podrás utilizar **XML Sender** ya que es un microservicio que expone un conjunto de REST endpoints.

![XML Sender Workflow](images/xml_sender_general_workload.gif)

## Licencia

El software se distribuye bajo la licencia [Eclipse Public License - v 2.0](https://github.com/project-openubl/xml-sender/blob/master/LICENSE)
