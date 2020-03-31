---
title: "Desarrolladores"
description: "developers post"
date: 2020-01-28T00:39:09+09:00
draft: false
weight: 7
---

## Levantar servidor para desarrollo

### Requisitos:

- Maven
- Git
- Java - OpenJDK (8, 11)

## Levantar el servidor

Para levantar el backend en modo desarrollo necesitas:

- Hacer un fork al projecto https://github.com/project-openubl/xml-builder
- clonar el project que acabas de hacer fork:

```
git clone https://github.com/carlosthe19916/xml-builder.git
```

Recuerda cambiar carlosthe19916 por el usuario con el que hiciste Fork en el paso anterior

- Ubicarte en la carpeta que acabas de descargar

```
cd xml-builder
```

- Descargar las dependencias

```
./mvnw install -DskipTests
```

### Para XML Builder

Ejecutar el comando:

```
./mvnw clean compile quarkus:dev -f api/ -DnoDeps
```

### Para XML Builder Signer

Ejecutar el comando:

```
./mvnw clean compile quarkus:dev -f api-signer/ -DnoDeps
```

**Eso es todo. Podrás ver el servidor corriendo en http://localhost:8080/**
