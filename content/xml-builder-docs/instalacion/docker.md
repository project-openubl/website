---
title: "Docker"
description: "docker post"
date: 2020-01-28T00:36:14+09:00
draft: false
weight: 2
---

# Instalación usando Docker

## Requisitos

- Tener instalado Docker

## XML Builder

Levantar el servidor XML Builder es muy sencillo, solamente tienes que abrir un terminal y ejecutar el siguiente comando:

```
docker run -p 8080:8080 projectopenubl/xml-builder
```

Eso es todo, podrás ver el servidor en [http://localhost:8080](http://localhost:8080)

## XML Builder Signer

XML Builder Signer requiere de una base datos y es por esa razón que los pasos son relativamente distintos:

### Ejemplo PostgreSQL

**Crea un network**

```
docker network create xml-builder-network
```

**Inicia una instancia PostgreSQL**
Inicia una instancia PostgreSQL usando una imagen Docker de PostgreSQL:

```
docker run -d --name postgres --net xml-builder-network \
-e POSTGRES_DB=db_name \
-e POSTGRES_USER=db_username \
-e POSTGRES_PASSWORD=db_password \
postgres
```

**Inicia una instancia XML Builder Signer**

Iniciar una instancia de XML Builder Signer y conectalo a la instancia PostgreSQL:

```
docker run --name xml-builder --net xml-builder-network -p 8080:8080 \
-e QUARKUS_DATASOURCE_URL=jdbc:postgresql://postgres:5432/db_name \
-e QUARKUS_DATASOURCE_USERNAME=db_username \
-e QUARKUS_DATASOURCE_PASSWORD=db_password \
-e QUARKUS_DATASOURCE_DRIVER=org.postgresql.Driver \
projectopenubl/xml-builder-signer
```

Eso es todo, podrás ver el servidor en [http://localhost:8080](http://localhost:8080)
