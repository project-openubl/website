---
title: XSender
description: Enviar XMLs a la SUNAT con XSender
keywords:
  - xsender
---

**XSender** es una librería Java que sirve para:

- Enviar tus comprobantes electrónicos (archivos XML) a la SUNAT.

El proceso de envío es muy fácil y no necesitas interactuar directamente con los servicios web de la SUNAT ya que **XSender** lo hace por ti.

## Requisitos

El único requisito es que tu aplicación use **JDK 8** o superior.

## Instalar

### Maven

Agrega la dependencia en tu archivo `pom.xml`

```xml
<dependency>
    <groupId>io.github.project-openubl</groupId>
    <artifactId>xsender</artifactId>
    <version>3.0.1.Final</version>
</dependency>
```

### Gradle

Agrega la dependencia en tu archivo `build.gradle`

```shell
compile group: 'io.github.project-openubl', name: 'xsender', version: '3.0.1.Final'
```

## Documentación

La documentación de XSender puede ser encontrada en [XSender](./xsender/index.md)

## ¿En qué entornos puedo usar XSender?

Sin importar si tu software está hecho para entornos Desktop o Web, XSender se integrará fácilmente a tu software.

Alguno de las integraciones más comunes realizadas son:

- Aplicaciones de escritorio.
- Aplicaciones web hechas en Java EE y Jakarta EE. Por ejemplo Wildfly, JBoss, Glashfish, Tomcat, etc.
- Aplicaciones web hechas en Spring y Spring Boot.
