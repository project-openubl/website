---
title: Crear XML
---

## Crea el comprobante

```java
// Given
Invoice input = Invoice
    .builder()
    .serie("F001")
    .numero(1)
    .proveedor(Proveedor.builder().ruc("12345678912").razonSocial("Softgreen S.A.C.").build())
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
```

## Ejecuta los cálculos automáticos

Configura los valores globales por defecto:

```java
Defaults defaults = Defaults.builder()
    .moneda("PEN")
    .unidadMedida("NIU")
    .icbTasa(new BigDecimal("0.2"))
    .igvTasa(new BigDecimal("0.18"))
    .build();
```

Configura el reloj del sistema:

```java
DateProvider dateProvider = () -> LocalDate.of(2019, 12, 24);
```

Ejecuta los calculos automáticos:

```java
ContentEnricher enricher = new ContentEnricher(defaults, dateProvider);
enricher.enrich(input);
```

### Crea el XML

```java
Template template = TemplateProducer.getInstance().getInvoice();
String xml = template.data(input).render();
```
