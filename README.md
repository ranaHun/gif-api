# Gif Images Api
# About The Project
- Provide Gif images
# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.17.0

# Getting started
- Clone the repository
```
git clone  <git hub template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```

- API Document endpoints

  Gif Endpoint : http://localhost:3000/gifs 

## Project Structure
The folder structure of this app is explained below:

| Name         | Description                                                                                      |
|--------------|--------------------------------------------------------------------------------------------------|
| **node_modules** | Contains all  npm dependencies                                                                   |
| **config**   | Application configuration including Gifs provider configs                                        
| **controllers** | Controllers define functions to serve various express routes.                                    
| **helpers**  | Common libraries to be used across your app.                                                     
| **routes**   | Contain all express routes, separated by module/area of application                              
| **models**   | Models define schemas that will be used in storing and retrieving data from Application          |
| **services** | Contain all business logic for the Application                                                           |
| app.js       | Entry point to express app                                                                       |
| package.json | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped) | tsconfig.json            | Config settings for compiling source code only written in TypeScript    

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description                                                                   |
| ------------------------- |-------------------------------------------------------------------------------|
| `start`                   | Runs full build and runs node on dist/app.js. Can be invoked with `npm start` |
| `test`                    | Runs build and run tests using mocha                                          |

## APIs

| Name         | HTTP Method    | Description                                                                     |
|--------------|----------------|---------------------------------------------------------------------------------|
| /gifs        | GET            | Get all Gif images                                                              |

- Properties for request:
  * Search (optional)
    * search_key
  * Pagination
    * page: current page (using default value for page = 1)
    * size: number of items in each page (using default value for size = 10)

- Structure of the response (server-side pagination) for the HTTP GET request:
```json
  {
  "totalItems": 2833,
  "totalPages": 1417,
  "currentPage": 1,
  "data": [
    {
      "type": "gif",
      "id": "x0puvxIPEJoR7N1HaF",
      "url": "https://media4.giphy.com/media/x0puvxIPEJoR7N1HaF/giphy.gif?cid=29f62140bzt171w2ldmahvrp68sl0uoh4fzikob7s7iomdk0&rid=giphy.gif&ct=g"
    },
    {
      "type": "gif",
      "id": "smMsPyclfuViqWouFR",
      "url": "https://media2.giphy.com/media/smMsPyclfuViqWouFR/giphy.gif?cid=29f62140bzt171w2ldmahvrp68sl0uoh4fzikob7s7iomdk0&rid=giphy.gif&ct=g"
    },
    ...
  ]
}
```