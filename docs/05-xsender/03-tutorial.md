---
title: Tutorial
---

Hay dos formas por las que puedes enviar tus archivos XML:

- **Caso 1**: configura todas las URLs una vez y deja a XSender el resto. Si usas este método, **XSender se encarga de definir la URL y el nombre del archivo XML** que será enviado a la SUNAT.
- **Caso 2**: configura las URLs cada vez que envías archivos. Si usas este método, **tu debes de definir la URL y el nombre del archivo XML** que será enviado a la SUNAT.

## Caso 1

Este es el método recomendado para enviar archivos XML a la SUNAT. Solamente define tu archivo XML y XSender definirá el resto.

Recomendado para envío de:

- Invoices (boleta/factura).
- Credit notes (notas de crédito).
- Debit notes (notas de débito).
- Despatch documents (guias de remisión).
- Perceptions (percepciones).
- Retentions (retenciones).
- Voided documents (bajas).
- Summary documents (resumen diario).

Necesitas configurar `SmartBillServiceConfig`. Esto es algo que debes de hacer solamente una vez durante todo el ciclo de vida de tu software.

```java
SmartBillServiceConfig.getInstance()
    .withInvoiceAndNoteDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .withPerceptionAndRetentionDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService")
    .withDespatchAdviceDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-guia-gem-beta/billService");
```

Una vez que `SmartBillServiceConfig` está configurado puedes empezar a enviar tus archivos XML:

```java
byte[] xml;
String username;
String password;

// Send file
SmartBillServiceModel result = SmartBillServiceManager.send(xml, username, password);

// Read result values
XmlContentModel xmlData = result.getXmlContentModel();
BillServiceModel serverResponse = result.getBillServiceModel();
```

## Caso 2

Este es el método recomendado si tu software tiene URL dinámicas o diferentes URLs para múltiples empresas.

### Enviar File

Define la URL a la que quieres enviar tu archivo y ejecuta el envío:

```java
ServiceConfig config = new ServiceConfig.Builder()
    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .username("12345678959MODDATOS")
    .password("MODDATOS")
    .build();

File file = new File("12345678959-01-F001-00000001.xml");
BillServiceModel result = BillServiceManager.sendBill(file, config);
```

### Enviar bytes[]

Define la URL a la que quieres enviar tu archivo y ejecuta el envío:

```java
ServiceConfig config = new ServiceConfig.Builder()
    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .username("12345678959MODDATOS")
    .password("MODDATOS")
    .build();

byte[] file; // define your file here;
String fileName = "12345678959-01-F001-00000001.xml";
BillServiceModel result = BillServiceManager.sendBill(fileName, file, config);
```

:::tip
Recuerda que el nombre de tu archivo debe de seguir el patrón `ruc-codigoComprobante-serie-numero.xml`
:::
