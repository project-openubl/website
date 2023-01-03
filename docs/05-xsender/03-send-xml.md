---
title: Enviar XML
description: Envia XMLs a la SUNAT
---

Este tutorial sirve para enviar los siguientes comprobantes de pago:

- Factura, Boleta
- Notas de crédito y débito
- Bajas y resúmenes diarios
- Percepciones y retenciones
- Guias de remision

:::caution
En envío de Guias de remisión cambió hace poco por lo que podrías experimentar el error 1085. Pronto se actualizará XSender para soportar nuevamente el envío de Guias de remisión.
:::

## Configura URLs y credenciales

```java
CompanyURLs companyURLs = CompanyURLs.builder()
    .invoice("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .despatch("https://e-beta.sunat.gob.pe/ol-ti-itemision-guia-gem-beta/billService")
    .perceptionRetention("https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService")
    .build();

CompanyCredentials credentials = CompanyCredentials.builder()
    .username("12345678959MODDATOS")
    .password("MODDATOS")
    .build();
```

## Analiza el XML que deseas enviar

```java
Path miXML = Paths.get("/home/mi_archivo_xml"); // El XML puede ser "Path, InputStream, o bytes[]"
BillServiceFileAnalyzer fileAnalyzer = new BillServiceXMLFileAnalyzer(miXML, companyURLs);

// Archivo ZIP
ZipFile zipFile = fileAnalyzer.getZipFile();

// Configuración para enviar xml y Configuración para consultar ticket
BillServiceDestination fileDestination = fileAnalyzer.getSendFileDestination();
BillServiceDestination ticketDestination = fileAnalyzer.getVerifyTicketDestination();
```

## Enviar XML

```java
CamelContext camelContext = StandaloneCamel.getInstance()
    .getMainCamel()
    .getCamelContext();

CamelData camelData = CamelUtils.getBillServiceCamelData(zipFile, fileDestination, credentials);

SunatResponse sendFileSunatResponse = camelContext.createProducerTemplate()
    .requestBodyAndHeaders(
        Constants.XSENDER_BILL_SERVICE_URI,
        camelData.getBody(),
        camelData.getHeaders(),
        SunatResponse.class
    );
```

### Consultar Ticket

Si enviaste una baja o resumen diario entonces puedes consultar el estado de tu ticket.

```java
String ticket = sendFileSunatResponse.getSunat().getTicket();
CamelData camelTicketData = CamelUtils.getBillServiceCamelData(ticket, ticketDestination, credentials);

SunatResponse verifyTicketSunatResponse = camelContext.createProducerTemplate()
    .requestBodyAndHeaders(
        Constants.XSENDER_BILL_SERVICE_URI,
        camelTicketData.getBody(),
        camelTicketData.getHeaders(),
        SunatResponse.class
    );
```
