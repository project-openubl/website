---
title: CreditNote (Nota de crédito)
description: Crear nota de credito
---

## Create _CreditNote_

```java
Defaults defaults;
DateProvider dateProvider;

CreditNote input = CreditNote.builder()
        .serie("FC01")
        .numero(1)
        .comprobanteAfectadoSerieNumero("F001-1")
        .sustentoDescripcion("mi sustento")
        .proveedor(Proveedor.builder()
                .ruc("12345678912")
                .razonSocial("Softgreen S.A.C.")
                .build()
        )
        .cliente(Cliente.builder()
                .nombre("Carlos Feria")
                .numeroDocumentoIdentidad("12121212121")
                .tipoDocumentoIdentidad(Catalog6.RUC.toString())
                .build()
        )
        .detalle(DocumentoVentaDetalle.builder()
                .descripcion("Item1")
                .cantidad(new BigDecimal("10"))
                .precio(new BigDecimal("100"))
                .build()
        )
        .detalle(DocumentoVentaDetalle.builder()
                .descripcion("Item2")
                .cantidad(new BigDecimal("10"))
                .precio(new BigDecimal("100"))
                .build()
        )
        .build();

ContentEnricher enricher = new ContentEnricher(defaults, dateProvider);
enricher.enrich(input);

Template template = TemplateProducer.getInstance().getCreditNote();
String xml = template.data(input).render();
```
