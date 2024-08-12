---
title: Kubernetes
---

# Instala [Ublhub Operator](https://operatorhub.io/operator/ublhub-operator)

## Requisitos

- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)

## Inicia Minikube

Ejecuta el comando:

```shell
minikube start
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
kubectl create ns my-ublhub-operator
```

## Crea una base de datos

```shell
kubectl create -f https://operatorhub.io/install/postgresql.yaml
kubectl get csv -n operators
```

Instancia la base de datos:

```shell
cat << EOF | kubectl -n my-ublhub-operator apply -f -
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
        - ublhubdb
      options: "SUPERUSER"
EOF
```

Espera hasta que tus Pods esten listos.

## Instala Ublhub

```shell
kubectl create -f https://operatorhub.io/install/ublhub-operator.yaml
kubectl get csv -n my-ublhub-operator
```

```shell
cat << EOF | kubectl -n my-ublhub-operator apply -f -
kind: "Ublhub"
apiVersion: "ublhub.openubl.io/v1alpha1"
metadata:
  name: ublhub
spec:
  db:
    usernameSecret:
      name: postgresql-pguser-foo
      key: user
    passwordSecret:
      name: postgresql-pguser-foo
      key: password
    url: jdbc:postgresql://postgresql-primary.my-ublhub-operator.svc:5432/ublhubdb
  storage:
    type: "filesystem"
    filesystem:
      size: "1Gi"
EOF
```

## Ingresa a la consola web

- Ingresa a la consola de Minikube

```shell
minikube dashboard
```

- Selecciona el namespace `my-ublhub-operator`
- Click en `Service/Ingresses`
- Click en el Enpoint de Ublhub
