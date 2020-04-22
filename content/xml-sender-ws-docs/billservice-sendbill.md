---
title: "BS:sendBill"
description: "usar BillService:sendBill post"
date: 2020-01-28T00:39:09+09:00
draft: false
weight: 2
---

## BillService:sendBill

Utilizado para enviar:

- Boletas y Facturas.
- Notas de Crédito.
- Notas de Débito.
- Guias de Remisión.
- Percepciones.
- Retenciones.

## Enviar comprobante a la SUNAT

### Enviar un java.io.File

El valor de URL dependerá de qué tipo de documento está intentando enviar:

```java
ServiceConfig config = new ServiceConfig.Builder()
            .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
            .username("12345678959MODDATOS")
            .password("MODDATOS")
            .build();

File file = new File("12345678959-01-F001-00000001.xml");
BillServiceModel result = BillServiceManager.sendBill(file, config);
```

> Es importante que el nombre del archivo tenga la estructura definida por la SUNAT: `ruc-codigoComprobante-serie-numero.xml`.

### Enviar un array de bytes[]

- También puedes enviar un array de bytes y la libreria se encargará del resto.

```java
ServiceConfig config = new ServiceConfig.Builder()
            .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
            .username("12345678959MODDATOS")
            .password("MODDATOS")
            .build();

byte[] file // Define tu array de bytes acá;
String fileName = "12345678959-01-F001-00000001.xml";
BillServiceModel result = BillServiceManager.sendBill(fileName, file, config);
```

{{< alert theme="info" >}}

### La SUNAT acepta solamente archivos ZIP

La libreria se encarga de comprimir tu archivo XML y enviar el equivalente archivo en formato `.zip` a la SUNAT.
{{< /alert >}}
