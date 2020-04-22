---
title: "BS:getStatus"
description: "usar BillService:getStatus post"
date: 2020-01-28T00:39:09+09:00
draft: false
weight: 3
---

## BillService:getStatus

Utilizado para consultar tickets:

```java
ServiceConfig config = new ServiceConfig.Builder()
            .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")
            .username("12345678959MODDATOS")
            .password("MODDATOS")
            .build();

BillServiceModel result = BillServiceManager.getStatus("miTicket", config);
```
