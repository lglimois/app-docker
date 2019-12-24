# Configuration

## Docker
Passing argument:<br>
$ docker run -e "SPRING_PROFILES_ACTIVE=prod" -p 8080:8080 -t springio/gs-spring-boot-docker
cf. https://spring.io/guides/gs/spring-boot-docker/

Advanced Spring Boot Docker<br>
cf. https://spring.io/guides/topicals/spring-boot-docker


### Tweaks  
//parametrage avançé pour optimisation

## Spring-Boot
cf. https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config

Liste l'ordre de chargement des variables de spring boot:<br>
If you use environment variables rather than system properties, most operating systems disallow period-separated key names,<br>
but you can use underscores instead (for example, SPRING_CONFIG_NAME instead of spring.config.name).

# Spring boot reference Guide
cf. https://docs.spring.io/spring-boot/docs/current/reference/html/index.html

How-to
