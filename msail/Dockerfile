FROM openjdk:8-jdk-alpine AS builder
LABEL maintener="admin@sh.com"
EXPOSE 8080
ARG JAR_FILE=msail-0.0.1.jar
ADD ${JAR_FILE} msail.jar 
ENTRYPOINT ["java","-jar","msail.jar"]

