---
title: "BCS:getStatus"
description: "usar BillConsultService:getStatus post"
date: 2020-01-28T00:39:09+09:00
draft: false
weight: 4
---

## BillConsultService:getStatus

Utilizado para consultar el estado del comprobante en la SUNAT:

```java
ServiceConfig config = new ServiceConfig.Builder()
                .url(URL_CONSULTA)
                .username(USERNAME)
                .passwod(PASSWORD)
                .build();

BillConsultBean consult = new BillConsultBean.Builder()
        .ruc("1234567894")
        .tipo("01")
        .serie("F001")
        .numero(102)
        .build();

StatusResponse response = BillConsultServiceManager.getStatus(consult, config);
```
