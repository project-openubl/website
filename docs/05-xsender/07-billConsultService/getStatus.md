---
title: GetStatus
---

Usado para:

- Verificar el estado de un archivo en la SUNAT.

## Check status

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
