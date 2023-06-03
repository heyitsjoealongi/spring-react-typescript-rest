#!/bin/bash
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY . ./
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]