---
title: getStatus
---

Usado para:

- Verificar la autenticidad de un archivo XML.

## Check status

```java
File file = new File("../folder/F001-00005954.xml");

ServiceConfig config = new ServiceConfig.Builder()
    .url("https://e-factura.sunat.gob.pe/ol-it-wsconsvalidcpe/billValidService")
    .username(USERNAME)
    .passwod(PASSWORD)
    .build();

StatusResponse status = BillValidServiceManager.getStatus(file, config);
```
