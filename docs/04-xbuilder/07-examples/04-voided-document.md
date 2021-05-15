---
title: VoidedDocument (Baja)
description: Crear baja
---

## Create _VoidedDocumentType_

Para crear una baja debes de crear una instancia de `VoidedDocumentInputModel` y usarlo para crear el XML:

```java {24}
Config config;
SystemClock clock;

// Create the POJO
VoidedDocumentInputModel pojo = VoidedDocumentInputModel.Builder.aVoidedDocumentInputModel()
        .withNumero(1)
        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()
                .withRuc("12345678912")
                .withRazonSocial("Softgreen S.A.C.")
                .build()
        )
        .withDescripcionSustento("mi razon de baja")
        .withComprobante(
                VoidedDocumentLineInputModel.Builder.aVoidedDocumentLineInputModel()
                        .withSerieNumero("F001-1")
                        .withTipoComprobante(Catalog1.FACTURA.toString())
                        .build()
        )
        .build();

// Create XML
DocumentWrapper<VoidedDocumentOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);
VoidedDocumentOutputModel output = result.getOutput();
String xml = result.getXml();
```

## How the _documentID_ is calculated

The _documentID_ has the structure:

- _code-date-number_. E.g. `RA-20190101-1`

`XBuilder` will create the correct _documentID_ for you, you only need to define the `number` of _VoidedDocuments_ created during the day.
