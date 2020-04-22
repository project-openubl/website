---
title: "BS:sendSummary"
description: "usar BillService:sendSummary post"
date: 2020-01-28T00:39:09+09:00
draft: false
weight: 2
---

## BillService:sendSummary

Utilizado para enviar:

- Baja.
- Resumen diario.

## Enviar comprobante a la SUNAT

### Enviar un java.io.File

El valor de URL dependerá de qué tipo de documento está intentando enviar:

```java
ServiceConfig config = new ServiceConfig.Builder()
            .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
            .username("12345678959MODDATOS")
            .password("MODDATOS")
            .build();

File file = new File("12345678959-RA-20180316-00001.xml");
BillServiceModel result = BillServiceManager.sendSummary(file, config);
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
BillServiceModel result = BillServiceManager.sendSummary(fileName, file, config);
```

## Enviar comprobante y verificar ticket

El resultado de enviar una baja o resumen diario es un número de `ticket`. En caso desee consultar el `ticket` al mismo tiempo en el que se envía el comprobante, entonces deberás de usar:

```java
ServiceConfig config; // Define tu configuración
File file; // define tu archivo
Map<String, Object> params; // Datos que se enviarán al callback.
long delay; // Cantidad de milisegundos a esperar antes de consultar el ticket.

BillServiceManager.sendSummary(
    file,
    config,
    params,
    new BillServiceCallback() {
         @Override
         public void onSuccess(Map<String, Object> params, int code, String description, byte[] cdr) { }

         @Override
         public void onError(Map<String, Object> params, int code, String description, byte[] cdr) { }

         @Override
         public void onProcess(Map<String, Object> params, int code, String description) { }

         @Override
         public void onException(Map<String, Object> params, int code, String description) { }

         @Override
         public void onThrownException(Map<String, Object> params, SOAPFaultException exception) { }
     }, delay);
```

{{< alert theme="info" >}}

### La SUNAT acepta solamente archivos ZIP

La libreria se encarga de comprimir tu archivo XML y enviar el equivalente archivo en formato `.zip` a la SUNAT.
{{< /alert >}}
