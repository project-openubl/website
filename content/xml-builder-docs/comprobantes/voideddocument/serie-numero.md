---
title: "Serie y número"
date: 2020-01-30T00:38:25+09:00
description: Serie y número en Bajas
draft: false
weight: 1
enableToc: false
---

## Serie y número

La serie y número de un comprobante de baja tiene la siguiente estructura: `codigo-fechaEmision-número`. Por ejemplo : `RA-20190101-1`

XML Builder creará la estructura correcta basada en los datos enviados y la configuración del servidor, tu sólo necesitas enviar en `numero` de comprobante de baja que estas emitiendo en el dia.

## ¿Qué campo utilizar?

Se debe de utilizar el campo `numero`

```json
{
  "numero": 1
}
```

## Ejemplo

Primera baja del día. Baja a una factura:

```json
{
  "numero": 1,
  "descripcionSustento": "mi motivo de baja",
  "proveedor": {
    "ruc": "12345678912",
    "razonSocial": "Project OpenUBL"
  },
  "comprobante": {
    "serieNumero": "F001-1",
    "tipoComprobante": "FACTURA",
    "fechaEmision": 1585398109198
  }
}
```

Genera el siguiente XML:

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<VoidedDocuments xmlns="urn:sunat:names:specification:ubl:peru:schema:xsd:VoidedDocuments-1"
                 xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
                 xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
                 xmlns:ds="http://www.w3.org/2000/09/xmldsig#"
                 xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
                 xmlns:sac="urn:sunat:names:specification:ubl:peru:schema:xsd:SunatAggregateComponents-1"
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <ext:UBLExtensions>
        <ext:UBLExtension>
            <ext:ExtensionContent />
        </ext:UBLExtension>
    </ext:UBLExtensions>
    <cbc:UBLVersionID>2.0</cbc:UBLVersionID>
    <cbc:CustomizationID>1.0</cbc:CustomizationID>
    <cbc:ID>RA-20200331-1</cbc:ID>
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
    <sac:VoidedDocumentsLine>
        <cbc:LineID>1</cbc:LineID>
        <cbc:DocumentTypeCode>01</cbc:DocumentTypeCode>
        <sac:DocumentSerialID>F001</sac:DocumentSerialID>
        <sac:DocumentNumberID>1</sac:DocumentNumberID>
        <sac:VoidReasonDescription>
            <![CDATA[mi motivo de baja]]>
        </sac:VoidReasonDescription>
    </sac:VoidedDocumentsLine>
</VoidedDocuments>
```
