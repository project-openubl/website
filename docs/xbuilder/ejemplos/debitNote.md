---
title: DebitNote (Nota de débito)
description: Crear nota de debito
---

## Create _DebitNoteType_

Para crear una nota de débito debes de crear una instancia de `DebitNoteInputModel` y usarlo para crear el XML:

```java {38}
Config config;
SystemClock clock;

// Create the POJO
DebitNoteInputModel pojo = DebitNoteInputModel.Builder.aDebitNoteInputModel()
        .withSerie("FD01")
        .withNumero(1)
        .withSerieNumeroComprobanteAfectado("F001-1")
        .withDescripcionSustento("mi sustento")
        .withProveedor(ProveedorInputModel.Builder.aProveedorInputModel()
                .withRuc("12345678912")
                .withRazonSocial("Softgreen S.A.C.")
                .build()
        )
        .withCliente(ClienteInputModel.Builder.aClienteInputModel()
                .withNombre("Carlos Feria")
                .withNumeroDocumentoIdentidad("12121212121")
                .withTipoDocumentoIdentidad(Catalog6.RUC.toString())
                .build()
        )
        .withDetalle(Arrays.asList(
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withDescripcion("Item1")
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build(),
                DocumentLineInputModel.Builder.aDocumentLineInputModel()
                        .withDescripcion("Item2")
                        .withCantidad(new BigDecimal(10))
                        .withPrecioUnitario(new BigDecimal(100))
                        .build())
        )
        .build();

// Create XML
DocumentWrapper<DebitNoteOutputModel> result = DocumentManager.createXML(pojo, config, systemClock);
DebitNoteOutputModel output = result.getOutput();
String xml = result.getXml();
```
