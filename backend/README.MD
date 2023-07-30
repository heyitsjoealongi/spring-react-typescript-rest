# Backend Log - Spring React Typescript REST

## Spring Application Properties (Local)

```bash
server.port=9000
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/new_schema
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql:true
```

## Spring Application Properties (Cloud)

```bash
server.port=9000
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc-secretsmanager:mysql://<DB_ENDPOINT>:<DB_PORT>/<DB_NAME>
spring.datasource.username=rds/credentials
spring.datasource.driver-class-name=com.amazonaws.secretsmanager.sql.AWSSecretsManagerMySQLDriver
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.show-sql: true
```

## Add AWS Secret Manager (Credentials Secret)

- Credentials File (.JSON)

```bash
{
  "engine": "mysql",
  "host": "",
  "username": "",
  "password": "",
  "dbname": "",
  "port": ""
}
```

- AWS CLI Command (Secrets Manager)

```bash
aws secretsmanager create-secret --name rds/credentials --secret-string file://credentials.json
```

## Add AWS Secret Manager (Generic Secret)

- AWS CLI Command (Secrets Manager)

```bash
aws secretsmanager create-secret --name generic/secret/ --secret-string "{\"generic-one-key\":\"generic-two-value\",\"generic-two-key\":\"generic-two-value\"}"
```
