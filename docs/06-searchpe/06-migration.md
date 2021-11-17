---
title: Migrando de v2 a v3
---

Este documento te guiará en la migración de tu Searchpe v2 a v3.

## Principales diferencias

| Searchpe v2                                                                 | Searchpe v3                                                                                                                                                |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requiere Elasticsearch para almacenar índices usados en búsquedas avanzadas | Elasticsearch no es requerido; sin embargo, las búsquedas avanzadas ya no son posibles. Sólo se puede buscar personas a travéz de su `número de documento` |
| No existe seguridad en los endpoints                                        | Los endpoints tienen seguridad y además cuenta con un sistema de administración de usuarios                                                                |
| La UI y el backend son independientes y ambos requieren ser instalados      | La UI y el backend son un solo artefacto y ya no se requiere la instalación de la UI ya que viene dentro del backend por defecto                           |
| Sólo se puede buscar por RUC                                                | Se puede buscar por DNI y RUC                                                                                                                              |

![img](/img/searchpe/new-version.png "Seachpe new version")

## Consulta DNI/RUC

### Searchpe v2

El endpoint `/api/contribuyentes/{numeroDocumento}` retorna:

```json {2-4}
{
  "ruc": "20517630331",
  "razonSocial": "Razón social de persona jurídica",
  "estadoContribuyente": "ACTIVO",
  "condicionDomicilio": "HABIDO",
  "nombreVia": "Nombre de la calle...",
  "numero": "123456789",
  "tipoVia": "AV.",
  "ubigeo": "010101"
}
```

### Searchpe v3

El endpoint `/api/contribuyentes/{numeroDocumento}` retorna:

```json {2-5}
{
  "numeroDocumento": "20517630331",
  "nombre": "Razón social o nombre de persona natural/jurídica",
  "estado": "ACTIVO",
  "tipoPersona": "JURIDICA",
  "condicionDomicilio": "HABIDO",
  "nombreVia": "Nombre de la calle...",
  "numero": "123456789",
  "tipoVia": "AV.",
  "ubigeo": "010101"
}
```
