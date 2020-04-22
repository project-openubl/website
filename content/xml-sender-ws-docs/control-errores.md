---
title: "Control de errores"
description: "control de errores post"
date: 2020-01-28T00:39:09+09:00
draft: false
weight: 7
---

## Control de errores SUNAT

Cuando una petición a BillService devuelve algun error es posible controlar esos errores haciendo uso de la interfaz:

```java
interface ErrorBillServiceProviderFactory { ....}
```

![Architecture](https://raw.githubusercontent.com/project-openubl/xml-sender-ws/master/docs/images/bill-service-stack.jpg "Architecture")

> Nota: Se recorrerá todos las instancias que implementen la interfaz ErrorBillServiceProviderFactory y se detendrá el recorrido cuando alguna instance devuelva un valor diferente a null.

### BillServiceProviderFactory por defecto

| CLASE                                        | DESCRIPCION                                                                                               | ACTIVO POR DEFECTO |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------ |
| ErrorExcepcionBillServiceProviderFactory     | Errores entre 100 y 1999 inclusive                                                                        | SI                 |
| ErrorRechazoBillServiceProviderFactory       | Errores entre 2000 y 3999 inclusive                                                                       | SI                 |
| ErrorObservacionesBillServiceProviderFactory | Errores mayores a 4000                                                                                    | SI                 |
| Error2324BillServiceProviderFactory          | Error para el error 2324. Pone como aceptado un comprobante que ya fue comunicado como baja anteriormente | SI                 |
| Error1033BillServiceProviderFactory          | Error para el error 1033. Permite recuperar el cdr de un comprobante que ya fue enviado anteriormente     | NO                 |

### Extender la funcionalidad de acuerdo a tus necesidades

En caso desees controlar los errores de la SUNAT deberás seguir los siguientes pasos:

1. Crear una clase que implemente la interfaz ErrorBillServiceProviderFactory:

```
public class MyErrorHandlerFactory implements ErrorBillServiceProviderFactory { ... }
```

2. Crear el archivo:

```
META-INF/services/ErrorBillServiceProviderFactory
```

3. Dentro del archivo creado en el paso anterior se deberá añadir una linea indicando el nombre de la clase (incluyendo el paquete en el que está ubicado) creada en el paso 1:

```
mipaquete.MyErrorHandlerFactory
```
