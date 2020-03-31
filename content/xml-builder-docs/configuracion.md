---
title: "Configuracion"
description: "configuracion post"
date: 2020-01-28T00:39:09+09:00
draft: false
weight: 4
---

## Configuración del servidor

**XML Builder** y **XML Builder Signer** permite configurar los valores que el servidor utiliza para hacer cálculos automáticos.

La forma en la que `XML Builder` y `XML Builder Signer` pueden ser configurados es a travéz del uso de variables de entorno. En la siguiente sección encontrarás la lista de variables existentes en el servidor.

## Variables generales

Este conjunto de variables son válidas para ambos servidores `XML Builder` y `XML Builder Signer`:

| CONTAINER ENV_VAR                 | JAVA ENV_VAR                   |             DEFAULT VALUE |
| --------------------------------- | :----------------------------- | ------------------------: |
| OPENUBL_IGV                       | openubl.igv                    |                      0.18 |
| OPENUBL_ICB                       | openubl.icb                    |                      0.20 |
| OPENUBL_DEFAULT_MONEDA            | openubl.defaultMoneda          |                       PEN |
| OPENUBL_DEFAULT_UNIDAD_MEDIDA     | openubl.defaultUnidadMedida    |                       NIU |
| OPENUBL_DEFAULT_TIPO_IGV          | openubl.defaultTipoIgv         | GRAVADO_OPERACION_ONEROSA |
| OPENUBL_DEFAULT_TIPO_NOTA_CREDITO | openubl.defaultTipoNotaCredito | ANULACION_DE_LA_OPERACION |
| OPENUBL_DEFAULT_TIPO_NOTA_DEBITO  | openubl.defaultTipoNotaDebito  |       AUMENTO_EN_EL_VALOR |

## Variables XML Builder Signer

Este conjunto de variables son válidas sólo para `XML Builder Signer`:

| CONTAINER ENV_VAR              | JAVA ENV_VAR                | DEFAULT VALUE |
| ------------------------------ | :-------------------------- | ------------- |
| QUARKUS_DATASOURCE_URL         | quarkus.datasource.url      | -             |
| QUARKUS_DATASOURCE_USERNAME    | quarkus.datasource.driver   | -             |
| QUARKUS_DATASOURCE_PASSWORD    | quarkus.datasource.username | -             |
| QUARKUS_DATASOURCE_DRIVER      | quarkus.datasource.password | -             |

# ¿Cómo utilizar las variables de entorno?

## Docker

Las variables de entorno deben de ser transmitidas a travez del comando `-e`. Por ejemplo:

```
docker run \
-e OPENUBL_DEFAULT_MONEDA=PEN \
-e OPENUBL_ICB=0.3 \
-e QUARKUS_DATASOURCE_URL=jdbc:postgresql://postgres:5432/db_name \
-e QUARKUS_DATASOURCE_USERNAME=db_username \
-e QUARKUS_DATASOURCE_PASSWORD=db_password \
-e QUARKUS_DATASOURCE_DRIVER=org.postgresql.Driver \
projectopenubl/xml-builder-signer
```

## Openshift y/o Kubernetes

Las variables de entorno pueden ser transmitidas a travéz de `env`. Por ejemplo:

```yaml
spec:
  containers:
    - env:
        - name: OPENUBL_DEFAULT_MONEDA
          value: "PEN"
        - name: OPENUBL_ICB
          value: "0.3"
        - name: QUARKUS_DATASOURCE_URL
          value: "jdbc:postgresql://db:5432/xml-builder"
        - name: QUARKUS_DATASOURCE_DRIVER
          value: "org.postgresql.Driver"
        - name: QUARKUS_DATASOURCE_USERNAME
          value: "usuario"
        - name: QUARKUS_DATASOURCE_PASSWORD
          value: "password"
```

## JVM de Java

Las variables de entorno pueden ser transmitidas a travéz de `-D`. Por ejemplo:

```
java -Dopenubl.defaultUnidadMedida=KRG -jar xml-builder-api-*-runner.jar
```
