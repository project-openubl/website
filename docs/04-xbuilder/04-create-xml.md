---
title: Crear XML
---

Debes de recordar que la creación de un XML dependen de tres componentes principales:

![img](/img/concepts-equation.svg "XBuilder concept equation")

## Crea los componentes necesarios

### Crea un POJO/Input

Debes de decidir que tipo de XML deseas crear y seleccionar uno de los `Builder` disponibles:

- InvoiceInputModel.Builder
- CreditNoteInputModel.Builder
- DebitNoteInputModel.Builder
- VoidedDocumentInputModel.Builder
- SummaryDocumentInputModel.Builder, etc.

Una vez seleccionado el `Builder` correcto ya puedes empezar a crear un Input/POJO

Cada `Builder` es diferente y requiere diferente información. Por ejemplo si queremos crear una factura podemos hacer lo siguiente:

```java
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
                        .withUnidadMedida("KGM")
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withDescripcion("Item2")
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .withUnidadMedida("KGM")
                        .build())
        )
        .build();
```

### Crear un Config

Crea una clase que implemente la interfaz `io.github.project.openubl.xmlbuilderlib.config.Config`:

```java
public class MyCustomConfig implements Config {

    private BigDecimal igv;
    private BigDecimal ivap;
    private String defaultMoneda;
    private String defaultUnidadMedida;
    private Catalog9 defaultTipoNotaCredito;
    private Catalog10 defaultTipoNotaDebito;
    private BigDecimal defaultIcb;
    private Catalog7 defaultTipoIgv;

    public DefaultConfig() {
        this.defaultMoneda = "PEN";
        this.defaultUnidadMedida = "NIU";
        this.igv = new BigDecimal("0.18");
        this.ivap = new BigDecimal("0.04");
        this.defaultIcb = new BigDecimal("0.2");
        ...
    }
}
```

### Crea un SystemClock

Crea una clase que implemente la interfaz `io.github.project.openubl.xmlbuilderlib.clock.SystemClock`:

```java
 public class MyCustomClock implements SystemClock {
    @Override
    public TimeZone getTimeZone() {
        return TimeZone.getTimeZone("America/Lima");
    }

    @Override
    public Calendar getCalendarInstance() {
        return Calendar.getInstance();
    }
}
```

## Crea el XML

Un XML es creado usando `DocumentManager.createXML` por ejemplo:

```java {8}
Config config = new MyCustomConfig();
SystemClock systemClock = new MyCustomClock();

// Create Invoice
DocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(input, config, systemClock); // El "input" es generado arriba

InvoiceOutputModel output = result.getOutput(); // XML Var values
String xml = result.getXml(); // XML content
```

The contenido de la variable `xml` será parecido a:

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
         xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
         xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
         xmlns:ccts="urn:un:unece:uncefact:documentation:2"
         xmlns:cec="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
         xmlns:ds="http://www.w3.org/2000/09/xmldsig#"
         xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
         xmlns:qdt="urn:oasis:names:specification:ubl:schema:xsd:QualifiedDatatypes-2"
         xmlns:sac="urn:sunat:names:specification:ubl:peru:schema:xsd:SunatAggregateComponents-1"
         xmlns:udt="urn:un:unece:uncefact:data:specification:UnqualifiedDataTypesSchemaModule:2"
         xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <ext:UBLExtensions>
        <ext:UBLExtension>
            <ext:ExtensionContent/>
        </ext:UBLExtension>
    </ext:UBLExtensions>
    <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
    <cbc:CustomizationID>2.0</cbc:CustomizationID>
    <cbc:ID>F001-1</cbc:ID>
    <cbc:IssueDate>2019-12-24</cbc:IssueDate>
    <cbc:IssueTime>20:30:59</cbc:IssueTime>
    <cbc:InvoiceTypeCode listAgencyName="PE:SUNAT" listID="0101" listName="Tipo de Documento"
                         listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo01">01
    </cbc:InvoiceTypeCode>
    <cbc:DocumentCurrencyCode listAgencyName="United Nations Economic Commission for Europe" listID="ISO 4217 Alpha"
                              listName="Currency">PEN
    </cbc:DocumentCurrencyCode>
    <cac:Signature>
        <cbc:ID>12345678912</cbc:ID>
        <cac:SignatoryParty>
            <cac:PartyIdentification>
                <cbc:ID>12345678912</cbc:ID>
            </cac:PartyIdentification>
            <cac:PartyName>
                <cbc:Name>Softgreen S.A.C.</cbc:Name>
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
                <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="6"
                        schemeName="Documento de Identidad"
                        schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">12345678912
                </cbc:ID>
            </cac:PartyIdentification>
            <cac:PartyLegalEntity>
                <cbc:RegistrationName>Softgreen S.A.C.</cbc:RegistrationName>
            </cac:PartyLegalEntity>
        </cac:Party>
    </cac:AccountingSupplierParty>
    <cac:AccountingCustomerParty>
        <cac:Party>
            <cac:PartyIdentification>
                <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="6"
                        schemeName="Documento de Identidad"
                        schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">12121212121
                </cbc:ID>
            </cac:PartyIdentification>
            <cac:PartyLegalEntity>
                <cbc:RegistrationName>Carlos Feria</cbc:RegistrationName>
            </cac:PartyLegalEntity>
        </cac:Party>
    </cac:AccountingCustomerParty>
    <cac:TaxTotal>
        <cbc:TaxAmount currencyID="PEN">360</cbc:TaxAmount>
        <cac:TaxSubtotal>
            <cbc:TaxableAmount currencyID="PEN">2000</cbc:TaxableAmount>
            <cbc:TaxAmount currencyID="PEN">360</cbc:TaxAmount>
            <cac:TaxCategory>
                <cbc:ID schemeAgencyName="United Nations Economic Commission for Europe" schemeID="UN/ECE 5305"
                        schemeName="Tax Category Identifie">S
                </cbc:ID>
                <cac:TaxScheme>
                    <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="UN/ECE 5153" schemeName="Codigo de tributos">1000
                    </cbc:ID>
                    <cbc:Name>IGV</cbc:Name>
                    <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                </cac:TaxScheme>
            </cac:TaxCategory>
        </cac:TaxSubtotal>
    </cac:TaxTotal>
    <cac:LegalMonetaryTotal>
        <cbc:LineExtensionAmount currencyID="PEN">2000</cbc:LineExtensionAmount>
        <cbc:TaxInclusiveAmount currencyID="PEN">2360</cbc:TaxInclusiveAmount>
        <cbc:PayableAmount currencyID="PEN">2360</cbc:PayableAmount>
    </cac:LegalMonetaryTotal>
    <cac:InvoiceLine>
        <cbc:ID>1</cbc:ID>
        <cbc:InvoicedQuantity unitCode="KGM" unitCodeListAgencyName="United Nations Economic Commission for Europe"
                              unitCodeListID="UN/ECE rec 20">10
        </cbc:InvoicedQuantity>
        <cbc:LineExtensionAmount currencyID="PEN">1000</cbc:LineExtensionAmount>
        <cac:PricingReference>
            <cac:AlternativeConditionPrice>
                <cbc:PriceAmount currencyID="PEN">118</cbc:PriceAmount>
                <cbc:PriceTypeCode listAgencyName="PE:SUNAT" listName="Tipo de Precio"
                                   listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16">01
                </cbc:PriceTypeCode>
            </cac:AlternativeConditionPrice>
        </cac:PricingReference>
        <cac:TaxTotal>
            <cbc:TaxAmount currencyID="PEN">180</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <cbc:TaxableAmount currencyID="PEN">1000</cbc:TaxableAmount>
                <cbc:TaxAmount currencyID="PEN">180</cbc:TaxAmount>
                <cac:TaxCategory>
                    <cbc:ID schemeAgencyName="United Nations Economic Commission for Europe" schemeID="UN/ECE 5305"
                            schemeName="Tax Category Identifier">S
                    </cbc:ID>
                    <cbc:Percent>18</cbc:Percent>
                    <cbc:TaxExemptionReasonCode listAgencyName="PE:SUNAT"
                                                listName="Afectacion del IGV"
                                                listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07">10
                    </cbc:TaxExemptionReasonCode>
                    <cac:TaxScheme>
                        <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="UN/ECE 5153" schemeName="Codigo de tributos">
                            1000
                        </cbc:ID>
                        <cbc:Name>IGV</cbc:Name>
                        <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
        <cac:Item>
            <cbc:Description>Item1</cbc:Description>
        </cac:Item>
        <cac:Price>
            <cbc:PriceAmount currencyID="PEN">100</cbc:PriceAmount>
        </cac:Price>
    </cac:InvoiceLine>
    <cac:InvoiceLine>
        <cbc:ID>2</cbc:ID>
        <cbc:InvoicedQuantity unitCode="KGM" unitCodeListAgencyName="United Nations Economic Commission for Europe"
                              unitCodeListID="UN/ECE rec 20">10
        </cbc:InvoicedQuantity>
        <cbc:LineExtensionAmount currencyID="PEN">1000</cbc:LineExtensionAmount>
        <cac:PricingReference>
            <cac:AlternativeConditionPrice>
                <cbc:PriceAmount currencyID="PEN">118</cbc:PriceAmount>
                <cbc:PriceTypeCode listAgencyName="PE:SUNAT" listName="Tipo de Precio"
                                   listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo16">01
                </cbc:PriceTypeCode>
            </cac:AlternativeConditionPrice>
        </cac:PricingReference>
        <cac:TaxTotal>
            <cbc:TaxAmount currencyID="PEN">180</cbc:TaxAmount>
            <cac:TaxSubtotal>
                <cbc:TaxableAmount currencyID="PEN">1000</cbc:TaxableAmount>
                <cbc:TaxAmount currencyID="PEN">180</cbc:TaxAmount>
                <cac:TaxCategory>
                    <cbc:ID schemeAgencyName="United Nations Economic Commission for Europe" schemeID="UN/ECE 5305"
                            schemeName="Tax Category Identifier">S
                    </cbc:ID>
                    <cbc:Percent>18</cbc:Percent>
                    <cbc:TaxExemptionReasonCode listAgencyName="PE:SUNAT"
                                                listName="Afectacion del IGV"
                                                listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo07">10
                    </cbc:TaxExemptionReasonCode>
                    <cac:TaxScheme>
                        <cbc:ID schemeAgencyName="PE:SUNAT" schemeID="UN/ECE 5153" schemeName="Codigo de tributos">
                            1000
                        </cbc:ID>
                        <cbc:Name>IGV</cbc:Name>
                        <cbc:TaxTypeCode>VAT</cbc:TaxTypeCode>
                    </cac:TaxScheme>
                </cac:TaxCategory>
            </cac:TaxSubtotal>
        </cac:TaxTotal>
        <cac:Item>
            <cbc:Description>Item2</cbc:Description>
        </cac:Item>
        <cac:Price>
            <cbc:PriceAmount currencyID="PEN">100</cbc:PriceAmount>
        </cac:Price>
    </cac:InvoiceLine>
</Invoice>
```
