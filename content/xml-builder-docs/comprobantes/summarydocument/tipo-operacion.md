---
title: "Tipo operación"
date: 2020-01-30T00:38:25+09:00
description: Tipo de operación en Resumen Diario
draft: false
weight: 2
enableToc: false
---

## Tipo de Operación

El tipo de operación determina el estado de cada comprobante incluido en el resumen diario. Sus valores provienen del Catálogo 19.

## ¿Qué campo utilizar?

Se debe de utilizar el campo `detalle.tipoOperacion`

```json
{
  "detalle": [
    {
      "tipoOperacion": "mi tipo de operación a aplicar"
    }
  ]
}
```

## ¿Cuales son los posibles valores de 'detalle.tipoOperacion'?

`detalle.tipoOperacion` puede tener cualquier valor del Catalogo 19:

- `ADICIONAR` o `1`
- `MODIFICAR` o `2`
- `ANULADO` o `3`

## Ejemplo

Resumen diario que:

- Emite una Factura y
- Da de baja una Boleta

```json
{
  "numero": 1,
  "fechaEmisionDeComprobantesAsociados": 1585398109198,
  "proveedor": {
    "ruc": "12345678912",
    "razonSocial": "Project OpenUBL"
  },
  "detalle": [
    {
      "tipoOperacion": "ADICIONAR",
      "comprobante": {
        "tipo": "FACTURA",
        "serieNumero": "F001-1",
        "cliente": {
          "tipoDocumentoIdentidad": "RUC",
          "numeroDocumentoIdentidad": "12121212121",
          "nombre": "nombre de mi cliente"
        },
        "valorVenta": {
          "importeTotal": 100,
          "gravado": 100,
          "exonerado": 0,
          "inafecto": "0",
          "gratuito": "0"
        },

        "impuestos": {
          "igv": 22,
          "icb": 0
        }
      }
    },
    {
      "tipoOperacion": "ANULADO",
      "comprobante": {
        "tipo": "BOLETA",
        "serieNumero": "B001-1",
        "cliente": {
          "tipoDocumentoIdentidad": "DNI",
          "numeroDocumentoIdentidad": "12121212",
          "nombre": "nombre de mi cliente"
        },
        "valorVenta": {
          "importeTotal": 100,
          "gravado": 100,
          "exonerado": 0,
          "inafecto": "0",
          "gratuito": "0"
        },

        "impuestos": {
          "igv": 22,
          "icb": 0
        }
      }
    }
  ]
}
```

Genera el siguiente XML:

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<SummaryDocuments xmlns="urn:sunat:names:specification:ubl:peru:schema:xsd:SummaryDocuments-1"
                  xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
                  xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
                  xmlns:ccts="urn:un:unece:uncefact:documentation:2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#"
                  xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
                  xmlns:ns11="urn:sunat:names:specification:ubl:peru:schema:xsd:Perception-1"
                  xmlns:qdt="urn:oasis:names:specification:ubl:schema:xsd:QualifiedDatatypes-2"
                  xmlns:sac="urn:sunat:names:specification:ubl:peru:schema:xsd:SunatAggregateComponents-1"
                  xmlns:udt="urn:un:unece:uncefact:data:specification:UnqualifiedDataTypesSchemaModule:2"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <ext:UBLExtensions>
        <ext:UBLExtension>
            <ext:ExtensionContent />
        </ext:UBLExtension>
    </ext:UBLExtensions>
    <cbc:UBLVersionID>2.0</cbc:UBLVersionID>
    <cbc:CustomizationID>1.1</cbc:CustomizationID>
    <cbc:ID>RC-20200331-1</cbc:ID>
    <cbc:ReferenceDate>2020-03-28</cbc:ReferenceDate>
    <cbc:IssueDate>2020-03-31</cbc:IssueDate>
    <cac:Signature>
        <cbc:ID>12345678912</cbc:ID>
        <cac:SignatoryParty>
            <cac:PartyIdentification>
                <cbc:ID>12345678912</cbc:ID>
            </cac:PartyIdentification>
            <cac:PartyName>
                <cbc:Name>
                    <![CDATA[Project OpenUBL]]>
                </cbc:Name>
            </cac:PartyName>
        </cac:SignatoryParty>
        <cac:DigitalSignatureAttachment>
            <cac:ExternalReference>
                <cbc:URI>#PROJECT-OPENUBL-SIGN</cbc:URI>
            </cac:ExternalReference>
        </cac:DigitalSignatureAttachment>
    </cac:Signature>
    <cac:AccountingSupplierParty>
        <cbc:CustomerAssignedAccountID>12345678912</cbc:CustomerAssignedAccountID>
        <cbc:AdditionalAccountID>6</cbc:AdditionalAccountID>
        <cac:Party>
            <cac:PartyLegalEntity>
                <cbc:RegistrationName>
                    <![CDATA[Project OpenUBL]]>
                </cbc:RegistrationName>
            </cac:PartyLegalEntity>
        </cac:Party>
    </cac:AccountingSupplierParty>
    <sac:SummaryDocumentsLine>
        <cbc:LineID>1</cbc:LineID>
        <cbc:DocumentTypeCode>01</cbc:DocumentTypeCode>
        <cbc:ID>F001-1</cbc:ID>
        <cac:AccountingCustomerParty>
            <cbc:CustomerAssignedAccountID>12121212121</cbc:CustomerAssignedAccountID>
            <cbc:AdditionalAccountID>6</cbc:AdditionalAccountID>
        </cac:AccountingCustomerParty>
        <cac:Status>
            <cbc:ConditionCode>1</cbc:ConditionCode>
        </cac:Status>
        <sac:TotalAmount currencyID="PEN">100</sac:TotalAmount>
        <sac:BillingPayment>
            <cbc:PaidAmount currencyID="PEN">100</cbc:PaidAmount>
            <cbc:InstructionID>01</cbc:InstructionID>
        </sac:BillingPayment>
        <sac:BillingPayment>
            <cbc:PaidAmount currencyID="PEN">0</cbc:PaidAmount>
            <cbc:InstructionID>02</cbc:InstructionID>
        </sac:BillingPayment>
        <sac:BillingPayment>
            <cbc:PaidAmount currencyID="PEN">0</cbc:PaidAmount>
            <cbc:InstructionID>03</cbc:InstructionID>
        </sac:BillingPayment>
        <sac:BillingPayment>
            <cbc:PaidAmount currencyID="PEN">0</cbc:PaidAmount>
            <cbc:InstructionID>05</cbc:InstructionID>
        </sac:BillingPayment>
        <cac:TaxTotal>
            <cbc:TaxAmount currencyID="PEN">22</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <cbc:TaxAmount currencyID="PEN">22</cbc:TaxAmount>
                <cac:TaxCategory>
                    <cac:TaxScheme>
                        <cbc:ID>1000</cbc:ID>
                        <cbc:Name>IGV</cbc:Name>
                        <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
        <cac:TaxTotal>
            <cbc:TaxAmount currencyID="PEN">0</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <cbc:TaxAmount currencyID="PEN">0</cbc:TaxAmount>
                <cac:TaxCategory>
                    <cac:TaxScheme>
                        <cbc:ID>7152</cbc:ID>
                        <cbc:Name>ICBPER</cbc:Name>
                        <cbc:TaxTypeCode>OTH</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
    </sac:SummaryDocumentsLine>
    <sac:SummaryDocumentsLine>
        <cbc:LineID>2</cbc:LineID>
        <cbc:DocumentTypeCode>03</cbc:DocumentTypeCode>
        <cbc:ID>B001-1</cbc:ID>
        <cac:AccountingCustomerParty>
            <cbc:CustomerAssignedAccountID>12121212</cbc:CustomerAssignedAccountID>
            <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>
        </cac:AccountingCustomerParty>
        <cac:Status>
            <cbc:ConditionCode>3</cbc:ConditionCode>
        </cac:Status>
        <sac:TotalAmount currencyID="PEN">100</sac:TotalAmount>
        <sac:BillingPayment>
            <cbc:PaidAmount currencyID="PEN">100</cbc:PaidAmount>
            <cbc:InstructionID>01</cbc:InstructionID>
        </sac:BillingPayment>
        <sac:BillingPayment>
            <cbc:PaidAmount currencyID="PEN">0</cbc:PaidAmount>
            <cbc:InstructionID>02</cbc:InstructionID>
        </sac:BillingPayment>
        <sac:BillingPayment>
            <cbc:PaidAmount currencyID="PEN">0</cbc:PaidAmount>
            <cbc:InstructionID>03</cbc:InstructionID>
        </sac:BillingPayment>
        <sac:BillingPayment>
            <cbc:PaidAmount currencyID="PEN">0</cbc:PaidAmount>
            <cbc:InstructionID>05</cbc:InstructionID>
        </sac:BillingPayment>
        <cac:TaxTotal>
            <cbc:TaxAmount currencyID="PEN">22</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <cbc:TaxAmount currencyID="PEN">22</cbc:TaxAmount>
                <cac:TaxCategory>
                    <cac:TaxScheme>
                        <cbc:ID>1000</cbc:ID>
                        <cbc:Name>IGV</cbc:Name>
                        <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
        <cac:TaxTotal>
            <cbc:TaxAmount currencyID="PEN">0</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <cbc:TaxAmount currencyID="PEN">0</cbc:TaxAmount>
                <cac:TaxCategory>
                    <cac:TaxScheme>
                        <cbc:ID>7152</cbc:ID>
                        <cbc:Name>ICBPER</cbc:Name>
                        <cbc:TaxTypeCode>OTH</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
    </sac:SummaryDocumentsLine>
</SummaryDocuments>
```
