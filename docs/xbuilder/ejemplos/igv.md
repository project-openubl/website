---
title: IGV
---

_Inpuesto General a las Ventas (IGV)_ es un impuesto aplicado durante la venta de un producto o servicio. Cuando creas una **boleta, factura, nota de cŕedito, o nota de débito** tu puedes definir, por cada item vendido, un tipo específico de _IGV_. Todos los tipos de _IGV_ pueden ser agrupados en los siguientes grupos:

- Gravadas
- Exoneradas
- Inafectas
- Gratuitas

El IGV es aplicado a cada item (producto o servicio) que se vende.

## Tipos de IGV

El tipo de IGV es definido en el atributo `tipoIgv` y los valores posibles que puede tomar vienen definidos por el **Catálogo 07** definido por la SUNAT.

| Value                                     | Code |
| ----------------------------------------- | ---- |
| GRAVADO_OPERACION_ONEROSA                 | 10   |
| GRAVADO_RETIRO_POR_PREMIO                 | 11   |
| GRAVADO_RETIRO_POR_DONACION               | 12   |
| GRAVADO_RETIRO                            | 13   |
| GRAVADO_RETIRO_POR_PUBLICIDAD             | 14   |
| GRAVADO_BONIFICACIONES                    | 15   |
| GRAVADO_RETIRO_POR_ENTREGA_A_TRABAJADORES | 16   |
| GRAVADO_IVAP                              | 17   |
| EXONERADO_OPERACION_ONEROSA               | 20   |
| EXONERADO_TRANSFERENCIA_GRATUITA          | 21   |
| INAFECTO_OPERACION_ONEROSA                | 30   |
| INAFECTO_RETIRO_POR_BONIFICACION          | 31   |
| INAFECTO_RETIRO                           | 32   |
| INAFECTO_RETIRO_POR_MUESTRAS_MEDICAS      | 33   |
| INAFECTO_RETIRO_POR_CONVENIO_COLECTIVO    | 34   |
| INAFECTO_RETIRO_POR_PREMIO                | 35   |
| INAFECTO_RETIRO_POR_PUBLICIDAD            | 36   |
| EXPORTACION                               | 40   |

## Tipo de IGV por defecto

Si el `tipoIgv` no es definido durante la creación del XML entonces se aplica el `tipoIgv` por defecto definido en la interfaz `Config`. Puedes leer un poco más sobre `Config` en [Conceptos básicos](../concepts#config)

## Ejemplos

### _Invoice (boleta/factura)_

Usa el campo `tipoIgv` en cada elemento vendido:

```java {4,7}
InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())
                        .build())
        )
        .build();
```

### _CreditNote (nota de crédito)_

Usa el campo `tipoIgv` en cada elemento vendido:

```java {4,7}
CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())
                        .build())
        )
        .build();
```

### _DebitNote (nota de débito)_

Usa el campo `tipoIgv` en cada elemento vendido:

```java {4,7}
DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withTipoIgv(Catalog7.GRAVADO_OPERACION_ONEROSA.toString())
                        .build())
        )
        .build();
```
