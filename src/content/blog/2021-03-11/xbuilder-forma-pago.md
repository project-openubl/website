---
title: XBuilder 1.1.6.Final
date: 2021-03-11T07:00:00Z
author: carlosthe19916
tags:
  - xbuilder
---

¡XBuilder 1.1.6.Final fue lanzado!

Una nueva versión de `XBuilder` fue lanzada. Como siempre, las versiones anteriores son completamente compatibles con las anteriores.

El cambio más importante es la introducción de pagos al crédito y al contado. Con este feature garantizamos el soporte a la [Resolución de Superintendencia N° 193-2020/SUNAT](https://cpe.sunat.gob.pe/nuevos-requisitos-para-cpe) en el que incorporan la obligatoriedad de consignar la forma de pago.

<!--truncate-->

### ¿Cuales son los cambios y cuando entrarán en vigencia?

A partir del 01 de abril del 2021 todas las facturas/boletas deberán de indicar el tipo de pago (contado o crédito). Si tu XML no contiene esos campos entonces la SUNAT rechazará esos comprobantes por lo que este es un cambio obligatorio. Para conocer más sobre los cambios que entrarán en vigencia el próximo mes lee [Resolución de Superintendencia N° 193-2020/SUNAT](https://cpe.sunat.gob.pe/nuevos-requisitos-para-cpe).

### ¿Qué necesitas para cumplir con el nuevo requerimiento?

- Si ya usas `XBuilder` solamente actualiza la librería a la versión más reciente. Si solamente emites comprobantes al contado entonces tendrás `Cero` cambios en tu software ya existente. Por otro lado, si emites comprobantes al crédito entonces utiliza nuestro [manual](https://project-openubl.github.io/docs/xbuilder/ejemplos/formaPago) para empezar a emitir comprobantes al crédito.
