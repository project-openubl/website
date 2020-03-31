---
title: "April 2020"
description: "Version estable 1.0.0.Final fue lanzada"
date: 2020-01-28T00:10:48+09:00
draft: false
weight: 1
---

## Version 1.0.0.Final

Despues de mucho trabajo en XML Builder la primera version estable está finalmente disponible.

### ¿Qué cambios ser realizaron?

- Se removió la dependencia de Kogito Rules debido a que por el momento la libreria es un poco inestable. No se descarta la posiblidad de incluir Kogito en futuras versiones.
- Se removió las páginas UI que permitían la simulación de creación de comprobantes, y en su lugar se incluyó un conjunto de componentes UI basados en OpenAPI - Swagger que permiten simular y explotar todos los rest endpoint de XML Builder.
- Se hicieron cambios en los nombres de algunos campos ya que se reportaron que no eran fáciles de entender.
- Se creó desde cero la página oficial del projecto y estrenamos nueva página en [https://project-openubl.github.io/xml-builder-docs/](https://project-openubl.github.io/xml-builder-docs/)
- Las nuevas imágenes Docker ahora están basadas en JDK 11.
- La versión de Quarkus fue actualizada a 1.3.1.Final.
- Se migró de Azure DevOps a Github Actions para el manejo del workflow del projecto.

## ¿Qué viene después?

- Ahora que se tiene una versión estable el API no cambiará a menos que sea estrictamente necesario.
- Se está planeando exponer el servidor `XML Builder` de manera gratuita en el internet, mantente informado para futuras notificaciones.
