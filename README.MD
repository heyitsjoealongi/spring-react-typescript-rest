# Spring React TypeScript REST

Fullstack Application — React (TypeScript) frontend, Axios HTTP client, Deno middleware, Spring Boot Java backend, OkHttp client, and MySQL (AWS RDS - Aurora) service.

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
- [Axios HTTP](https://axios-http.com/)

### Middleware

- [Oak](https://oakserver.github.io/oak/)
- [DAY.JS](https://www.npmjs.com/package/dayjs)
- [Bowser](https://www.npmjs.com/package/bowser)

### Backend

- [Spring Initializr](https://start.spring.io/)
- [Amazon Corretto JDK](https://aws.amazon.com/corretto)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [MySQL - Connector/J](https://dev.mysql.com/downloads/connector/j/)
- [Spring Security](https://docs.spring.io/spring-security/reference/index.html)

### Cloud

- [AWS Amplify - Hosting](https://aws.amazon.com/amplify/hosting/)
- [AWS Amplify - Authentication](https://aws.amazon.com/amplify/authentication/)
- [AWS RDS - Aurora](https://aws.amazon.com/rds/aurora/)
- [AWS Virtual Private Cloud](https://aws.amazon.com/vpc/)
- [AWS Elastic Container Registry](https://aws.amazon.com/ecr/)
- [AWS Elastic Kubernetes Service](https://aws.amazon.com/eks/)
- [AWS EC2](https://aws.amazon.com/ec2/)
- [AWS Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/)

### Tools

- [Visual Studio Code](https://code.visualstudio.com/)
- [Intellij Idea](https://www.jetbrains.com/idea/)
- [Yarn](https://yarnpkg.com/)
- [Deno](https://deno.land/)
- [Gradle](https://gradle.org/)
- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/)
- [MySQL Community Server](https://dev.mysql.com/downloads/windows/installer/8.0.html)
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
- [Kubernetes Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

## Stack

### Clear git cache (Frontend/Backend)

```bash
git rm -r --cached .
```

### Reset git head (Frontend/Backend)

```bash
git reset --hard <COMMIT_ID>
```

### Scan files for secrets (Frontend/Backend)

```bash
gshield secret scan repo
```

### Clean up code (Frontend)

```bash
cd frontend
yarn prettier --write .
```

### Clean up code (Middleware)

```bash
cd middleware
yarn prettier --write .
```

### Add Packages (Frontend)

```bash
cd frontend
yarn add
```

### Install Packages (Frontend)

```bash
cd frontend
yarn install
```

### Install Packages (Middleware)

```bash
cd middleware
yarn install
```

### Clean Cache (Frontend)

```bash
cd frontend
yarn cache clean
```

### Clean Cache (Middleware)

```bash
cd middleware
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

### Upgrade Packages (Middleware)

```bash
cd middleware
yarn plugin import interactive-tools
```

```bash
cd middleware
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

#### Create/convert env

- Rename the `example.env` file to `.env` for Yarn and Docker

  - This is a security measure for reducing commits with secrets

#### Build Application with Yarn

- Install [Visual Studio Code](https://code.visualstudio.com/) editor

- In [Visual Studio Code](https://code.visualstudio.com/) terminal build the React TypeScript application into a bundle

  ```bash
  yarn build
  ```

#### Start Frontend

- Start project

  ```bash
  yarn start
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
  docker tag spring-react-typescript-rest/frontend <DOCKER_USERNAME>/spring-react-typescript-rest-frontend:latest
  ```

- Docker [push](https://docs.docker.com/engine/reference/commandline/push/) command

  Push:

  ```bash
  docker push <DOCKER_USERNAME>/spring-react-typescript-rest-frontend:latest
  ```

### Amplify

#### Install Amplify CLI

- Install [AWS Amplify CLI](https://docs.amplify.aws/cli/) to setup Amplify functionality

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

## Middleware

Access the middleware code by opening a command line in the root of this project and changing to the middleware folder.

```bash
cd middleware
```

### Deno

#### Start middleware

- Start project

  ```bash
  deno run --allow-net --allow-read --allow-env --allow-run --watch=routes/ main.ts
  ```

### Docker

#### Build Backend Docker Image

For more examples and information on Spring Boot Docker builds, reference the [Spring Framework Documentation](https://spring.io/guides/topicals/spring-boot-docker/).

- Docker [build](https://docs.docker.com/engine/reference/commandline/build/) command

  ```bash
  docker build -t spring-react-typescript-rest/middleware .
  ```

#### Run Docker Image

- Docker [run](https://docs.docker.com/engine/reference/commandline/run/) command

  Start Container (Publish):

  ```bash
  docker run -p 4040:4040 spring-react-typescript-rest/middleware
  ```

  Start Container (Interactively & pseudo-TTY) :

  ```bash
  docker run spring-react-typescript-rest/middleware -it 4040:4040
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
  docker tag spring-react-typescript-rest/middleware <DOCKER_USERNAME>/spring-react-typescript-rest-middleware:latest
  ```

- Docker [push](https://docs.docker.com/engine/reference/commandline/push/) command

  Push:

  ```bash
  docker push <DOCKER_USERNAME>/spring-react-typescript-rest-middleware:latest
  ```

  #### Push Docker Image to ECR (Amazon Elastic Container Registry)

- Add the Powershell [AWS tools](https://www.powershellgallery.com/packages/AWS.Tools.ECR/4.1.370) for ECR, to begin setting up registry permissions

  ```bash
  Install-Module -Name AWS.Tools.ECR
  ```

- You can reference the [Getting started](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-console.html) documentation for implementing access configuration (Make sure the repository is established with a non-root account)

- [Pipe AWS password](https://docs.aws.amazon.com/cli/latest/reference/ecr/get-login-password.html) to Docker login command

  ```bash
  (Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com
  ```

- Docker [tag](https://docs.docker.com/engine/reference/commandline/tag/) command

  Tag:

  ```bash
  docker tag spring-react-typescript-rest/middleware <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/middleware:latest
  ```

- Docker [push](https://docs.docker.com/engine/reference/commandline/push/) command

  Push:

  ```bash
  docker push <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/middleware:latest
  ```

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

#### Start Backend with Gradle

- Create configuration in IntelliJ IDEA or reference the `SpringReactTypeScriptREST.run.xml` file in the `backend` folder and start the application with IntelliJ IDEA

  ```bash
  <component name="ProjectRunConfigurationManager">
    <configuration default="false" name="SpringReactTypeScriptREST" type="SpringBootApplicationConfigurationType" factoryName="Spring Boot" nameIsGenerated="true">
      <option name="ACTIVE_PROFILES" value="dev" />
      <module name="spring-react-typescript-rest-backend.main" />
      <option name="SPRING_BOOT_MAIN_CLASS" value="com.springreacttypescriptrest.backend.SpringReactTypeScriptREST" />
      <extension name="software.aws.toolkits.jetbrains.core.execution.JavaAwsConnectionExtension">
        <option name="credential" />
        <option name="region" />
        <option name="useCurrentConnection" value="false" />
      </extension>
      <method v="2">
        <option name="Make" enabled="true" />
      </method>
    </configuration>
  </component>
  ```

#### Create/convert application properties

- Rename the `application-dev.properties` and `application-prod.properties` files to `application-development.properties` and `application-produdction.properties` for Gradle and Docker

  - This is a security measure for reducing commits with secrets

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
  docker run -p 8080:8080 spring-react-typescript-rest/backend
  ```

  Start Container (Interactively & pseudo-TTY) :

  ```bash
  docker run spring-react-typescript-rest/backend -it 8080:8080
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
  docker tag spring-react-typescript-rest/backend <DOCKER_USERNAME>/spring-react-typescript-rest-backend:latest
  ```

- Docker [push](https://docs.docker.com/engine/reference/commandline/push/) command

  Push:

  ```bash
  docker push <DOCKER_USERNAME>/spring-react-typescript-rest-backend:latest
  ```

  #### Push Docker Image to ECR (Amazon Elastic Container Registry)

- Add the Powershell [AWS tools](https://www.powershellgallery.com/packages/AWS.Tools.ECR/4.1.370) for ECR, to begin setting up registry permissions

  ```bash
  Install-Module -Name AWS.Tools.ECR
  ```

- You can reference the [Getting started](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-console.html) documentation for implementing access configuration (Make sure the repository is established with a non-root account)

- [Pipe AWS password](https://docs.aws.amazon.com/cli/latest/reference/ecr/get-login-password.html) to Docker login command

  ```bash
  (Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com
  ```

- Docker [tag](https://docs.docker.com/engine/reference/commandline/tag/) command

  Tag:

  ```bash
  docker tag spring-react-typescript-rest/backend <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/backend:latest
  ```

- Docker [push](https://docs.docker.com/engine/reference/commandline/push/) command

  Push:

  ```bash
  docker push <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/backend:latest
  ```

### AWS

#### Install AWS CLI

- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) to setup AWS functionality

- Validate successful installation AWS CLI

  ```bash
  aws --version
  ```

- Create a CLI based Access Id and Secret Key for an AWS [IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

- Prepare the following values for the configuration stage of the AWS CLI, the [region can be found on this documentation page](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html), reference the column with the label, "region".

- Access Key: <ACCESS_KEY>
- Secret Key: <SECRET_KEY>
- Region: <REGION>

```bash
aws configure
```

#### Set AWS IAM Permissions

- Add any required permissions to the IAM User for which the AWS CLI configuration was established with

## AWS RDS - Aurora

### MySQL

- Install [MySQL Community Server](https://dev.mysql.com/downloads/windows/installer/8.0.html)
- Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

## Helm

- Install [Helm](https://helm.sh/) with chocolatey

  ```bash
  choco install kubernetes-helm
  ```

- Validate successful installation of Helm

  ```bash
  helm version
  ```

- Create Helm chart with chocolatey

  ```bash
  helm create <CHART_NAME>
  ```

## Kubernetes

- Install [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/#install-nonstandard-package-tools) with chocolatey

  ```bash
  choco install kubernetes-cli
  ```

- Validate successful installation of KubeCTL

  ```bash
  kubectl version --client
  ```

- Install [EKS Kubernetes CLI](https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-eksctl.html) with chocolatey

  ```bash
  chocolatey install -y eksctl
  ```

- Upgrade EKS Kubernetes CLI

  ```bash
  chocolatey upgrade -y eksctl
  ```

- Validate successful installation of EKSCTL

  ```bash
  eksctl version
  ```

#### Create EKS Cluster

- Create a cluster for your application with KubeCTL and EKSCTL

  ```bash
  eksctl create cluster --name=Cluster --version=1.27 --nodes=1 --node-type=t3.medium
  ```

- Validate successful EKS cluster creation with KubeCTL

  ```bash
  kubectl get nodes
  ```

#### Add EKS Cluster Node Groups

- Create a cluster for your application with KubeCTL and EKSCTL

  ```bash
  eksctl create nodegroup --cluster=Cluster --region=<REGION> --name=Nodegroup --node-ami-family=AmazonLinux2 --node-type=t3.medium --nodes=1 --nodes-min=1 --nodes-max=3
  ```

- Validate successful EKS cluster node group creation with KubeCTL

  ```bash
  kubectl get nodes
  ```

#### Request AWS Certificate Manager (ACM) - Certificate

- Access AWS Certificate Manager (ACM) in AWS Console
- Request a public certificate for the domain the application will use
- Add the domain and the certificate's arn to the `ingress.yaml` file

#### Configure EKS Cluster

- Change to kubernetes folder within the backend folder `cd backend/kubernetes`

- Update and apply namespace file with KubeCTL

  ```bash
  kubectl apply -f namespace.yaml
  ```

- Validate successful EKS cluster namespace creation with KubeCTL

  ```bash
  kubectl get namespaces --show-labels
  ```

- Update and apply deployment file with KubeCTL

  ```bash
  kubectl apply -f deployment.yaml
  ```

- Validate successful EKS cluster deployment creation with KubeCTL

  ```bash
  kubectl get deployments --show-labels --namespace=backend-namespace
  ```

- Update and apply service file/s with KubeCTL

  ```bash
  kubectl apply -f service.yaml
  kubectl apply -f service-secure.yaml
  ```

- Validate successful EKS cluster service creation with KubeCTL

  ```bash
  kubectl get services --show-labels --namespace=backend-namespace
  ```

- Update and apply ingress file/s with KubeCTL

  ```bash
  kubectl apply -f ingress.yaml
  kubectl apply -f ingress-secure.yaml
  ```

- Validate successful EKS cluster ingress creation with KubeCTL

  ```bash
  kubectl get ingress --show-labels --namespace=backend-namespace
  ```

#### Deploy/Restart EKS Cluster Images

- Rollout restart deployment with KubeCTL to pull new image

  ```bash
  kubectl rollout restart deployment/backend-deployment --namespace=backend-namespace
  ```

- Validate successful EKS cluster deployment pod restarts with KubeCTL

  ```bash
  kubectl get pods --namespace=backend-namespace
  ```

#### Add AWS Load Balancer Controller (add-on)

- Get AWS Region IAM Policy JSON

  ```bash
  curl -O https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.7/docs/install/iam_policy.json
  ```

- Create AWS Load Balancer Controller IAM Policy

  ```bash
  aws iam create-policy --policy-name AWSLoadBalancerControllerIAMPolicy --policy-document file://iam_policy.json
  ```

- Create AWS EKS OIDC Provider

  ```bash
  eksctl utils associate-iam-oidc-provider --region=<REGION> --cluster=Cluster --approve
  ```

- Create AWS Load Balancer Controller IAM Role

  ```bash
  eksctl create iamserviceaccount --cluster=Cluster --namespace=kube-system --name=aws-load-balancer-controller --role-name AmazonEKSLoadBalancerControllerRole --attach-policy-arn=arn:aws:iam::<ACCOUNT_ID>:policy/AWSLoadBalancerControllerIAMPolicy --approve
  ```

- ADD AWS Load Balancer Controller Helm Repository

  ```bash
  helm repo add eks https://aws.github.io/eks-charts
  ```

- Update AWS Load Balancer Controller Helm Repository

  ```bash
  helm repo update eks
  ```

- Install AWS Load Balancer Controller with Helm

  ```bash
  helm install aws-load-balancer-controller eks/aws-load-balancer-controller -n kube-system --set clusterName=Cluster --set serviceAccount.create=false --set serviceAccount.name=aws-load-balancer-controller
  ```

- Validate successful AWS Load Balancer Controller deployment with KubeCTL

  ```bash
  kubectl get deployment -n kube-system aws-load-balancer-controller
  ```

## Acknowledgements

## License

© 2023 Spring React TypeScript REST released via [MIT](https://opensource.org/licenses/MIT) license. Information on this license can be viewed as it applies to this repository on GitHub at [Spring React TypeScript REST License](https://github.com/heyitsjoealongi/spring-react-typescript-rest/blob/master/LICENSE).
