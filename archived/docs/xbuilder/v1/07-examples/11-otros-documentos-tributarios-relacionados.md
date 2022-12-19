---
title: Otros documentos tributarios relacionados
---

Es posible adjuntar otros documentos tributarios relacionados a comprobantes de tipo:

- Boletas/Facturas.
- Notas de crédito.
- Notas de débito.

## Boletas y facturas

Una boleta o factura puede asociar los siguientes tipos de documentos tributarios:

| Enum                                      | Código |
| ----------------------------------------- | :----: |
| TICKET_DE_SALIDA                          |   04   |
| CODIGO_SCOP                               |   05   |
| FACTURA_ELECTRONICA_REMITENTE             |   06   |
| GUIA_DE_REMISION_REMITENTE                |   07   |
| DECLARACION_DE_SALIDA_DEL_DEPOSITO_FRANCO |   08   |
| DECLARACION_SIMPLIFICADA_DE_IMPORTACION   |   09   |
| OTROS                                     |   99   |

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
        .withOtrosDocumentosTributariosRelacionados(Arrays.asList(
                DocTribRelacionadoInputModel_Invoice.Builder.aDocTribRelacionadoInputModel_Invoice()
                        .withSerieNumero("F001-1")
                        .withTipoDocumento(Catalog12_Doc_Trib_Relacionado_Invoice.DECLARACION_DE_SALIDA_DEL_DEPOSITO_FRANCO.toString())
                        .build(),
                DocTribRelacionadoInputModel_Invoice.Builder.aDocTribRelacionadoInputModel_Invoice()
                        .withSerieNumero("F002-2")
                        .withTipoDocumento(Catalog12_Doc_Trib_Relacionado_Invoice.DECLARACION_DE_SALIDA_DEL_DEPOSITO_FRANCO.toString())
                        .build()
        ))
        .build();
```

## Nota de crédito

Una nota de crédito puede asociar los siguientes tipos de documentos tributarios:

| Enum                                          | Código |
| --------------------------------------------- | :----: |
| FACTURA_EMITIDA_PARA_CORREGIR_ERROR_EN_EL_RUC |   01   |
| TICKET_DE_SALIDA                              |   04   |
| CODIGO_SCOP                                   |   05   |
| OTROS                                         |   99   |

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
        .withOtrosDocumentosTributariosRelacionados(Arrays.asList(
                DocTribRelacionadoInputModel_CreditNote.Builder.aDocTribRelacionadoInputModel_CreditNote()
                        .withSerieNumero("F001-1")
                        .withTipoDocumento(Catalog12_Doc_Trib_Relacionado_CreditNote.FACTURA_EMITIDA_PARA_CORREGIR_ERROR_EN_EL_RUC.toString())
                        .build(),
                DocTribRelacionadoInputModel_CreditNote.Builder.aDocTribRelacionadoInputModel_CreditNote()
                        .withSerieNumero("F002-2")
                        .withTipoDocumento(Catalog12_Doc_Trib_Relacionado_CreditNote.FACTURA_EMITIDA_PARA_CORREGIR_ERROR_EN_EL_RUC.toString())
                        .build()
        ))
        .build();
```

## Nota de débito

Una nota de débito puede asociar los siguientes tipos de documentos tributarios:

| Enum             | Código |
| ---------------- | :----: |
| TICKET_DE_SALIDA |   04   |
| CODIGO_SCOP      |   05   |
| OTROS            |   99   |

```java {29-38}
DebitNoteInputModel input = DebitNoteInputModel.Builder.aDebitNoteInputModel()
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
        .withOtrosDocumentosTributariosRelacionados(Arrays.asList(
                DocTribRelacionadoInputModel_DebitNote.Builder.aDocTribRelacionadoInputModel_DebitNote()
                        .withSerieNumero("F001-1")
                        .withTipoDocumento(Catalog12_Doc_Trib_Relacionado_DebitNote.TICKET_DE_SALIDA.toString())
                        .build(),
                DocTribRelacionadoInputModel_DebitNote.Builder.aDocTribRelacionadoInputModel_DebitNote()
                        .withSerieNumero("F002-2")
                        .withTipoDocumento(Catalog12_Doc_Trib_Relacionado_DebitNote.TICKET_DE_SALIDA.toString())
                        .build()
        ))
        .build();
```

## ¿Cómo se refleja en el XML?

Las documentos tributarios asociados a un comprobante se reflejan así:

```xml
<cac:AdditionalDocumentReference>
    <cbc:ID>F001-1</cbc:ID>
    <cbc:DocumentTypeCode listAgencyName="PE:SUNAT" listName="Documento Relacionado"
                          listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo12">04
    </cbc:DocumentTypeCode>
</cac:AdditionalDocumentReference>
<cac:AdditionalDocumentReference>
    <cbc:ID>F002-2</cbc:ID>
    <cbc:DocumentTypeCode listAgencyName="PE:SUNAT" listName="Documento Relacionado"
                          listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo12">04
    </cbc:DocumentTypeCode>
</cac:AdditionalDocumentReference>
```
