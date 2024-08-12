---
title: Invoice (Boleta/Factura)
description: Crear boleta o factura
---

## Crear _Invoice_

```java
Defaults defaults;
DateProvider dateProvider;

Invoice input = Invoice.builder()
        .serie("F001")
        .numero(1)
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
                .unidadMedida("KGM")
                .build()
        )
        .detalle(DocumentoVentaDetalle.builder()
                .descripcion("Item2")
                .cantidad(new BigDecimal("10"))
                .precio(new BigDecimal("100"))
                .unidadMedida("KGM")
                .build()
        )
        .build();

ContentEnricher enricher = new ContentEnricher(defaults, dateProvider);
enricher.enrich(input);

Template template = TemplateProducer.getInstance().getInvoice();
String xml = template.data(input).render();
```
