---
title: SendSummary
---

Usado para enviar:

- Voided documents (Baja).
- Summary documents (Resumen diario).

## Send File

Define tu URL y envía el archivo:

```java
ServiceConfig config = new ServiceConfig.Builder()
    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .username("12345678959MODDATOS")
    .password("MODDATOS")
    .build();

File file = new File("12345678959-RA-20180316-00001.xml");
BillServiceModel result = BillServiceManager.sendSummary(file, config);
```

## Send byte[]

Define tu URL y envía el archivo:

```java
ServiceConfig config = new ServiceConfig.Builder()
    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .username("12345678959MODDATOS")
    .password("MODDATOS")
    .build();

byte[] file // Define tu array de bytes acá;
String fileName = "12345678959-RA-20180316-00001.xml";
BillServiceModel result = BillServiceManager.sendSummary(fileName, file, config);
```

:::tip
Recuerda que el nombre de tu archivo debe de seguir el patrón `ruc-codigoComprobante-serie-numero.xml`
:::
