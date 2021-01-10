---
title: Conceptos básicos
---

XBuilder crea archivos XMLs basados en 3 objetos:

- **POJO**- El objeto que contiene los datos del XML a crear.
- **Config** - Incluye información como los valores de impuestos y valores por defecto a aplicar.
- **System clock** - Reloj que genera la hora actual del sistema, incluyendo la zona horaria.

![img](../../static/img/concepts-equation.svg "XBuilder concept equation")

```java
DocumentWrapper<InvoiceOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);
```

## POJO

El POJO es la información de entrada que será usada para crear el archivo XML. El POJO contiene información como serie, número, precios, detalle del comprobante, etc.

Dependiendo del tipo de XML que quieras crear deberás usar un POJO distinto. Por ejemplo:

Si quieres crear una factura (Invoice):

```java
InvoiceInputModel pojo = InvoiceInputModel.Builder.anInvoiceInputModel().build();
```

Si quieres crear una nota de cŕedito (Credit note):

```java
CreditNoteInputModel pojo = CreditNoteInputModel.Builder.aCreditNoteInputModel()
```

Te familiarizarás con los POJOs a medida que vayas usando XBuilder.

## Config

`Config` es una interfaz que debe de ser implementada por cada software que usa `XBuilder`. En ella definiráz valores como el valor del IGV, ICB, etc. Por ejemplo:

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

## SystemClock

`SystemClock` es una interfaz que debe de ser implementada por cada software que usa `XBuilder` por ejemplo:

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
