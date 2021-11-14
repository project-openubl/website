---
title: Inicio rápido
---

:::caution No recomendado para producción
Los laboratorios están diseñados para experimentación.
:::

## Laboratorio online

Experimenta con Searchpe utilizando un laboratorio virtual:

- [Searchpe quickstart](https://katacoda.com/openubl/courses/searchpe3/quickstart)

## Laboratorio local

Experimenta con Searchpe en tu laptop.

### Requisitos

- Docker
- Docker compose

### Inicia searchpe

- Crea un archivo `docker-compose.yml` con el contenido:

```yaml
version: "3"

services:
  postgresql:
    image: postgres:13.1
    ports:
      - 5432:5432
    environment:
      POSTGRES_DB: searchpe_db
      POSTGRES_USER: db_username
      POSTGRES_PASSWORD: db_password
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U db_username -d searchpe_db"]
      interval: 10s
      timeout: 5s
      retries: 5

  searchpe:
    image: quay.io/projectopenubl/searchpe
    ports:
      - 8180:8080
    environment:
      QUARKUS_HTTP_PORT: 8080
      QUARKUS_DATASOURCE_USERNAME: db_username
      QUARKUS_DATASOURCE_PASSWORD: db_password
      QUARKUS_DATASOURCE_JDBC_URL: jdbc:postgresql://postgresql:5432/searchpe_db
      // highlight-next-line
      SEARCHPE_SUNAT_PADRONREDUCIDOURL: https://raw.githubusercontent.com/project-openubl/searchpe/master/src/test/resources/padron_reducido_ruc.zip
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/q/health"]
      interval: 10s
      timeout: 5s
      retries: 5
    depends_on:
      postgresql:
        condition: service_healthy
```

:::info Padrón reducido
La variable de entorno `SEARCHPE_SUNAT_PADRONREDUCIDOURL` apunta a un padrón reducido de prueba, si deseas usar el padrón reducido real entonces reemplaza la linea resaltada por:

`SEARCHPE_SUNAT_PADRONREDUCIDOURL: http://www2.sunat.gob.pe/padron_reducido_ruc.zip`
:::

- Ubica tu terminal en la carpeta donde se encuentra el archivo `docker-compose.yml` y ejecuta:

```shell
docker-compose up
```

- Searchpe está funcionando en [http://localhost:8180](http://localhost:8180)
