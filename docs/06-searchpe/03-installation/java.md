---
title: Java
---

Puedes utilizar la máquina virtual de Java para ejecutar Searchpe en modo producción.

## Requisitos

- PostgreSQL
- Java (versión 11 o superior)

## Instala PostgreSQL

Puedes usar https://www.postgresql.org/download/ para descargar e instalar PosgreSQL; sin embargo, puedes utilizar el método de tu preferencia.

Una vez instalado PostgreSQL necesitas crear:

- Una base de datos.
- Un usuario y contraseña que tenga acceso a la base de datos.

Puedes utilizar [PgAdmin](https://www.pgadmin.org/download/) para configurar tu base de datos.

## Instala Searchpe

- Descarga el archivo **searchpe-${version}.zip** desde [Searchpe Releases](https://github.com/project-openubl/searchpe/releases).

- Descomprime el `.zip` descargado:

![img](/img/searchpe/distribution-folder-tree.png "Distribution folder tree")

- Abre el archivo `config/application.properties` y configura las conexiones a la base de datos:

```yaml
# Quarkus settings
quarkus.http.port=8180

# PostgreSQL settings
quarkus.datasource.username=db_username
quarkus.datasource.password=db_password
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/searchpe_db
```

Reemplaza `db_username`, `db_password`, y `searchpe_db` con los datos de la base de datos que creaste.

- Inicia el servidor ejecutando el archivo `bin/standalone.sh` o `bin/standalone.bat` dependiendo del sistema operativo que uses.

- Searchpe está funcionando en [http://localhost:8180](http://localhost:8180)
