---
title: Anticipos
---

Los anticipos solo pueden ser aplicados en boletas/facturas.

## Tipos de anticipos

Un comprobante puede tener 2 tipos de anticipos:

| Enum                                  | Código |
| ------------------------------------- | :----: |
| FACTURA_EMITIDA_POR_ANTICIPOS         |   02   |
| BOLETA_DE_VENTA_EMITIDA_POR_ANTICIPOS |   03   |

## Ejemplos

### Factura

Para agregar guías de remision relacionadas utiliza `withAnticipos` como en el ejemplo:

```java {27-38}
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
        .withAnticipos(Arrays.asList(
                AnticipoInputModel.Builder.anAnticipoInputModel()
                        .withSerieNumero("F999-1")
                        .withTipoDocumento(Catalog12_Anticipo.FACTURA_EMITIDA_POR_ANTICIPOS.toString())
                        .withMontoTotal(new BigDecimal("180"))
                        .build(),
                AnticipoInputModel.Builder.anAnticipoInputModel()
                        .withSerieNumero("F999-2")
                        .withTipoDocumento(Catalog12_Anticipo.FACTURA_EMITIDA_POR_ANTICIPOS.toString())
                        .withMontoTotal(new BigDecimal("180"))
                        .build()
        ))
        .build();
```

## ¿Cómo se refleja en el XML?

Las guías de remisión asociadas a un comprobante se reflejan así:

```xml
<cac:AdditionalDocumentReference>
    <cbc:ID>F999-1</cbc:ID>
    <cbc:DocumentTypeCode listAgencyName="PE:SUNAT" listName="Documento Relacionado" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo12">02</cbc:DocumentTypeCode>
    <cbc:DocumentStatusCode listName="Anticipo" listAgencyName="PE:SUNAT">1</cbc:DocumentStatusCode>
    <cac:IssuerParty>
        <cac:PartyIdentification>
            <cbc:ID schemeID="6" schemeName="Documento de Identidad" schemeAgencyName="PE:SUNAT" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">12345678912</cbc:ID>
        </cac:PartyIdentification>
    </cac:IssuerParty>
</cac:AdditionalDocumentReference>
<cac:AdditionalDocumentReference>
    <cbc:ID>F999-2</cbc:ID>
    <cbc:DocumentTypeCode listAgencyName="PE:SUNAT" listName="Documento Relacionado" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo12">02</cbc:DocumentTypeCode>
    <cbc:DocumentStatusCode listName="Anticipo" listAgencyName="PE:SUNAT">2</cbc:DocumentStatusCode>
    <cac:IssuerParty>
        <cac:PartyIdentification>
            <cbc:ID schemeID="6" schemeName="Documento de Identidad" schemeAgencyName="PE:SUNAT" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">12345678912</cbc:ID>
        </cac:PartyIdentification>
    </cac:IssuerParty>
</cac:AdditionalDocumentReference>

...

<cac:PrepaidPayment>
    <cbc:ID>1</cbc:ID>
    <cbc:PaidAmount currencyID="PEN">180</cbc:PaidAmount>
</cac:PrepaidPayment>
<cac:PrepaidPayment>
    <cbc:ID>2</cbc:ID>
    <cbc:PaidAmount currencyID="PEN">180</cbc:PaidAmount>
</cac:PrepaidPayment>

...

<cac:LegalMonetaryTotal>
    <cbc:PrepaidAmount currencyID="PEN">360</cbc:PrepaidAmount>
</cac:LegalMonetaryTotal>
```
