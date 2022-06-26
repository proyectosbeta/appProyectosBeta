# Description

The app for Proyectos Beta (proyectosbeta.net)

# Tecnologies

-   React 17.0.XX
-   React native 0.68.XX
-   NodeJS v14.19.XX
-   NPM 8.13.XX
-   OpenJDK 17.0.XX
-   Gradle 7.3.XX
-   Emulator Android Pixel_XL_API_29(AVD)
-   Docker 20.10.17
-   Sonarqube 9.5.XX

# Development

## Run

```bash
npm install
npx react-native start
```

## Compile and run

```bash
npx react-native run-android
```

## Quality code 

### Sonarqube

-   [Site](https://www.sonarqube.org/)

#### Install

##### With docker

```bash
docker pull sonarqube
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
```

##### Web access

```
http://localhost:9000
```

###### Credentials

-   User: admin
-   Password: admin

#### Use with docker

```bash
docker pull newtmitch/sonar-scanner

```

##### GNU-Linux/MacOS

Execute

```bash
docker run -ti -v /home/proyectosbeta/repositoriosGit/appProyectosBeta:/usr/src --link sonarqube newtmitch/sonar-scanner
```

##### Microsoft Windows

Execute

```bash
docker run -ti -v C:\Users\proyectosbeta\repositoriosGit\appProyectosBeta:/usr/src --link sonarqube newtmitch/sonar-scanner
```