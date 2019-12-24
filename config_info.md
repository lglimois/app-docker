# Spring-Boot
## Configuration
Les variables sont chargées dans le fichier application.propeties ou .yaml. <br>
Liste l'ordre de chargement des variables de spring boot:<br>

cf. https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config

## Variables d'environnements
Utilisation de variables d'environnement possible: SPRING_CONFIG_NAME instead of spring.config.name

If you use environment variables rather than system properties, most operating systems disallow period-separated key names,<br>
but you can use underscores instead (for example, SPRING_CONFIG_NAME instead of spring.config.name).

# Docker
## Passing argument
via var env
$ docker run -e "SPRING_PROFILES_ACTIVE=prod" -p 8080:8080 -t springio/gs-spring-boot-docker
cf. https://spring.io/guides/gs/spring-boot-docker/

### Advanced Spring Boot Docker
cf. https://spring.io/guides/topicals/spring-boot-docker

#### Tweaks  
//parametrage avançé pour optimisation demarrage Spring 

## Docker vs Docker-compose
Dockerfile

<pre><code>
FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
</code></pre>

Docker-compose
<pre><code>
version: '2'
services:
    myapp:
        image: mycompany/myapp:1.0.0
        container_name: myapp
        depends_on:
        - mysql
        environment:
            - SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/myapp?useUnicode=true&characterEncoding=utf8&useSSL=false
        ports:
            - 8080:8080

    mysql:
        image: mysql:5.7.19
        container_name: mysql
        volumes:
            - /home/docker/volumes/myapp/mysql/:/var/lib/mysql/
        environment:
            - MYSQL_USER=root
            - MYSQL_ALLOW_EMPTY_PASSWORD=yes
            - MYSQL_DATABASE=myapp
        command: mysqld --lower_case_table_names=1 --skip-ssl --character_set_server=utf8
</code></pre>

# Spring boot reference Guide
cf. https://docs.spring.io/spring-boot/docs/current/reference/html/index.html

How-to: contient divers elements sur Spring boot: <br>
logging, conf, init datasource
