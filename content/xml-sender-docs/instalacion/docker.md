---
title: "Docker"
description: "Instalación usando Docker"
date: 2020-01-28T00:36:14+09:00
draft: false
weight: 2
---

## Instalación usando Docker

Este método es el más fácil de usar y el más recomendado cuando se quiere experimentar con el software.

### Requisitos

- Tener instalado Docker

### Notas adicionales

- Este método es el recomendado para integrar tu software durante `Desarrollo`.
- Este método no es recomendable para `Producción`.

## XML Sender

Levantar el servidor `XML Builder` es muy sencillo, solamente tienes que abrir un terminal y ejecutar el siguiente comando:

```
docker run -v ~/cdrs:/deployments/tmp -p 8080:8080 projectopenubl/xml-sender
```

**Eso es todo, podrás ver el servidor en [http://localhost:8080](http://localhost:8080)**
