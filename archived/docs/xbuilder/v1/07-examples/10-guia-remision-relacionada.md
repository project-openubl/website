---
title: Guía remisión relacionada
---

Es posible adjuntar guías de remisión relacionada un comprobante electrónico de tipo:

- Boletas/Facturas.
- Notas de crédito.
- Notas de débito.

## Tipos de guía de remisión

Un comprobante puede tener 2 tipos de gúias de remisión asociada:

| Enum                        | Código |
| --------------------------- | :----: |
| GUIA_REMISION_REMITENTE     |   09   |
| GUIA_REMISION_TRANSPORTISTA |   31   |

## Ejemplos

### Boletas y facturas

Para agregar guías de remision relacionadas utiliza `withGuiasRemisionRelacionadas` como en el ejemplo:

```java {27-36}
InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()
        .withSerie("F001")
        .withNumero(1)
        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()
                .withRuc("12345678912")
                .withRazonSocial("Softgreen S.A.C.")
                .build()
        )
        .withCliente(ClienteInputModel.Builder.aClienteInputModel()
                .withNombre("Carlos Feria")
                .withNumeroDocumentoIdentidad("12121212121")
                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())
                .build()
        )
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withDescripcion("Item1")
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withDescripcion("Item2")
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build())
        )
        .withGuiasRemisionRelacionadas(Arrays.asList(
                GuiaRemisionRelacionadaInputModel.Builder.aGuiaRemisionRelacionadaInputModel()
                        .withSerieNumero("0001-002020")
                        .withTipoDocumento(Catalog1_Guia.GUIA_REMISION_REMITENTE.toString())
                        .build(),
                GuiaRemisionRelacionadaInputModel.Builder.aGuiaRemisionRelacionadaInputModel()
                        .withSerieNumero("0002-002020")
                        .withTipoDocumento(Catalog1_Guia.GUIA_REMISION_REMITENTE.toString())
                        .build()
        ))
        .build();
```

### Nota de crédito

Al igual que en el caso de las facturas/boletas utiliza `withGuiasRemisionRelacionadas` como en el ejemplo:

```java {29-38}
CreditNoteInputModel input = CreditNoteInputModel.Builder.aCreditNoteInputModel()
        .withSerie("FC01")
        .withNumero(1)
        .withSerieNumeroComprobanteAfectado("F001-1")
        .withDescripcionSustento("mi sustento")
        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()
                .withRuc("12345678912")
                .withRazonSocial("Softgreen S.A.C.")
                .build()
        )
        .withCliente(ClienteInputModel.Builder.aClienteInputModel()
                .withNombre("Carlos Feria")
                .withNumeroDocumentoIdentidad("12121212121")
                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())
                .build()
        )
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withDescripcion("Item1")
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withDescripcion("Item2")
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build())
        )
        .withGuiasRemisionRelacionadas(Arrays.asList(
                GuiaRemisionRelacionadaInputModel.Builder.aGuiaRemisionRelacionadaInputModel()
                        .withSerieNumero("0001-002020")
                        .withTipoDocumento(Catalog1_Guia.GUIA_REMISION_REMITENTE.toString())
                        .build(),
                GuiaRemisionRelacionadaInputModel.Builder.aGuiaRemisionRelacionadaInputModel()
                        .withSerieNumero("0002-002020")
                        .withTipoDocumento(Catalog1_Guia.GUIA_REMISION_REMITENTE.toString())
                        .build()
        ))
        .build();
```

### Nota de débito

Al igual que en el caso de las facturas/boletas utiliza `withGuiasRemisionRelacionadas` como en el ejemplo:

```java {29-38}
DebitNoteInputModel input = DebitNoteInputModel.Builder.aDebitNoteInputModel()
        .withSerie("FD01")
        .withNumero(1)
        .withSerieNumeroComprobanteAfectado("F001-1")
        .withDescripcionSustento("mi sustento")
        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()
                .withRuc("12345678912")
                .withRazonSocial("Softgreen S.A.C.")
                .build()
        )
        .withCliente(ClienteInputModel.Builder.aClienteInputModel()
                .withNombre("Carlos Feria")
                .withNumeroDocumentoIdentidad("12121212121")
                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())
                .build()
        )
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withDescripcion("Item1")
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withDescripcion("Item2")
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build())
        )
        .withGuiasRemisionRelacionadas(Arrays.asList(
                GuiaRemisionRelacionadaInputModel.Builder.aGuiaRemisionRelacionadaInputModel()
                        .withSerieNumero("0001-002020")
                        .withTipoDocumento(Catalog1_Guia.GUIA_REMISION_REMITENTE.toString())
                        .build(),
                GuiaRemisionRelacionadaInputModel.Builder.aGuiaRemisionRelacionadaInputModel()
                        .withSerieNumero("0002-002020")
                        .withTipoDocumento(Catalog1_Guia.GUIA_REMISION_REMITENTE.toString())
                        .build()
        ))
        .build();
```

## ¿Cómo se refleja en el XML?

Las guías de remisión asociadas a un comprobante se reflejan así:

```xml
<cac:DespatchDocumentReference>
    <cbc:ID>0001-002020</cbc:ID>
    <cbc:DocumentTypeCode listAgencyName="PE:SUNAT" listName="Tipo de Documento"
                          listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">09
    </cbc:DocumentTypeCode>
</cac:DespatchDocumentReference>
<cac:DespatchDocumentReference>
    <cbc:ID>0002-002020</cbc:ID>
    <cbc:DocumentTypeCode listAgencyName="PE:SUNAT" listName="Tipo de Documento"
                          listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">09
    </cbc:DocumentTypeCode>
</cac:DespatchDocumentReference>
```
