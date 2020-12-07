---
title: XBuilder
description: Crea y firma XMLs basados en UBL
keywords:
  - xbuilder
---

**XSender** es una librería Java que sirve para:

- Crear XMLs.
- Firmar XMLs.

## Requisitos

El único requisito es que tu aplicación use **JDK 8** o superior.

## Instalar

### Maven

Agrega la dependencia en tu archivo `pom.xml`

```xml
<dependency>
    <groupId>io.github.project-openubl</groupId>
    <artifactId>xbuilder</artifactId>
    <version>1.0.1.Final</version>
</dependency>
```

### Gradle

Agrega la dependencia en tu archivo `build.gradle`

```shell
compile group: 'io.github.project-openubl', name: 'xbuilder', version: '1.0.1.Final'
```

## Documentación

La documentación de XBuilder puede ser encontrada en [XBuilder](./xbuilder/index.md)

## ¿En qué entornos puedo usar XBuilder?

Sin importar si tu software está hecho para entornos Desktop o Web, XBuilder se integrará fácilmente a tu software.

Alguno de las integraciones más comunes realizadas son:

- Aplicaciones de escritorio.
- Aplicaciones web hechas en Java EE y Jakarta EE. Por ejemplo Wildfly, JBoss, Glashfish, Tomcat, etc.
- Aplicaciones web hechas en Spring y Spring Boot.
