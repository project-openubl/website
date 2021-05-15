---
title: Introducción
description: Crea XMLs (comprobantes electrónicos) basados en UBL según lo requerido por la SUNAT
keywords:
  - crear xml
  - ubl
  - ubl 2.1
  - factura sunat
  - facturación electrónica
image: img/xbuilder.svg
slug: /xbuilder
---

XBuilder es una libreria Java que puede crear y firmar XMLs basados en UBL (Universal Bussiness Language) de acuerdo a los estándares establecidos por la SUNAT.

## Principios de diseño

- **No requieres conocimientos del estandar UBL** -
  XBuilder expone un conjunto de POJOs que, internamente, son transformados en archivos XMLs siguiendo los estándares y especificaciones de UBL.
- **Cálculos matemáticos son hechos automáticamente** -
  XBuilder ejecuta todas las operaciones requeridas para generar determinados valores dentro de los archivos XML, por ejemplo: impuestos, totales, descuentos, etc.
- **Aplicar valores por defecto siempre que se posible** - XBuilder rellena información no espeficicada por el usuario usando valores por defecto. XBuilder requiere siempre información mínima.

## Documentos soportados

- [x] Boleta (InvoiceType)
- [x] Factura (InvoiceType)
- [x] Nota de crédito (CreditNoteType)
- [x] Nota de débito (DebitNoteType)
- [x] Baja (VoidedDocumentType)
- [x] Resumen diario (SummaryDocumentType)
- [ ] Percepción (PerceptionType)
- [ ] Retención (RetentionType)
- [ ] Guía de remisión (DespatchDocumentType)
