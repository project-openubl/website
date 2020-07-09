---
title: "Openshift"
description: "Instalación usando Openshift"
date: 2020-01-28T00:36:14+09:00
draft: false
weight: 3
---

## Instalación usando Openshift

`XML Builder` y `XML Builder Signer` pueden ser desplegados fácilmente en Openshift. Openshift te permite utilizar todos los beneficios de una plataforma empresarial basada en contenedores.

Las plantillas Openshift del proyecto se encuentran en:

- [api/src/main/kubernetes/openshift.yml](https://github.com/project-openubl/xml-builder/blob/master/api/src/main/kubernetes/openshift.yml) y
- [api-signer/src/main/kubernetes/openshift.yml](https://github.com/project-openubl/xml-builder/blob/master/api-signer/src/main/kubernetes/openshift.yml).

Para conocer un poco más sobre plantillas Openshift puedes leer la documentación oficial [acá](https://docs.openshift.com/container-platform/4.3/openshift_images/using-templates.html).

### Requisitos

- Tener acceso a una instancia de Openshift V3 o V4

### Notas adicionales

- Este método es el recomendado para `Producción`.

## Descargar las plantillas

Las plantillas se encuentran en el código fuente por lo que podemos descargarlos clonando el proyecto

```
git clone https://github.com/project-openubl/xml-builder.git
```

- Mover tu terminal al proyecto descargado

```
cd xml-builder
```

## Crear Projecto Openshift

- Openshift CLI login

```
oc login --server=https://miservidor
```

- Crear un proyecto openshift

```
oc new-project project-openubl
```

## XML Builder

Sigue todos los pasos de las secciones anteriores y ejecuta:

```
oc process -f api/src/main/kubernetes/openshift.yml | oc create -f -
```

**Eso es todo, podrás ver el servidor en levantado en tu servidor Openshift**

## XML Builder Signer

Sigue todos los pasos de las secciones anteriores y ejecuta:

```
oc process -f api-signer/src/main/kubernetes/openshift.yml | oc create -f -
```

**Eso es todo, podrás ver el servidor en levantado en tu servidor Openshift**

## Previsualización

Dependiendo de la version de su servidor Openshift la siguiente imagen podría variar pero deberías de ver algo similar a:

![XML Builder Signer topology](/images/openshift_topology.png)
