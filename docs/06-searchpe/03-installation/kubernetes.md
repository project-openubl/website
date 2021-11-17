---
title: Kubernetes
---

Para poder desplegar Searchpe, puedes cualquier distribución de Kubernetes como por ejemplo [Minikube](https://minikube.sigs.k8s.io/docs/start/), [Openshift](https://docs.openshift.com/), etc.

Para este ejemplo usaremos Minikube aunque tambien aplica a cualquier distribución de Kubernetes que tengas.

## Requisitos

- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)

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

## Instala Searchpe

Utiliza un archivo .yaml pre configurado para instalar Searchpe:

```shell
kubectl apply -n openubl -f https://raw.githubusercontent.com/project-openubl/searchpe/master/src/main/kubernetes/searchpe.yml
```

## Verifica tus pods

Verifica que todos tus Pods funcionen correctamente:

```shell
kubectl get pods -n openubl
```

## Accede a Searchpe

Expone el Service de Searchpe en tu computador local:

```
minikube service searchpe -n openubl
```
