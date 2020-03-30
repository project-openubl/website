---
title: "Linux"
description: "linux post"
date: 2020-01-28T00:36:14+09:00
draft: false
weight: 7
---

# Instalación en Linux

## Requisitos

- Tener un Sistema Operativo Linux

## Instalación usando Java

Puedes ejecutar el los artefactos usando Java tal y como se describe en la página **Instalación::Java**

## Instalación utilizando los artefactos nativos

`XML Builder` y `XML Builder Signer` pueden ser compilados utilizando [GraalVM](https://www.graalvm.org/) gracias a las herramientas brindadas por [Quarkus](https://quarkus.io/).

- Descargar el servidor desde la página [releases](https://github.com/project-openubl/xml-builder/releases). Debes de seleccionar el archivo `native-linux-artifacts.tgz`, este archivo contiene los artefactos para `XML Builder` y `XML Builder Signer`
- Descomprimir el archivo descargado en el paso anterior.
- Abrir un terminal y ubicarse en la carpeta donde el servidor fue extraido

## XML Builder

Ejecutar el comando:

```
./api/target/xml-builder-api-*-runner
```

Eso es todo, podrás ver el servidor en [http://localhost:8080](http://localhost:8080)

## XML Builder Signer

Debido a que `XML Builder Signer` requiere de una base de datos deberás tener disponible una instancia de PostgreSQL.

**Exportar la configuración del servidor**

```
export QUARKUS_DATASOURCE_URL=jdbc:postgresql://postgres:5432/db_name
```

```
export QUARKUS_DATASOURCE_USERNAME=db_username
```

```
export QUARKUS_DATASOURCE_PASSWORD=db_password
```

```
export QUARKUS_DATASOURCE_DRIVER=org.postgresql.Driver
```

Ejecutar el comando:

```
./api-signer/target/xml-builder-api-signer-*-runner
```

Eso es todo, podrás ver el servidor en [http://localhost:8080](http://localhost:8080)
