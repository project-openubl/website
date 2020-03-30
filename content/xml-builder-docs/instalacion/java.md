---
title: "Java"
description: "instalacion java post"
date: 2020-01-28T00:36:14+09:00
draft: false
weight: 1
---

# Instalación usando Java

## Requisitos

- Tener instalado Java (versión 8 u 11)

## Pasos para levantar el servidor

Los mismos pasos aplican para `XML Builder` y `XML Builder Signer`.

- Descargar el servidor desde la página [releases](https://github.com/project-openubl/xml-builder/releases). Debes de seleccionar la distribución que deseas instalar `jdk-xml-builder.tgz` o `jdk-xml-builder-signer.tgz`.
- Descomprimir el archivo descargado en el paso anterior.
- Abrir un terminal y ubicarse en la carpeta donde el servidor fue extraido
- Ejecutar el comando:

```
java -jar xml-builder-*-runner.jar
```

Eso es todo, podrás ver el servidor en [http://localhost:8080](http://localhost:8080)
