# Description

The app for Proyectos Beta (proyectosbeta.net)

# Tecnologies

- React 18.2.0
- React native 0.69.5
- NodeJS v14.20.0
- NPM 8.16.0
- OpenJDK 17.0.4
- Gradle 7.3.3
- Emulator Android Pixel_XL_API_29(AVD)
- Docker 20.10.17
- Sonarqube 9.5.XX

# Development

One terminal:

```bash
npm install --legacy-peer-deps
npx react-native start --reset-cache
```

Another terminal:

```bash
cd android && ./gradlew clean && cd ../
npx react-native run-android
```

# Developer debug

```bash
cd android && ./gradlew assembleRelease && cd ../
```

# Production

At the root of the project.

```bash
npx react-native run-android --variant=release
```

## APK path

The apk is in android/app/build/outputs/apk/release/

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