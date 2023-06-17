#!/bin/bash

FROM amazoncorretto:17
VOLUME /tmp
COPY ./build/libs/demo-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 80
ENTRYPOINT ["java","-jar","/app.jar"]