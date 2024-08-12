---
title: Kubernetes
---

# Instala [Searchpe Operator](https://operatorhub.io/operator/searchpe-operator)

## Requisitos

- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)

## Inicia Minikube

Ejecuta el comando:

```shell
minikube start --kubernetes-version 1.24.7
```

Habilita addons:

```shell
minikube addons enable ingress
```

Instala OLM:

```shell
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.22.0/install.sh | bash -s v0.22.0
```

## Crea un namespace

```shell
kubectl create ns my-searchpe-operator
```

## Crea una base de datos

```shell
kubectl create -f https://operatorhub.io/install/postgresql.yaml
kubectl get csv -n operators
```

Instancia la base de datos:

```shell
cat << EOF | kubectl -n my-searchpe-operator apply -f -
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: postgresql
spec:
  postgresVersion: 14
  instances:
    - name: pg-1
      replicas: 1
      dataVolumeClaimSpec:
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 1Gi
  backups:
    pgbackrest:
      repos:
      - name: repo1
        volume:
          volumeClaimSpec:
            accessModes:
            - ReadWriteOnce
            resources:
              requests:
                storage: 1Gi
  users:
    - name: foo
      databases:
        - searchpedb
      options: "SUPERUSER"
EOF
```

Espera hasta que tus Pods esten listos.

## Instala Searchpe

```shell
kubectl create -f https://operatorhub.io/install/searchpe-operator.yaml
kubectl get csv -n my-searchpe-operator
```

```shell
cat << EOF | kubectl -n my-searchpe-operator apply -f -
kind: "Searchpe"
apiVersion: "searchpe.openubl.io/v1alpha1"
metadata:
  name: searchpe
spec:
  db:
    usernameSecret:
      name: postgresql-pguser-foo
      key: user
    passwordSecret:
      name: postgresql-pguser-foo
      key: password
    url: jdbc:postgresql://postgresql-primary.my-searchpe-operator.svc:5432/searchpedb
EOF
```

## Ingresa a la consola web

- Ingresa a la consola de Minikube

```shell
minikube dashboard
```

- Selecciona el namespace `my-searchpe-operator`
- Click en `Service/Ingresses`
- Click en el Enpoint de Searchpe
