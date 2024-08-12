---
title: Leer XML
---

## XML como String

```java
// Given
String xml;
javax.xml.bind.Unmarshaller unmarshaller; // Ejemplo: JAXBContext.newInstance(XMLInvoice.class).createUnmarshaller()

InvoiceMapper invoiceMapper = Mappers.getMapper(InvoiceMapper.class)

try (StringReader reader = new StringReader(xml);) {
    XMLInvoice pojo = (XMLInvoice) unmarshaller.unmarshal(new InputSource(reader));
    Invoice invoice = invoiceMapper.map(pojo);

    System.out.println("Mi POJO es:" + invoice.toString());
}
```

