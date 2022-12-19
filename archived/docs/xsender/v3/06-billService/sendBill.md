---
title: SendBill
---

Usado para enviar:

- Invoices (boleta/factura).
- Credit notes (notas de crédito).
- Debit notes (notas de débito).
- Despatch documents (guias de remisión).
- Perceptions (percepciones).
- Retentions (retenciones).

## Enviar File

Define tu URL y envía el archivo:

```java
ServiceConfig config = new ServiceConfig.Builder()
    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .username("12345678959MODDATOS")
    .password("MODDATOS")
    .build();

File file = new File("12345678959-01-F001-00000001.xml");
BillServiceModel result = BillServiceManager.sendBill(file, config);
```

## Enviar byte[]

Define tu URL y envía el archivo:

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
