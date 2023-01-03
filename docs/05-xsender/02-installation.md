---
title: Instalación
---

XBuilder puede ser usado y descargado desde el repositorio central de Maven. Las versiones pueden ser consultadas en:

[![Maven Central](https://img.shields.io/maven-central/v/io.github.project-openubl/xsender)](https://search.maven.org/artifact/io.github.project-openubl/xsender/)

## Maven

Si usas Maven: en tu archivo `pom.xml` agrega:

```xml
<dependency>
    <groupId>io.github.project-openubl</groupId>
    <artifactId>xsender</artifactId>
    <version>VERSION</version>
</dependency>
```

## Gradle

Si usas Gradle: en tu archivo `build.gradle` agrega:

```java
compile group: 'io.github.project-openubl', name: 'xsender', version: 'VERSION'
```

### Configuración extra

XSender usa Apache CXF y Gradle no es capáz de descargar algunas dependencies por lo tanto es necesario agregar dependencias manualmente.
Para mayor información lee [Apache CXF missing dependencies when comming from Gradle](https://discuss.gradle.org/t/apache-cxf-transitive-dependencies-are-missing-many-dependencies-when-coming-from-maven-to-gradle/42333/2)

```java
runtimeOnly("jakarta.xml.soap:jakarta.xml.soap-api:1.4.2")
runtimeOnly("jakarta.xml.ws:jakarta.xml.ws-api:2.3.3")
runtimeOnly("jakarta.annotation:jakarta.annotation-api:1.3.5")
```
