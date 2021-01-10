---
title: Crear XML
---

Debes de recordar que la creación de un XML dependen de tres componentes principales:

![img](../../static/img/concepts-equation.svg "XBuilder concept equation")

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
                .withNombre("Carlos Martínez")
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

```java {5}
Config config = new MyCustomConfig();
SystemClock systemClock = new MyCustomClock();

// Create Invoice
DocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(input, config, systemClock); // El "input" es generado arriba

InvoiceOutputModel output = result.getOutput(); // XML Var values
String xml = result.getXml(); // XML content
```
