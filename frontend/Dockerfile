#!/bin/bash
FROM node:20-alpine
WORKDIR /app
USER react
COPY package*.json ./
RUN yarn install --production
COPY . ./
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]