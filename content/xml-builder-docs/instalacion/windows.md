---
title: "Windows"
description: "Instalación en Windows"
date: 2020-01-28T00:36:14+09:00
draft: false
weight: 8
---

## Instalación en Windows

### Requisitos

- Tener Sistema Operativo Windows

### Notas adicionales

- Todos los Métodos anteriores: `Java` y `Docker` son válidos para Windows.

## Pasos para levantar el servidor

Solo por cuestiones de ilustración se pondrá el siguiente ejemplo:

- Descargar el servidor desde la página [releases](https://github.com/project-openubl/xml-builder/releases). Debes de seleccionar la distribución que deseas instalar `jdk-xml-builder.tgz` o `jdk-xml-builder-signer.tgz`.
- Descomprimir el archivo descargado en el paso anterior.
- Abrir un terminal y ubicarse en la carpeta donde el servidor fue extraido.

- Levantar el servidor ejecutando el comando:

```
java -jar xml-builder-*-runner.jar
```

- Debes de esperar unos segundos y deberías de ver el siguiente resultado:

![Windows terminal](images/install_windows.png)

**Eso es todo, podrás ver el servidor en [http://localhost:8080](http://localhost:8080)**
