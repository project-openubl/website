---
title: ICB
---

_Inpuesto al Consumo de Bolsas plásticas (ICB)_ es un impuesto aplicado a cada producto o servicio vendido y puede estar presente en **boleta, factura, nota de cŕedito, o nota de débito**.

El valor actual del _ICB_ es _0.3 Soles_ pero este valor puede cambiar con el tiempo. Puedes configurar el valor del ICB en [Conceptos básicos](../concepts#config).

## Valor del _ICB_

El valor del _ICB_ es definido en `Config`. Puedes leer sonbre `Config` en [Conceptos básicos](../concepts#config).

## Valor por defecto del _ICB_

Por defecto el ICB no es aplicado a los productos o servicios vendidos.

## Ejemplos

### _Invoice (boleta/factura)_

Usa el campo `icb` en cada item:

```java {4,7}
InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withIcb(true)
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withIcb(true)
                        .build())
        )
        .build();
```

### _CreditNote (nota de crédito)_

Usa el campo `icb` en cada item:

```java {4,7}
CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withIcb(true)
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withIcb(true)
                        .build())
        )
        .build();
```

### _DebitNote (nota de débito)_

Usa el campo `icb` en cada item:

```java {4,7}
DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withIcb(true)
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withIcb(true)
                        .build())
        )
        .build();
```
