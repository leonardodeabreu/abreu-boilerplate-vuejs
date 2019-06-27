# Abreu Boilerplate Vuejs

I bring you a different kind of vuejs architecture. This is a good structure for large projects. 

## Summary

- Project Requirements
- Getting Started
  - Project Cloning & Build
  - Environment Set Up

## Project Requirements

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/gettingstarted)
- [Git](https://git-scm.com/downloads)
- [Node(10.16.0)](https://nodejs.org/en/)

## Getting Started
### 1. Project Cloning & Build
  **1.1.** Clone the repository:

  ```
   # git clone https://github.com/leonardodeabreu/abreu-boilerplate-vuejs.git
   # git checkout master
  ```

  **1.2.** Build & Run the project using Docker Container:

  ```
   # cd .docker
   # docker-compose up --build
  ```

### 2. Environment Set Up
  **2.1.** Create your local environment settings file:

  ```
   # cd ../src
   # cp .env.example .env
   # yarn install
  ```

### 3. Compiles and hot-reloads for development
```
yarn run serve
```

### 4. Compiles and minifies for production
```
yarn run build
```

### 5. Run your tests
```
yarn run test
```

### Contact
Feel free to contact me [Linkedin](https://www.linkedin.com/in/leonardo-abreu-7b5791102/).
