---
title: Pago contado/credito
---

Es posible que una boleta/factura o nota de crédito contenga pagos al crédito o al contado.

- **Pago al crédito**: el cliente paga el total del importe de venta en `N` cuotas.
- **Pago al contado**: el cliente paga el total del importe de venta inmediatamente.

Aplica a :

- Boletas/Facturas.
- Notas de crédito.

## Venta al crédito

Si el comprobante será pagado en cuotas (al crédito) entonces se debe de usar los atributos `withCuotasDePago`.

### Cuotas porcentuales

Si el el pago será en cuotas porcentuales de dos cuotas:

- Primera cuota el 40% del importe total.
- Segunda cuota el 60%.

```java {27-36}
InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()
                .withSerie("F001")
                .withNumero(1)
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
                .withCuotasDePago(Arrays.asList(
                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel()
                                .withPorcentaje(new BigDecimal(40))
                                .withFechaPago(new Date().getTime())
                                .build(),
                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel()
                                .withPorcentaje(new BigDecimal(60))
                                .withFechaPago(new Date().getTime())
                                .build()
                ))
                .build();
```

:::tip Porcentaje = 100

La sumatoria de los valores del porcentaje siempre debe de ser 100.

:::

### Cuotas con monto fijo

Si deseas poner montos fijos a cada cuota puedes hacerlo usando `withMonto`:

```java {27-36}
InvoiceInputModel input = InvoiceInputModel.Builder.anInvoiceInputModel()
                .withSerie("F001")
                .withNumero(1)
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
                .withCuotasDePago(Arrays.asList(
                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel()
                                .withMonto(new BigDecimal(2000))
                                .withFechaPago(new Date().getTime())
                                .build(),
                        CuotaDePagoInputModel.Builder.aFormaPagoCuotaInputModel()
                                .withMonto(new BigDecimal(360))
                                .withFechaPago(new Date().getTime())
                                .build()
                ))
                .build();
```

## Venta al contado

Este es el método por defecto de `XBuilder` así que no necesitas indicar ningún campo en especial. Crea tus comprobantes como normalmente lo haces.

## ¿Cómo se refleja en el XML?

La venta al crédito/contado se refleja en el XML de la siguiente forma:

```xml
<cac:PaymentTerms>
    <cbc:ID>FormaPago</cbc:ID>
    <cbc:PaymentMeansID>Credito</cbc:PaymentMeansID>
    <cbc:Amount currencyID="PEN">2360</cbc:Amount>
</cac:PaymentTerms>
<cac:PaymentTerms>
    <cbc:ID>FormaPago</cbc:ID>
    <cbc:PaymentMeansID>Cuota000</cbc:PaymentMeansID>
    <cbc:Amount currencyID="PEN">2000</cbc:Amount>
    <cbc:PaymentDueDate>2019-01-07</cbc:PaymentDueDate>
</cac:PaymentTerms>
<cac:PaymentTerms>
    <cbc:ID>FormaPago</cbc:ID>
    <cbc:PaymentMeansID>Cuota001</cbc:PaymentMeansID>
    <cbc:Amount currencyID="PEN">360</cbc:Amount>
    <cbc:PaymentDueDate>2019-01-08</cbc:PaymentDueDate>
</cac:PaymentTerms>
```
