---
title: "BVS:getStatus"
description: "usar BillValidService:getStatus post"
date: 2020-01-28T00:39:09+09:00
draft: false
weight: 6
---

## BillValidService:getStatus

Verificar la autenticidad de un archivo XML:

```java
File file = new File("../folder/F001-00005954.xml");

ServiceConfig config = new ServiceConfig.Builder()
    .url("https://e-factura.sunat.gob.pe/ol-it-wsconsvalidcpe/billValidService")
    .username(USERNAME)
    .passwod(PASSWORD)
    .build();

StatusResponse status = BillValidServiceManager.getStatus(file, config);
```
