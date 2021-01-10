---
title: Preguntas precuentes
---

### ¿Qué es el SignatureID?

Es el valor de `cbc:URI` dentro del XML, por ejemplo:

```xml {5}
<cac:Signature>
    ...
    <cac:DigitalSignatureAttachment>
        <cac:ExternalReference>
            <cbc:URI>#PROJECT-OPENUBL-SIGN</cbc:URI>
        </cac:ExternalReference>
    </cac:DigitalSignatureAttachment>
</cac:Signature>
```

Selecciona un buen signatureID. El signatureID no debe de contener números ya que se registró que la SUNAT rechaza signatureIDs como `12345678912` pero si acepta valores como `MiEmpresa`.

En caso de definir signatureIDs inválidos probablemente tendrás el error `No se puede leer (parsear) el archivo XML al momento de enviar el XML a la SUNAT`.

### ¿Cómo ver el contenido del XML firmado?

El XML firmado es obtenido en un objeto de la forma:

```java
Document signedXML = XMLSigner.signXML(xml, signatureID, certificate, privateKey);
```

Nótese que el XML firmado no es un `String` sino un `org.w3c.dom.Document` por lo tanto no debes de intentar imprimirlo usando `System.out.println(signedXML)`. Lo que debes de hacer es intentar escribirlo en un disco duro o convertirlo a `bytes[]` para que puedas empezar a usarlo.

Por ejemplo:

```java
DOMSource source = new DOMSource(signedDocument);
FileWriter writer = new FileWriter(new File("D:/sunat/operaciones/12345678959-01-F001-00000001.xml"));
StreamResult resultXml = new StreamResult(writer);

TransformerFactory transformerFactory = TransformerFactory.newInstance();
Transformer transformer = transformerFactory.newTransformer();
transformer.transform(source, resultXml);

File file = new File("D:/sunat/operaciones/12345678959-01-F001-00000001.xml"); // Este archivo contiene el XML firmado
```
