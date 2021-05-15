---
title: Docker
---

La forma más rápida de experimentar con **Searchpe** es usando Docker o Podman.

## Iniciar PostgreSQL

```bash
docker run --network=host -p 5432:5432 -e POSTGRES_USER=db_username -e POSTGRES_PASSWORD=db_password -e POSTGRES_DB=searchpe_db postgres:13.1
```

## Iniciar Elasticsearch

```bash
docker run --network=host -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.10.2
```

## Iniciar Searchpe

```bash
docker run --network=host -p 8180:8180 -e QUARKUS_HTTP_PORT=8180 -e QUARKUS_DATASOURCE_USERNAME=db_username -e QUARKUS_DATASOURCE_PASSWORD=db_password -e QUARKUS_DATASOURCE_JDBC_URL=jdbc:postgresql://localhost:5432/searchpe_db -e QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_USERNAME=any -e QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PASSWORD=any -e QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_HOSTS=localhost:9200 -e QUARKUS_HIBERNATE_SEARCH_ORM_ELASTICSEARCH_PROTOCOL=HTTP quay.io/projectopenubl/searchpe
```

## Iniciar Searchpe UI

```bash
docker run --network=host -p 8080:8080 -e SEARCHPE_API_URL=http://localhost:8180 quay.io/projectopenubl/searchpe-ui
```

Eso es todo, ya puedes abrir tu browser en http://localhost:8080

:::tip Asegúrate de tener los puertos 5432, 9200, 9300, 8180, y 8080 libres

El ejemplo anterior usa `--network=host` por lo que necesitas tener esos puertos libres.

:::
