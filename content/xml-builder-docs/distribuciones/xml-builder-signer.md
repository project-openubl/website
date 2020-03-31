---
title: "XML Builder Signer"
description: "XML Builder Signer distribution"
date: 2020-01-28T00:36:14+09:00
draft: false
weight: 2
---

## XML Builder Signer

Incluye todas las funcionalidades de `XML Builder` pero además agrega algunas funcionalidades. Útil para empresas que desean delegar el proceso de firma electrónica a otro software.

Características:

- Permite generar, almacenar, importar certificados digitales.
- Firmar electrónicamente los archivos XMLs.
- Es multi empresa.
- Requiere de una base de datos.

## API Docs

La documentación de las APIS puede ser encontrada en el siguiente link:

- [apis-docs](https://app.swaggerhub.com/apis-docs/project-openubl/xml-builder-signer)

## Ejemplo

Los comprobantes generados por `XML Builder Signer` si contienen firma electrónica, tal y como se muestra en el siguiente ejemplo:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ccts="urn:un:unece:uncefact:documentation:2" xmlns:cec="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:qdt="urn:oasis:names:specification:ubl:schema:xsd:QualifiedDatatypes-2" xmlns:sac="urn:sunat:names:specification:ubl:peru:schema:xsd:SunatAggregateComponents-1" xmlns:udt="urn:un:unece:uncefact:data:specification:UnqualifiedDataTypesSchemaModule:2" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <ext:UBLExtensions>
        <ext:UBLExtension>
            <ext:ExtensionContent>
                <ds:Signature Id="SignID" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                    <ds:SignedInfo>
                        <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
                        <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
                        <ds:Reference URI="">
                            <ds:Transforms>
                                <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
                            </ds:Transforms>
                            <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                            <ds:DigestValue>VOm3upxyZDerjcXrqjjP5Wc5qqo=</ds:DigestValue>
                        </ds:Reference>
                    </ds:SignedInfo>
                    <ds:SignatureValue>ZcCp5E2OFcn1qomo8z9fLU0lbbtgOXm0K7isAj3Jmt+rU1a5/KHpG7InoJ24q/UaBpSirZBl8c0g
OcoCIX6nOwNqfYv+bMPUNgxJugiBj4htCjTxZmsMS0/LKint+0yv07o8dhch/hOSW9gzRiPhRTTc
/ffJePpwVv3PfPmb+VSfRwmkkxqbOgd6SuunE3xFRhA1jUeCd1NF1WqT97v1tQlQ54TzV9ktJ10U
wDG5uh7IH5h9jb45iR08bo5M79xmdZZA24feQvVQRHagF2B18F11x/7D6dym8RJFN/q5FysoR40U
IA48L62XWOo+Llv3li+aHrC+AEq9VZKN53lOyw==</ds:SignatureValue>
                    <ds:KeyInfo>
                        <ds:X509Data>
                            <ds:X509Certificate>MIICmzCCAYMCBgFxLyBMAjANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDDAZtYXN0ZXIwHhcNMjAw
MzMxMDU0NDM3WhcNMzAwMzMxMDU0NjE3WjARMQ8wDQYDVQQDDAZtYXN0ZXIwggEiMA0GCSqGSIb3
DQEBAQUAA4IBDwAwggEKAoIBAQCNDPM3w0S9QM2mmu3rAVughyxWp32vZ0jFQN08qKQbp2bPAT35
XfUfqFdx4KaUjgSls9d+KSOz/XA3DV00wV1TcWgq9SKFlxBwCnTmDD13cd0Uxi5w8FI9s6OqMpyu
Jy3lZHD96oorYCCqDD+TzYOl3pjnChFVBk8NAHZCXpmHUIMkgUEw3Ai8dae33pkuvpqbqxgGjsYq
bJ3vKGSPKlubEymo+0eHYKqGuq4aMgQcznG1hijm0rC7shkaR7WNQ4/PUcFhO+avuEXTYgyeanzn
jqPKGJRdKgBuGkrH4DmjucT8pmPoF3kN3kCimXtsGnNSlfzWuGM7JCchm2iadMs9AgMBAAEwDQYJ
KoZIhvcNAQELBQADggEBAH1wauqzHzyg6IEHYNcaPH/OXfoPxcljKb4IlVVDt+2NyIH6vuK68Sb9
vrFnxHUq3V+qoWUfpkHwGVWYDdzlO053tNVdutE0WUy1BCQC0T3/Fw2kSXxGwb1MYwHbv1aIxCr2
4S2fE7NtAi5+DD3ovIbuRV6i+RYi06GZTswzLfo6dSZIXD21HAVteGGuVFT2nm28c7ZpnoTSrxkF
t6Gk04JFtWt3TeLTaDHKV3RDYE7+kDcwUPRzU0AJANsKDwdsAscneQ41oVR1uMq2eozK4ElcbhF4
nt/JD4FCS5bx/MZDIPPnnVdR2Q4zdEauriEJWl4YLyGYsTQBhXOrh9w1/mk=</ds:X509Certificate>
                        </ds:X509Data>
                    </ds:KeyInfo>
                </ds:Signature>
            </ext:ExtensionContent>
        </ext:UBLExtension>
    </ext:UBLExtensions>
    <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
    <cbc:CustomizationID>2.0</cbc:CustomizationID>
    <cbc:ID>F001-1</cbc:ID>
    <cbc:IssueDate>2019-11-08</cbc:IssueDate>
    <cbc:IssueTime>22:15:09</cbc:IssueTime>
    <cbc:InvoiceTypeCode listAgencyName="PE:SUNAT" listID="0101" listName="SUNAT:Identificador de Tipo de Documento" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">01</cbc:InvoiceTypeCode>
    <cbc:DocumentCurrencyCode listAgencyName="United Nations Economic Commission for Europe" listID="ISO 4217 Alpha" listName="Currency">PEN</cbc:DocumentCurrencyCode>
    <cac:Signature>
        <cbc:ID>12345678912</cbc:ID>
        <cac:SignatoryParty>
            <cac:PartyIdentification>
                <cbc:ID>12345678912</cbc:ID>
            </cac:PartyIdentification>
            <cac:PartyName>
                <cbc:Name>
                    <![CDATA[Razon Social Firmante]]>
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
        <cac:Party>
            <cac:PartyIdentification>
                <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="6" schemeName="SUNAT:Identificador de Documento de Identidad" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">12345678912</cbc:ID>
            </cac:PartyIdentification>
            <cac:PartyName>
                <cbc:Name>Nombre comercial proveedor</cbc:Name>
            </cac:PartyName>
            <cac:PartyLegalEntity>
                <cbc:RegistrationName>
                    <![CDATA[Razon social proveedor]]>
                </cbc:RegistrationName>
            </cac:PartyLegalEntity>
        </cac:Party>
    </cac:AccountingSupplierParty>
    <cac:AccountingCustomerParty>
        <cac:Party>
            <cac:PartyIdentification>
                <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="6" schemeName="SUNAT:Identificador de Documento de Identidad" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">12312312312</cbc:ID>
            </cac:PartyIdentification>
            <cac:PartyLegalEntity>
                <cbc:RegistrationName>
                    <![CDATA[carlos feria]]>
                </cbc:RegistrationName>
            </cac:PartyLegalEntity>
        </cac:Party>
    </cac:AccountingCustomerParty>
    <cac:TaxTotal>
        <cbc:TaxAmount currencyID="PEN">180</cbc:TaxAmount>
        <cac:TaxSubtotal>
            <cbc:TaxableAmount currencyID="PEN">1000</cbc:TaxableAmount>
            <cbc:TaxAmount currencyID="PEN">180</cbc:TaxAmount>
            <cac:TaxCategory>
                <cbc:ID schemeAgencyName="United Nations Economic Commission for Europe" schemeID="UN/ECE 5305" schemeName="Tax Category Identifie">S</cbc:ID>
                <cac:TaxScheme>
                    <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="UN/ECE 5153" schemeName="Codigo de tributos">1000</cbc:ID>
                    <cbc:Name>IGV</cbc:Name>
                    <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                </cac:TaxScheme>
            </cac:TaxCategory>
        </cac:TaxSubtotal>
    </cac:TaxTotal>
    <cac:LegalMonetaryTotal>
        <cbc:LineExtensionAmount currencyID="PEN">1000</cbc:LineExtensionAmount>
        <cbc:TaxInclusiveAmount currencyID="PEN">1180</cbc:TaxInclusiveAmount>
        <cbc:PayableAmount currencyID="PEN">1180</cbc:PayableAmount>
    </cac:LegalMonetaryTotal>
    <cac:InvoiceLine>
        <cbc:ID>1</cbc:ID>
        <cbc:InvoicedQuantity unitCode="NIU" unitCodeListAgencyName="United Nations Economic Commission for Europe" unitCodeListID="UN/ECE rec 20">10</cbc:InvoicedQuantity>
        <cbc:LineExtensionAmount currencyID="PEN">1000</cbc:LineExtensionAmount>
        <cac:PricingReference>
            <cac:AlternativeConditionPrice>
                <cbc:PriceAmount currencyID="PEN">118</cbc:PriceAmount>
                <cbc:PriceTypeCode listAgencyName="PE:SUNAT" listName="SUNAT:Indicador de Tipo de Precio" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16">01</cbc:PriceTypeCode>
            </cac:AlternativeConditionPrice>
        </cac:PricingReference>
        <cac:TaxTotal>
            <cbc:TaxAmount currencyID="PEN">180</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <cbc:TaxableAmount currencyID="PEN">1000</cbc:TaxableAmount>
                <cbc:TaxAmount currencyID="PEN">180</cbc:TaxAmount>
                <cac:TaxCategory>
                    <cbc:ID schemeAgencyName="United Nations Economic Commission for Europe" schemeID="UN/ECE 5305" schemeName="Tax Category Identifier">S</cbc:ID>
                    <cbc:Percent>18</cbc:Percent>
                    <cbc:TaxExemptionReasonCode listAgencyName="PE:SUNAT" listName="SUNAT:Codigo de Tipo de Afectacion del IGV" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07">10</cbc:TaxExemptionReasonCode>
                    <cac:TaxScheme>
                        <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="UN/ECE 5153" schemeName="Codigo de tributos">1000</cbc:ID>
                        <cbc:Name>IGV</cbc:Name>
                        <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
        <cac:Item>
            <cbc:Description>
                <![CDATA[Descripcion del item en venta]]>
            </cbc:Description>
        </cac:Item>
        <cac:Price>
            <cbc:PriceAmount currencyID="PEN">100</cbc:PriceAmount>
        </cac:Price>
    </cac:InvoiceLine>
</Invoice>
```
