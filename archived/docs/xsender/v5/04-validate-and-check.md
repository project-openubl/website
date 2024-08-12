---
title: Valida y consulta
description: Valida los datos de comprobantes
---

## Consulta comprobante (BillConsultService)

### Consulta estado de comprobante

```java
BillConsultServiceDestination destination = BillConsultServiceDestination.builder()
    .url("https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService")
    .operation(BillConsultServiceDestination.Operation.GET_STATUS)
    .build();

CamelData camelData = CamelUtils.getBillConsultService(
    "20494918910", // RUC
    "01", // Código de tipo de comprobante
    "F001", // Serie del comprobante
    102, // Número del comprobante
    destination,
    credentials
);

service.sunat.gob.pe.billconsultservice.StatusResponse sunatResponse = camelContext.createProducerTemplate()
    .requestBodyAndHeaders(
        Constants.XSENDER_BILL_CONSULT_SERVICE_URI,
        camelData.getBody(),
        camelData.getHeaders(),
        service.sunat.gob.pe.billconsultservice.StatusResponse.class
    );
```

### Consulta CDR de comprobante

```java
BillConsultServiceDestination destination = BillConsultServiceDestination.builder()
    .url("https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService")
    .operation(BillConsultServiceDestination.Operation.GET_STATUS_CDR)
    .build();

CamelData camelData = CamelUtils.getBillConsultService(
    "20494918910", // RUC
    "01", // Código de tipo de comprobante
    "F001", // Serie del comprobante
    102, // Número del comprobante
    destination,
    credentials
);

service.sunat.gob.pe.billconsultservice.StatusResponse sunatResponse = camelContext.createProducerTemplate()
    .requestBodyAndHeaders(
        Constants.XSENDER_BILL_CONSULT_SERVICE_URI,
        camelData.getBody(),
        camelData.getHeaders(),
        service.sunat.gob.pe.billconsultservice.StatusResponse.class
    );
```

## Valida comprobante (BillValidService)

### Valida datos de comprobante

```java
BillValidServiceDestination destination = BillValidServiceDestination.builder()
    .url("https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService")
    .build();

CamelData camelData = getBillValidService(
    "20494918910", // RUC
    "01", // Código de tipo de comprobante
    "F001", // Serie de comprobante
    "102", // Numero de comprobante
    "06", // Tipo de documento de receptor (cliente)
    "12345678", // Número de documento del receptor (cliente)
    "01-12-2022", // Fecha de emisión del comprobante
    120.5, // Importe total del comprobante
    "", // Campo debe de ir siempre vacio
    destination,
    credentials
);

service.sunat.gob.pe.billvalidservice.StatusResponse sunatResponse = camelContext.createProducerTemplate()
    .requestBodyAndHeaders(
        Constants.XSENDER_BILL_VALID_SERVICE_URI,
        camelData.getBody(),
        camelData.getHeaders(),
        service.sunat.gob.pe.billvalidservice.StatusResponse.class
    );
```

### Valida XML

```java
String fileName = "12345678912-01-F001-1.xml";
byte[] fileContent = // Lea su archivo XML en bytes[];

BillValidServiceDestination destination = BillValidServiceDestination.builder()
    .url("https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService")
    .build();

CamelData camelData = getBillValidService(
        fileName,
        fileContent,
        destination,
        credentials
);

service.sunat.gob.pe.billvalidservice.StatusResponse sunatResponse = camelContext
    .createProducerTemplate()
    .requestBodyAndHeaders(
        Constants.XSENDER_BILL_VALID_SERVICE_URI,
        camelData.getBody(),
        camelData.getHeaders(),
        service.sunat.gob.pe.billvalidservice.StatusResponse.class
    );
```
