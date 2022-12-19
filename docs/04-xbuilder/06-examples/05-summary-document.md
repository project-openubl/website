---
title: SummaryDocument (Resumen diario)
description: Crear resumen diario
---

## Create _SummaryDocument_

```java
Defaults defaults;
DateProvider dateProvider;

SummaryDocuments input = SummaryDocuments.builder()
        .numero(1)
        .fechaEmisionComprobantes(dateProvider.now().minusDays(2))
        .proveedor(Proveedor.builder()
                .ruc("12345678912")
                .razonSocial("Softgreen S.A.C.")
                .build()
        )
        .comprobante(SummaryDocumentsItem.builder()
                .tipoOperacion(Catalog19.ADICIONAR.toString())
                .comprobante(Comprobante.builder()
                        .tipoComprobante(Catalog1_Invoice.BOLETA.getCode())//
                        .serieNumero("B001-1")
                        .cliente(Cliente.builder()
                                .nombre("Carlos Feria")
                                .numeroDocumentoIdentidad("12345678")
                                .tipoDocumentoIdentidad(Catalog6.DNI.getCode())
                                .build()
                        )
                        .impuestos(ComprobanteImpuestos.builder()
                                .igv(new BigDecimal("18"))
                                .icb(new BigDecimal(2))
                                .build()
                        )
                        .valorVenta(ComprobanteValorVenta.builder()
                                .importeTotal(new BigDecimal("120"))
                                .gravado(new BigDecimal("120"))
                                .build()
                        )
                        .build()
                )
                .build()
        )
        .comprobante(SummaryDocumentsItem.builder()
                .tipoOperacion(Catalog19.ADICIONAR.toString())
                .comprobante(Comprobante.builder()
                        .tipoComprobante(Catalog1.NOTA_CREDITO.getCode())
                        .serieNumero("BC02-2")
                        .comprobanteAfectado(ComprobanteAfectado.builder()
                                .serieNumero("B002-2")
                                .tipoComprobante(Catalog1.BOLETA.getCode()) //
                                .build()
                        )
                        .cliente(Cliente.builder()
                                .nombre("Carlos Feria")
                                .numeroDocumentoIdentidad("12345678")
                                .tipoDocumentoIdentidad(Catalog6.DNI.getCode())//
                                .build()
                        )
                        .impuestos(ComprobanteImpuestos.builder()
                                .igv(new BigDecimal("18"))
                                .build()
                        )
                        .valorVenta(ComprobanteValorVenta.builder()
                                .importeTotal(new BigDecimal("118"))
                                .gravado(new BigDecimal("118"))
                                .build()
                        )
                        .build()
                )
                .build()
        )
        .build();

ContentEnricher enricher = new ContentEnricher(defaults, dateProvider);
enricher.enrich(input);

Template template = TemplateProducer.getInstance().getSummaryDocuments();
String xml = template.data(input).render();
```
