---
title: Firmar XML
---

Para firmar un XML necesitas tener dos objetos:

- `X509Certificate` y
- `PrivateKey`

Puedes cargar esos objetos con los métodos y código que creas conveniente.

## Cargar certificado

### Usar .pfx

Puedes cargar `X509Certificate` y `PrivateKey` desde un archivo .pfx usando:

```java
InputStream ksInputStream = new FileInputStream(new File("myCertificate.pfx"));
CertificateDetails certificate = CertificateDetailsFactory.create(ksInputStream, "myCertificatePassword");

X509Certificate certificate = certificate.getX509Certificate();
PrivateKey privateKey = certificate.getPrivateKey();
```

## Firmar XML

```java {8}
String xml; // See docs to create an XML
String signatureID = "mySignID"; // Your Signature ID

// Get your certificate using the method of your preference
X509Certificate certificate;
PrivateKey privateKey;

Document signedXML = XMLSigner.signXML(xml, signatureID, certificate, privateKey);
```

¡Eso es todo, ya tienes tu XML firmado!

:::tip

`signedXML` es un objeto de la clase `org.w3c.dom.Document` por lo tanto no debes de usar `System.out.println` para ver su contenido; intenta escribir el documento al disco duro.

:::

:::tip

`signatureID` Es el valor de `cbc:URI` dentro del XML, por ejemplo:

```xml {4}
<cac:Signature>
    <cac:DigitalSignatureAttachment>
        <cac:ExternalReference>
            <cbc:URI>#PROJECT-OPENUBL-SIGN</cbc:URI>
        </cac:ExternalReference>
    </cac:DigitalSignatureAttachment>
</cac:Signature>
```

:::
