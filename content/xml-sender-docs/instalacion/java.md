---
title: "Java"
description: "Instalacion usando Java"
date: 2020-01-28T00:36:14+09:00
draft: false
weight: 1
---

## Instalación usando Java

`XML Sender` esta hecho en Java y pueden ser ejecutado por el JVM de Java utilizando todos los métodos estandar para ejecutar artefactos Java.

### Requisitos

- Tener instalado Java (versión 11)

### Notas adicionales

- Este método es válido para Sistemas Operativos Windows, Linux, y MacOS.

## Pasos para levantar el servidor

- Descargar el servidor desde la página [releases](https://github.com/project-openubl/xml-sender/releases). Debes de seleccionar la distribución que deseas instalar
- Descomprimir el archivo descargado en el paso anterior.
- Abrir un terminal y ubicarse en la carpeta donde el servidor fue extraido.
- Ejecutar el comando:

```
java -jar xml-sender-*-runner.jar
```

**Eso es todo, podrás ver el servidor en [http://localhost:8080](http://localhost:8080)**
