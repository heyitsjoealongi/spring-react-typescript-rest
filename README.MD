# Spring React Typescript REST

Fullstack Application — React (Typescript) Frontend, Spring Boot Java Backend, OkHttp Server, and MySQL (Vitess) Service.

- Frontend Image via [Docker Hub](https://hub.docker.com/r/collectedview/spring-react-typescript-rest-frontend)

- Backend Image via [Docker Hub](https://hub.docker.com/r/collectedview/spring-react-typescript-rest-backend)

Docker's example of this stack using [React, Java, and MySQL](https://github.com/docker/awesome-compose/tree/master/react-java-mysql)

## Stack

### Clear git cache (Frontend/Backend)

```zsh
git rm -r --cached .
```

### Scan files for secrets (Frontend/Backend)

```zsh
gshield secret scan repo C:\Users\colle\OneDrive\Documents\GitHub\collectedview2024
```

### Clean up code (Frontend)

```zsh
cd frontend
yarn prettier --write .
```

## Frontend

Access the frontend code by opening a command line in the root of this project and changing to the frontend folder

```zsh
cd frontend
```

### Yarn

#### Install Yarn

- Install [Node LTS](https://nodejs.org/en) for the proper operating system

- Enable [Corepack](https://yarnpkg.com/getting-started/install#nodejs-1610) for installing Yarn

  ```zsh
  corepack enable
  ```

- Install [Yarn](corepack prepare yarn@stable --activate) for installing and managing `package.json` dependencies

  ```zsh
  corepack prepare yarn@stable --activate
  ```

- Upgrade [Yarn](https://yarnpkg.com/getting-started/install#updating-to-the-latest-versions) to the latest stable version

  ```zsh
  yarn set version stable
  ```

- Install `package.json` dependencies for project

  ```zsh
  yarn install
  ```

#### Build JAR with Yarn

- Install [Visual Studio Code](https://code.visualstudio.com/) editor

- In [Visual Studio Code](https://code.visualstudio.com/) terminal build the React TypeScript application into a bundle

  ```zsh
  yarn build
  ```

### Docker

#### Build Backend Docker Image

For more examples and information on Node JavaScript Docker builds, reference the [Node JavaScript Documentation](https://nodejs.org/en/docs/guides/nodejs-docker-webapp).

- Docker [build](https://docs.docker.com/engine/reference/commandline/build/) command

  ```zsh
  docker build -t spring-react-typescript-rest/frontend .
  ```

#### Run Docker Image

- Docker [run](https://docs.docker.com/engine/reference/commandline/run/) command

  Start Container (Publish):

  ```zsh
  docker run -p 3000:3000 spring-react-typescript-rest/frontend
  ```

#### Push Docker Image

- Docker [login](https://docs.docker.com/engine/reference/commandline/login/) command

  Login:

  ```zsh
  docker login
  ```

- Docker [tag](https://docs.docker.com/engine/reference/commandline/tag/) command

  Tag:

  ```zsh
  docker tag spring-react-typescript-rest/frontend:latest collectedview/spring-react-typescript-rest-frontend:latest
  ```

- Docker [push](https://docs.docker.com/engine/reference/commandline/push/) command

  Push:

  ```zsh
  docker push collectedview/spring-react-typescript-rest-frontend:latest
  ```

## Backend

Access the backend code by opening a command line in the root of this project and changing to the frontend folder

```zsh
cd backend
```

### Gradle

#### Install Gradle

- In Powershell running as admin, enable [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux)

  ```zsh
  dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
  ```

- In Powershell running as admin, enable [Virtual Machine feature](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-3---enable-virtual-machine-feature)

  ```zsh
  dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
  ```

- In Powershell running as admin, install [WSL](https://learn.microsoft.com/en-us/windows/wsl/install#install-wsl-command) to the second version

  ```zsh
  wsl --install Ubuntu-22.04
  ```

- Install (Hyper)[https://hyper.is/] terminal

- In [Hyper](https://hyper.is/) click the hamburger menu -> edit -> preferences -> update the two lines by pasting or typing so they reflect `shell: 'C:\\Windows\\System32\\wsl.exe'` and `shellArgs: [~]`.

- In Hyper terminal upgrade WSL (Ubuntu)

  ```zsh
  sudo apt update && sudo apt upgrade -y
  ```

- Install [Unzip](https://linuxize.com/post/how-to-unzip-files-in-linux/) in WSL (Ubuntu)

  ```bash
  sudo apt-get install unzip -y
  ```

- Install [Zip](https://linuxize.com/post/how-to-unzip-files-in-linux/) in WSL (Ubuntu)

  ```bash
  sudo apt-get install zip -y
  ```

- Install [chocolatey](https://docs.chocolatey.org/en-us/choco/setup)

- Install [SDKMan](https://sdkman.io/install) with chocolatey (Ubuntu)

  ```bash
  curl -s "https://get.sdkman.io" | bash
  ```

- Configure SDKMan in your terminal command line

  ```bash
  source "$HOME/.sdkman/bin/sdkman-init.sh"
  ```

- Install [Gradle](https://gradle.org/install/)

  ```bash
  sdk install gradle 8.1.1
  ```

#### Build JAR with Gradle

- Install [IntelliJ IDEA](https://www.jetbrains.com/idea/) IDE

- In [IntelliJ IDEA](https://www.jetbrains.com/idea/) terminal build the Spring Boot application into a JAR

  ```zsh
  ./gradlew build
  ```

### Docker

#### Build Backend Docker Image

For more examples and information on Spring Boot Docker builds, reference the [Spring Framework Documentation](https://spring.io/guides/topicals/spring-boot-docker/).

- Docker [build](https://docs.docker.com/engine/reference/commandline/build/) command

  ```zsh
  docker build -t spring-react-typescript-rest/backend .
  ```

#### Run Docker Image

- Docker [run](https://docs.docker.com/engine/reference/commandline/run/) command

  Start Container (Publish):

  ```zsh
  docker run -p 80:80 spring-react-typescript-rest/backend
  ```

  Start Container (Interactively & pseudo-TTY) :

  ```zsh
  docker run spring-react-typescript-rest/backend -it 80:80
  ```

#### Push Docker Image

- Docker [login](https://docs.docker.com/engine/reference/commandline/login/) command

  Login:

  ```zsh
  docker login
  ```

- Docker [tag](https://docs.docker.com/engine/reference/commandline/tag/) command

  Tag:

  ```zsh
  docker tag spring-react-typescript-rest/backend:latest collectedview/spring-react-typescript-rest-backend:latest
  ```

- Docker [push](https://docs.docker.com/engine/reference/commandline/push/) command

  Push:

  ```zsh
  docker push collectedview/spring-react-typescript-rest-backend:latest
  ```

## Helm

- Install [Helm](https://helm.sh/) with chocolatey

  ```zsh
  choco install kubernetes-helm
  ```
