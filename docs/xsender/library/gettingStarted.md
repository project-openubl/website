---
title: Getting started
---

There are 2 ways of sending your files:

- Case 1: configure URLs once and let `XSender` do the rest
- Case 2: configure the URLs every time you try to send your files.

## Case 1

You need to configure `SmartBillServiceConfig`. You need to do this only once during the whole lifecycle of you software.

```java
SmartBillServiceConfig.getInstance()
    .withInvoiceAndNoteDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .withPerceptionAndRetentionDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService")
    .withDespatchAdviceDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-guia-gem-beta/billService");
```

Once `SmartBillServiceConfig` is configured you can star sending your files:

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

## Case 2

### Send file

Define your URL you want yo send your file to, and then send your file:

```java
ServiceConfig config = new ServiceConfig.Builder()
    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .username("12345678959MODDATOS")
    .password("MODDATOS")
    .build();

File file = new File("12345678959-01-F001-00000001.xml");
BillServiceModel result = BillServiceManager.sendBill(file, config);
```

> Remember that your filename must follow the pattern expected by the SOAP endpoint. E.g. for SUNAT it is expected to have the pattern `ruc-codigoComprobante-serie-numero.xml`

### Send bytes

Define your URL you want yo send your file to, and then send your file:

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

> Remember that your filename must follow the pattern expected by the SOAP endpoint. E.g. for SUNAT it is expected to have the pattern `ruc-codigoComprobante-serie-numero.xml`
