# Ejemplo de uso de Json Web Token con Keyrock

Este ejemplo muestra como se pueden usar JWT a través de [Keyrock](https://github.com/ging/fiware-idm). Esta herramienta permite autenticación y autorización delegado basado en el protocolo [OAuth2](https://oauth.net/2/).

La arquitectura del ejemplo esta compuesta de:

 - Keyrock - 172.18.1.6:3000
 - Mysql - 172.18.1.5:3306
 - 2 aplicaciones: 
    - Chocolate Factory - 172.18.1.7:4000
    - Candy Factory - 172.18.1.8:5000

Con este ejemplo se puede comprobar como se puede obtener un token de acceso a través de uno de los flujos definidos por OAuth y usar este token no solo para verificar la identidad de un usuario, si no que también para restringir el acceso a determinados recursos.

El ejemplo tiene 3 usuarios:
 - User: willywonka@test.com y Password: 1234 
 - User: oompaloompaCH@test.com y Password: 1234
 - User: oompaloompaCY@test.com y Password: 1234


## Software requirements
Para arrancar el entorno es necesario tener instalado:

 - [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#docker-ee-customers) version 1.21.2
 - [docker-compose](https://docs.docker.com/compose/install/) version 18.03.1-ce

## How to Build & Install

 1. Clonar repositorio:

```console
git clone https://github.com/apozohue10/keyrock_jwt_example.git
```

 2. instalar y arrancar:

```console
sudo docker-compose up