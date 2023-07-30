#!/bin/bash
FROM gradle:latest
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
USER java
RUN gradle --no-daemon
FROM amazoncorretto:17
RUN mkdir /app
COPY --from=build /home/gradle/src/build/libs/*.jar /app/spring-boot-application.jar
EXPOSE 8080
ENTRYPOINT ["java","-Dspring.profiles.active=production","-jar","/app/spring-boot-application.jar"]