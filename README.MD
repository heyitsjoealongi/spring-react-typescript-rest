# Spring React TypeScript REST

Fullstack Application — React (TypeScript) Frontend, Spring Boot Java Backend, OkHttp Client, and MySQL (Vitess) Service.

- Frontend Demo via [Amplify](https://main.dh06uvvwsg3un.amplifyapp.com/)

- Frontend Image via [Docker Hub](https://hub.docker.com/r/collectedview/spring-react-typescript-rest-frontend)

- Backend Image via [Docker Hub](https://hub.docker.com/r/collectedview/spring-react-typescript-rest-backend)

Docker's example of this stack using [React, Java, and MySQL](https://github.com/docker/awesome-compose/tree/master/react-java-mysql)

## Frameworks

### Frontend

- [Create React App (TypeScript)](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/en/main)
- [Material UI](https://mui.com/)
- [Emotion Styled Components](https://emotion.sh/docs/introduction)
- [Recoil](https://recoiljs.org/)
- [Swiper](https://swiperjs.com/)

### Backend

- [Spring Initializr](https://start.spring.io/)
- [Amazon Corretto JDK](https://aws.amazon.com/corretto)

## Stack

### Clear git cache (Frontend/Backend)

```bash
git rm -r --cached .
```

### Scan files for secrets (Frontend/Backend)

```bash
gshield secret scan repo C:\Users\colle\OneDrive\Documents\GitHub\collectedview2024
```

### Clean up code (Frontend)

```bash
cd frontend
yarn prettier --write .
```

## Add Packages (Frontend)
```bash
yarn add

yarn add --dev
```

## Install Packages (Frontend)
```bash
yarn install
```

## Clean Cache (Frontend)
```bash
yarn cache clean
```

### Upgrade Packages (Frontend)

```bash
cd frontend
yarn plugin import interactive-tools
```

```bash
cd frontend
yarn upgrade-interactive
```

## Frontend

Access the frontend code by opening a command line in the root of this project and changing to the frontend folder.

```bash
cd frontend
```

### Yarn

#### Install Yarn

- Install [Node LTS](https://nodejs.org/en) for the proper operating system

- Enable [Corepack](https://yarnpkg.com/getting-started/install#nodejs-1610) for installing Yarn

  ```bash
  corepack enable
  ```

- Install [Yarn](corepack prepare yarn@stable --activate) for installing and managing `package.json` dependencies

  ```bash
  corepack prepare yarn@stable --activate
  ```

- Upgrade [Yarn](https://yarnpkg.com/getting-started/install#updating-to-the-latest-versions) to the latest stable version

  ```bash
  yarn set version stable
  ```

- Install `package.json` dependencies for project

  ```bash
  yarn install
  ```

#### Build Application with Yarn

- Install [Visual Studio Code](https://code.visualstudio.com/) editor

- In [Visual Studio Code](https://code.visualstudio.com/) terminal build the React TypeScript application into a bundle

  ```bash
  yarn build
  ```

### Docker

#### Build Backend Docker Image

For more examples and information on Node JavaScript Docker builds, reference the [Node JavaScript Documentation](https://nodejs.org/en/docs/guides/nodejs-docker-webapp)

- Docker [build](https://docs.docker.com/engine/reference/commandline/build/) command

  ```bash
  docker build -t spring-react-typescript-rest/frontend .
  ```

#### Run Docker Image

- Docker [run](https://docs.docker.com/engine/reference/commandline/run/) command

  Start Container (Publish):

  ```bash
  docker run -p 3000:3000 spring-react-typescript-rest/frontend
  ```

#### Push Docker Image

- Docker [login](https://docs.docker.com/engine/reference/commandline/login/) command

  Login:

  ```bash
  docker login
  ```

- Docker [tag](https://docs.docker.com/engine/reference/commandline/tag/) command

  Tag:

  ```bash
  docker tag spring-react-typescript-rest/frontend:latest collectedview/spring-react-typescript-rest-frontend:latest
  ```

- Docker [push](https://docs.docker.com/engine/reference/commandline/push/) command

  Push:

  ```bash
  docker push collectedview/spring-react-typescript-rest-frontend:latest
  ```

### Amplify

#### Install Amplify CLI

- Install [AWS Amplify CLI](https://docs.amplify.aws/cli/) to setup backend functionality

```bash
npm install -g @aws-amplify/cli
```

- Create a CLI based Access Id and Secret Key for an AWS [IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

- Configure the [AWS Amplify](https://aws.amazon.com/amplify/) configuration

```bash
amplify configure
```

- Initialize the [AWS Amplify](https://aws.amazon.com/amplify/) project configuration

- If the initialization does not complete, rename the `.gitignore`, make sure to copy the contents of the initial `.gitignore`, into the file Amplify generates

## Backend

Access the backend code by opening a command line in the root of this project and changing to the backend folder.

```bash
cd backend
```

### Gradle

#### Install Gradle

- In Powershell running as admin, enable [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux)

  ```bash
  dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
  ```

- In Powershell running as admin, enable [Virtual Machine feature](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-3---enable-virtual-machine-feature)

  ```bash
  dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
  ```

- In Powershell running as admin, install [WSL](https://learn.microsoft.com/en-us/windows/wsl/install#install-wsl-command) to the second version

  ```bash
  wsl --install Ubuntu-22.04
  ```

- Install [Hyper](https://hyper.is/) terminal

- In [Hyper](https://hyper.is/) click the hamburger menu -> edit -> preferences -> update the two lines by pasting or typing so they reflect `shell: 'C:\\Windows\\System32\\wsl.exe'` and `shellArgs: [~]`

- In Hyper terminal upgrade WSL (Ubuntu)

  ```ubuntu
  sudo apt update && sudo apt upgrade -y
  ```

- Install [Unzip](https://linuxize.com/post/how-to-unzip-files-in-linux/) in WSL (Ubuntu)

  ```ubuntu
  sudo apt-get install unzip -y
  ```

- Install [Zip](https://linuxize.com/post/how-to-unzip-files-in-linux/) in WSL (Ubuntu)

  ```ubuntu
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

  ```bash
  ./gradlew build
  ```

### Docker

#### Build Backend Docker Image

For more examples and information on Spring Boot Docker builds, reference the [Spring Framework Documentation](https://spring.io/guides/topicals/spring-boot-docker/).

- Docker [build](https://docs.docker.com/engine/reference/commandline/build/) command

  ```bash
  docker build -t spring-react-typescript-rest/backend .
  ```

#### Run Docker Image

- Docker [run](https://docs.docker.com/engine/reference/commandline/run/) command

  Start Container (Publish):

  ```bash
  docker run -p 9000:9000 spring-react-typescript-rest/backend
  ```

  Start Container (Interactively & pseudo-TTY) :

  ```bash
  docker run spring-react-typescript-rest/backend -it 9000:9000
  ```

#### Push Docker Image

- Docker [login](https://docs.docker.com/engine/reference/commandline/login/) command

  Login:

  ```bash
  docker login
  ```

- Docker [tag](https://docs.docker.com/engine/reference/commandline/tag/) command

  Tag:

  ```bash
  docker tag spring-react-typescript-rest/backend:latest collectedview/spring-react-typescript-rest-backend:latest
  ```

- Docker [push](https://docs.docker.com/engine/reference/commandline/push/) command

  Push:

  ```bash
  docker push collectedview/spring-react-typescript-rest-backend:latest
  ```

## Vitess

### MySQL

- Install [MySQL Community Server](https://dev.mysql.com/downloads/windows/installer/8.0.html)

## Helm

- Install [Helm](https://helm.sh/) with chocolatey

  ```bash
  choco install kubernetes-helm
  ```

- Create Helm chart with chocolatey

  ```bash
  helm create <chart name>
  ```

#### Acknowledgements

- [Logo](https://thenounproject.com/icon/spring-14717/)
- [User Icon](https://thenounproject.com/icon/user-5818176/)

##### License

© 2023 Spring React TypeScript REST released via [MIT](https://opensource.org/licenses/MIT) license. Information on this license can be viewed as it applies to this repository on GitHub at [Spring React TypeScript REST License](https://github.com/collectedview/spring-react-typescript-rest/blob/master/LICENSE).

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcollectedview%2Fspring-react-typescript-rest.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fcollectedview%2Fspring-react-typescript-rest?ref=badge_large)
