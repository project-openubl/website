---
title: VoidedDocument (Baja)
description: Crear baja
---

## Create _VoidedDocument_

```java
Defaults defaults;
DateProvider dateProvider;

VoidedDocuments input = VoidedDocuments.builder()
        .numero(1)
        .fechaEmision(LocalDate.of(2022, 01, 31))
        .fechaEmisionComprobantes(LocalDate.of(2022, 01, 29))
        .proveedor(Proveedor.builder()
                .ruc("12345678912")
                .razonSocial("Softgreen S.A.C.")
                .build()
        )
        .comprobante(VoidedDocumentsItem.builder()
                .serie("F001")
                .numero(1)
                .tipoComprobante(Catalog1_Invoice.FACTURA.getCode())
                .descripcionSustento("Mi sustento1")
                .build()
        )
        .comprobante(VoidedDocumentsItem.builder()
                .serie("F001")
                .numero(2)
                .tipoComprobante(Catalog1_Invoice.FACTURA.getCode())
                .descripcionSustento("Mi sustento2")
                .build()
        )
        .build();

ContentEnricher enricher = new ContentEnricher(defaults, dateProvider);
enricher.enrich(input);

Template template = TemplateProducer.getInstance().getVoidedDocument();
String xml = template.data(input).render();
```
