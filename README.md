# applicant Management System And Admin Panel, Spring Boot, Angular 7, MySQL, Hibernate, Liquibase

The application structure is as follows.
- **server-applicant-management** - Microservice implemented using Spring boot. [More info](server-applicant-management/README.md)
- **client-applicant-management** - A NodeJs application implemented using Angular 7. This consumes services hosted by server side.  [More info](client-applicant-management/README.md)

### Build

#### 1) Build Server Side
   
```
$ cd server-applicant-management
$ gradlew bootJar
$ gradlew bootRun
```

#### 2) Build and run client side

```
$ cd client-applicant-management
$ ng serve
```

### Access server side using following URL

```
http://localhost:8080
```

### Access application using following URL

```
http://localhost:4200
```

