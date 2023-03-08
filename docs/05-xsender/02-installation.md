---
title: Instalación
---

XBuilder puede ser usado y descargado desde el repositorio central de Maven. Las versiones pueden ser consultadas en:

[![Maven Central](https://img.shields.io/maven-central/v/io.github.project-openubl/xsender)](https://central.sonatype.com/artifact/io.github.project-openubl/xsender)

## Standalone

Ideal para aplicaciones de escritorio o aplicaciones desplegadas en servidores como Tomcat.

Si usas Maven: en tu archivo `pom.xml` agrega:

```xml
<dependency>
    <groupId>io.github.project-openubl</groupId>
    <artifactId>xsender</artifactId>
    <version>${xsender.version}</version>
</dependency>
```

### Inicializa CamelContext y utilizalo con XSender

```java
public class XSenderController {

    public String test() {
        CamelContext camelContext = StandaloneCamel.getInstance()
            .getMainCamel()
            .getCamelContext();
        
        SunatResponse sendFileSunatResponse = camelContext.createProducerTemplate()
                .requestBodyAndHeaders(
                        Constants.XSENDER_BILL_SERVICE_URI,
                        camelData.getBody(),
                        camelData.getHeaders(),
                        SunatResponse.class
                );
    }

```

## Quarkus

Para aplicaciones hechas en [Quarkus](https://quay.io/)

Si usas Maven: en tu archivo `pom.xml` agrega:

```xml
<dependency>
    <groupId>io.github.project-openubl</groupId>
    <artifactId>quarkus-xsender</artifactId>
    <version>${xsender.version}</version>
</dependency>
```

### Injecta CamelContext y utilizalo con XSender

```java
@ApplicationScoped
public class XSenderController {

    @Inject
    private CamelContext camelContext;

    public String test() {
        SunatResponse sendFileSunatResponse = camelContext.createProducerTemplate()
                .requestBodyAndHeaders(
                        Constants.XSENDER_BILL_SERVICE_URI,
                        camelData.getBody(),
                        camelData.getHeaders(),
                        SunatResponse.class
                );
    }
```

## Spring Boot

Para aplicaciones hechas en [Spring Boot](https://spring.io/)

Si usas Maven: en tu archivo `pom.xml` agrega:

```xml
<dependency>
    <groupId>io.github.project-openubl</groupId>
    <artifactId>spring-boot-xsender</artifactId>
    <version>${xsender.version}</version>
</dependency>
```

### Configura la clase principal de Spring Boot

```java
@ComponentScan
@ComponentScan("io.github.project.openubl.spring.xsender.runtime")
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
```

### Injecta CamelContext y utilizalo con XSender

```java
public class XSenderController {

    @Autowired
    private CamelContext camelContext;

    public String test() {
        SunatResponse sendFileSunatResponse = camelContext.createProducerTemplate()
                .requestBodyAndHeaders(
                        Constants.XSENDER_BILL_SERVICE_URI,
                        camelData.getBody(),
                        camelData.getHeaders(),
                        SunatResponse.class
                );
    }
```

## Gradle

Si usas Gradle: en tu archivo `build.gradle` agrega:

```java
compile group: 'io.github.project-openubl', name: 'xsender', version: 'VERSION'
```

### Configuración extra

XSender usa Apache CXF y Gradle no es capáz de descargar algunas dependencies por lo tanto es necesario agregar dependencias manualmente.
Para mayor información lee [Apache CXF missing dependencies when comming from Gradle](https://discuss.gradle.org/t/apache-cxf-transitive-dependencies-are-missing-many-dependencies-when-coming-from-maven-to-gradle/42333/2)

```java
runtimeOnly("jakarta.xml.soap:jakarta.xml.soap-api:1.4.2")
runtimeOnly("jakarta.xml.ws:jakarta.xml.ws-api:2.3.3")
runtimeOnly("jakarta.annotation:jakarta.annotation-api:1.3.5")
```
