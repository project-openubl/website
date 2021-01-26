---
title: Instalación
---

XBuilder puede ser usado y descargado desde el repositorio central de Maven. Las versiones pueden ser consultadas en:

[![Maven Central](https://img.shields.io/maven-central/v/io.github.project-openubl/xbuilder)](https://search.maven.org/artifact/io.github.project-openubl/xbuilder/)

## Maven

Si usas Maven: en tu archivo `pom.xml` agrega:

```xml
<dependency>
    <groupId>io.github.project-openubl</groupId>
    <artifactId>xbuilder</artifactId>
    <version>UltimaVersion</version>
</dependency>
```

> Reemplaze `UltimaVersion` por una versión válida.

## Gradle

Si usas Gradle: en tu archivo `build.gradle` agrega:

```java
compile group: 'io.github.project-openubl', name: 'xbuilder', version: 'EscribaLaUltimaVersion'
```

> Reemplaze `UltimaVersion` por una versión válida.

## No uso Maven ni Gradle ¿Cómo instalar XBuilder?

Se recomienda que todo proyecto esté hecho usando Maven o Gradle ya que facilita y automatiza el proceso de descarga de dependencias. Te recomendamos:

- Evaluar cambiar tu código y empezar a Maven o Gradle.
- Si después de evaluar tu código llegas a la conclusión de que no puedes usar Maven o Gradle entonces debes de descargar todas las dependencias de la libreria e incluirlas en tu proyecto.

- Crea un archivo `pom.xml` con el siguiente contenido:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>mygroup</groupId>
    <artifactId>myartifact</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>My app</name>

    <dependencies>
        <dependency>
            <groupId>io.github.project-openubl</groupId>
            <artifactId>xsender</artifactId>
            <version>3.0.1.Final</version>
        </dependency>
    </dependencies>
</project>
```

- Abre un terminal y ubícate en la carpeta donde creaste el `pom.xml`
- Ejecuta el comando:

```shell
mvn dependency:copy-dependencies
```

- Se creará una carpeta `target` al costado de `pom.xml`. Lo único que tienes que hacer es copiar todas las dependencias dentro de la carpeta `target/dependency` a tu proyecto.

### Ejemplo

Este ejemplo muestra cómo usar las dependencias sin Maven o Gradle en [project-xbuilder-xsender-NO-MAVEN-GRADLE](https://github.com/xxsolracxx/project-xbuilder-xsender-NO-MAVEN-GRADLE)
