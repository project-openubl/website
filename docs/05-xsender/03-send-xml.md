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

## Configura URLs y credenciales

```java
CompanyURLs companyURLs = CompanyURLs.builder()
    .invoice("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
    .perceptionRetention("https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService")
    .despatch("https://api-cpe.sunat.gob.pe/v1/contribuyente/gem")
    .build();

CompanyCredentials credentials = CompanyCredentials.builder()
    .username("12345678959MODDATOS")
    .password("MODDATOS")
    .token("accessTokenParaGuiasDeRemision")
    .build();
```

:::info
XSender soporta el envío de guias de remisión. El `token` descrito en la clase `CompanyCredentials` representa el access token para el envio de guias de remisión. Lee [Obtener access token](#obtener-access-token-para-el-envío-de-guias-de-remisión)
:::

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

Si enviaste una baja, resumen diario, o guia de remisión, entonces puedes consultar el estado de tu ticket.

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

## Obtener access token para el envío de guias de remisión

```java
// Access token creado anteriormente (NULL si es la primera vez que generas el token).
// Si el token previo expiró entonces se genera uno nuevo.
// Si el token no expiró se devuelve el token previo.
ResponseAccessTokenSuccessDto prevToken = null;

String clientId = "myClientId";

Map<String, Object> headers = Map.of(
    HttpConstants.HTTP_URI, "https://api-cpe.sunat.gob.pe",
    HttpConstants.HTTP_PATH, "/v1/clientessol/" + clientId + "/oauth2/token/"
);
Object body = List.of(prevToken, Map.of(
    "grant_type", "password",
    "scope", "https://api-cpe.sunat.gob.pe",
    "client_id", clientId,
    "client_secret", "mySecret",
    "username", "12345678959MODDATOS",
    "password", "MODDATOS"
));

ResponseAccessTokenSuccessDto newToken = camelContext.createProducerTemplate()
    .requestBodyAndHeaders(Constants.XSENDER_CREDENTIALS_API_URI, body, headers, ResponseAccessTokenSuccessDto.class);
```
