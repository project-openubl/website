---
title: Inicio rápido
---

:::caution Laboratorios
Los laboratorios están hechos para que usted aprenda a usar Ublhub sin dificultad. Recuerde que la configuración no necesariamente es la adecuada para entornos de producción.
:::

## Laboratorio local

Experimenta con Ublhub en tu laptop.

### Requisitos

- Docker
- Docker compose

### Inicia ublhub

- Crea un archivo `docker-compose.yml` con el contenido:

```yaml
version: "3"

services:
  postgresql:
    image: postgres:13.6
    ports:
      - 5432:5432
    environment:
      POSTGRES_DB: ublhub_db
      POSTGRES_USER: db_username
      POSTGRES_PASSWORD: db_password
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U db_username -d ublhub_db"]
      interval: 10s
      timeout: 5s
      retries: 5

  ublhub:
    image: quay.io/projectopenubl/ublhub
    ports:
      - 8180:8080
    environment:
      QUARKUS_HTTP_PORT: 8080
      QUARKUS_DATASOURCE_USERNAME: db_username
      QUARKUS_DATASOURCE_PASSWORD: db_password
      QUARKUS_DATASOURCE_JDBC_URL: jdbc:postgresql://postgresql:5432/ublhub_db
      OPENUBL_STORAGE_TYPE: filesystem
      OPENUBL_STORAGE_FILESYSTEM.FOLDER: workspace
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/q/health"]
      interval: 10s
      timeout: 5s
      retries: 5
    depends_on:
      postgresql:
        condition: service_healthy
```

- Ubica tu terminal en la carpeta donde se encuentra el archivo `docker-compose.yml` y ejecuta:

```shell
docker-compose up
```

- Ublhub está funcionando en [http://localhost:8180](http://localhost:8180)
