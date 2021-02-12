---
title: Docker compose
---

## Requisitos

- Tener instalado [Docker compose](https://docs.docker.com/compose/install/)

## Crea docker-compose.yml

Crea un archivo `docker-compose.yml` con el siguiente contenido:

```yaml
version: "3"

services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.10.2
    ports:
      - 9200:9200
      - 9300:9300
    environment:
      "discovery.type": single-node
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9200/_cat/health"]
      interval: 10s
      timeout: 5s
      retries: 5

  searchpe-db:
    image: postgres:13.1
    ports:
      - 5432:5432
    environment:
      POSTGRES_DB: searchpe_db
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d searchpe_db"]
      interval: 10s
      timeout: 5s
      retries: 5

  searchpe:
    image: quay.io/projectopenubl/searchpe
    ports:
      - 8180:8180
    environment:
      QUARKUS_HTTP_PORT: 8180
      QUARKUS_DATASOURCE_USERNAME: user
      QUARKUS_DATASOURCE_PASSWORD: password
      QUARKUS_DATASOURCE_JDBC_URL: jdbc:postgresql://searchpe-db:5432/searchpe_db
      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_USERNAME: any
      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PASSWORD: any
      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_HOSTS: elasticsearch:9200
      QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PROTOCOL: HTTP
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8180/q/health"]
      interval: 10s
      timeout: 5s
      retries: 5
    depends_on:
      elasticsearch:
        condition: service_healthy
      searchpe-db:
        condition: service_healthy

  searchpe-ui:
    image: quay.io/projectopenubl/searchpe-ui
    ports:
      - 8080:8080
    environment:
      SEARCHPE_API_URL: http://searchpe:8180
    depends_on:
      searchpe:
        condition: service_healthy
```

## Inicia docker-compose

Ubica tu terminal en la carpeta donde se encuentra `docker-compose.yml` y ejecuta:

```shell
docker-compose up
```

Eso es todo, podrás ver el servidor funcionando en http://localhost:8080
