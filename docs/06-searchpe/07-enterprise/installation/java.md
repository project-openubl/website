---
title: Java
---

Puedes utilizar la máquina virtual de Java para ejecutar Searchpe en modo producción.

## Requisitos

- PostgreSQL
- Elasticsearch
- Keycloak
- Java (versión 11 o superior)

## Instala PostgreSQL

Puedes usar https://www.postgresql.org/download/ para descargar e instalar PosgreSQL; sin embargo, puedes utilizar el método de tu preferencia.

Una vez instalado PostgreSQL necesitas crear:

- Una base de datos.
- Un usuario y contraseña que tenga acceso a la base de datos.

Puedes utilizar [PgAdmin](https://www.pgadmin.org/download/) para configurar tu base de datos.

## Instala Elasticsearch

Elasticsearch puede ser instalado con en método de tu preferencia; aquí tienes algunas alternativas disponibles:

- Si usas Windows puedes descargar el [MSI](https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html#download-msi) e instalarlo.
- Si usas CentOS, RHEL, o Fedora entonces puedes descargar e instalar [RPM](https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html).

Para ver todas las opciones disponibles para instalar Elasticseach visita la documentación oficial [Install Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html)

## Instala Keycloak

Keycloak puede ser instalado con en método de tu preferencia. Te recomendamos seguir la documentación oficial [Server installation](https://www.keycloak.org/docs/latest/server_installation/index.html)

## Instala Searchpe

- Descarga el archivo **searchpe-enterprise-${version}.zip** desde [Searchpe Releases](https://github.com/project-openubl/searchpe/releases).

- Descomprime el `.zip` descargado:

![img](/img/searchpe/distribution-folder-tree.png "Distribution folder tree")

- Abre el archivo `config/application.properties` y configura las conexiones a la base de datos:

```yaml
# PostgreSQL settings
quarkus.datasource.username=db_username
quarkus.datasource.password=db_password
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/searchpe_db

# Oidc Auth
quarkus.oidc.enabled=true
quarkus.oidc.client-id=searchpe
quarkus.oidc.credentials.secret=secret
quarkus.oidc.auth-server-url=http://localhost:8080/auth/realms/openubl

# Elasticsearch
quarkus.hibernate-search-orm.elasticsearch.username=es_username
quarkus.hibernate-search-orm.elasticsearch.password=es_password
quarkus.hibernate-search-orm.elasticsearch.hosts=localhost:9200
quarkus.hibernate-search-orm.elasticsearch.protocol=HTTP
quarkus.hibernate-search-orm.elasticsearch.version=7
quarkus.hibernate-search-orm.elasticsearch.version-check.enabled=true
quarkus.hibernate-search-orm.schema-management.strategy=CREATE_OR_VALIDATE
quarkus.hibernate-search-orm.automatic-indexing.synchronization.strategy=write-sync
```

Reemplaza los valores de tu servidor PostgreSQL, Keycloak, y Searchpe con correctos valores.

- Inicia el servidor ejecutando el archivo `bin/standalone.sh` o `bin/standalone.bat` dependiendo del sistema operativo que uses.

- Searchpe está funcionando en [http://localhost:8180](http://localhost:8180)
