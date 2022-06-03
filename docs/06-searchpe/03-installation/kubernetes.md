---
title: Kubernetes
---

Para poder desplegar Searchpe, puedes cualquier distribución de Kubernetes como por ejemplo [Minikube](https://minikube.sigs.k8s.io/docs/start/), [Openshift](https://docs.openshift.com/), etc.

Para este ejemplo usaremos Minikube aunque tambien aplica a cualquier distribución de Kubernetes que tengas.

[![asciicast](https://asciinema.org/a/h3GSvzwkmgRkSgXAGlD0v1q6g.svg)](https://asciinema.org/a/h3GSvzwkmgRkSgXAGlD0v1q6g)

## Requisitos

- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Helm](https://helm.sh/)

## Inicia Minikube

Ejecuta el comando:

```shell
minikube start
```

## Crea un Namespace

Crea un namespace donde se instalará Searchpe:

```shell
kubectl create ns openubl
```

## Agrega Searchpe a tu repositorio Helm

Agrega el repositorio:

```shell
helm repo add openubl https://gitlab.com/api/v4/projects/36554180/packages/helm/stable
```

Actualiza tus repositorios:

```shell
helm repo update
```

## Instala Searchpe

Utiliza un archivo .yaml pre configurado para instalar Searchpe:

```shell
helm install my-release openubl/searchpe -n openubl
```

> `my-release` es el nombre del Helm desplegado.

## Espera a que tus Deployments estén listos

Verifica que todos tus Pods funcionen correctamente:

```shell
kubectl get deployments -n openubl -w
```

Espera a que los deployments estén listos:

```
my-release-searchpe-db   1/1     1            1           22s
my-release-searchpe      1/1     1            1           34s
```

En este punto ya tienes Searchpe funcionando en tu servidor Kubernetes. Dependiendo del proveedor del cluster tendrás diferentes formas de exponer tus pods a travéz de una URL.

## Accede a Searchpe usando port-forward

Obtén el nombre de un pod:

```
kubectl get pods -n openubl
```

Debemos de hacer `port-forward` a un Pod:

```
kubectl -n openubl port-forward NOMBRE_DE_UN_POD 8180:8080
```

podrás acceder a Searchpe a travéz del `localhost`, por ejemplo:

```shell
curl http://localhost:8180/q/health
```
