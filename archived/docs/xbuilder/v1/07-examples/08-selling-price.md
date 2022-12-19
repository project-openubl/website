---
title: Precio
---

Cuando creas una **boleta, factura, nota de cŕedito, o nota de débito** existen dos tipos de precios que deben de ser incluidos en el XML:

- Precio antes de impuestos.
- Precio después de impuestos.

El precio de un producto o servicio es combinado con la _cantidad_ y como resultado se obtiene el precio final de venta:

> CANTIDAD \* PRECIO ANTES DE IMPUESTOS = PRECIO DE VENTA

`XBuilder` requiere solo 2 de las 3 variables de la fórmula anterior, la tercera variable será calculada automáticamente.

- **Caso 1** - `Cantidad` y `precio antes de impuestos`.
- **Caso 2** - `Cantidad` y `precio después de impuestos`.

## Caso 1 - Cantidad y Precio antes de impuestos

El `precio antes de impuestos` puede ser definido mediante el campo `precioUnitario`:

### _Invoice (boleta/factura)_

```java {4,5,8,9}
InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build())
        )
        .build();
```

### _CreditNote (nota de crédito)_

```java {4,5,8,9}
CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build())
        )
        .build();
```

### _DebitNote (nota de débito)_

```java {4,5,8,9}
DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build())
        )
        .build();
```

## Caso 2 - Cantidad y Precio después de impuestos

El `precio después de impuestos` puede ser definido mediante el campo `precioConIgv`:

### _Invoice (boleta/factura)_

```java {4,5,8,9}
InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioConIgv(new BigDecimal(118))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioConIgv(new BigDecimal(118))
                        .build())
        )
        .build();
```

### _CreditNote (nota de crédito)_

```java {4,5,8,9}
CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioConIgv(new BigDecimal(118))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioConIgv(new BigDecimal(118))
                        .build())
        )
        .build();
```

### _DebitNote (nota de débito)_

```java {4,5,8,9}
DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioConIgv(new BigDecimal(118))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withCantidad(new BigDecimal(10))
                        .withPrecioConIgv(new BigDecimal(118))
                        .build())
        )
        .build();
```
