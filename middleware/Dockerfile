#!/bin/bash
FROM denoland/deno:latest
WORKDIR /app
COPY . ./
RUN deno cache main.ts
EXPOSE 4040
CMD ["run", "--allow-net", "--allow-read", "--allow-env", "--allow-run", "--watch=routes/", "main.ts"]