---
title: Perception (Percepción)
description: Crear Percepcion
---

## Create _Perception_

```java
Defaults defaults;
DateProvider dateProvider;

Perception input = Perception.builder()
        .serie("P001")
        .numero(1)
        .fechaEmision(LocalDate.of(2022, 01, 31))
        .proveedor(Proveedor.builder()
                .ruc("12345678912")
                .razonSocial("Softgreen S.A.C.")
                .build()
        )
        .cliente(Cliente.builder()
                .nombre("Carlos Feria")
                .numeroDocumentoIdentidad("12121212121")
                .tipoDocumentoIdentidad(Catalog6.RUC.getCode())
                .build()
        )
        .importeTotalPercibido(new BigDecimal("10"))
        .importeTotalCobrado(new BigDecimal("210"))
        .tipoRegimen(Catalog22.VENTA_INTERNA.getCode())
        .tipoRegimenPorcentaje(Catalog22.VENTA_INTERNA.getPercent()) //
        .operacion(PercepcionRetencionOperacion.builder()
                .numeroOperacion(1)
                .fechaOperacion(LocalDate.of(2022, 01, 31))
                .importeOperacion(new BigDecimal("100"))
                .comprobante(ComprobanteAfectado.builder()
                        .tipoComprobante(Catalog1.FACTURA.getCode())
                        .serieNumero("F001-1")
                        .fechaEmision(LocalDate.of(2022, 01, 31))
                        .importeTotal(new BigDecimal("200"))
                        .moneda("PEN")
                        .build()
                )
                .build()
        )
        .build();

ContentEnricher enricher = new ContentEnricher(defaults, dateProvider);
enricher.enrich(input);

Template template = TemplateProducer.getInstance().getPerception();
String xml = template.data(input).render();
```
