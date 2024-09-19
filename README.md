# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install` 

- Run the application 

  `ng serve`


  - generate template file 

  `ng geenerate component Home --standalon-e --inline-template`

  - Data creation 

  `ng generate interface housingLocation`

  - Creating a service 

  `ng g s housing`

  1. Learned how to create a service
  2. Learned how to use dependency injection in components
  3. Completed details page
  
- To make http requests 

`npm install -g json-server`

- to start the server 
`json-server --watch db.json`

- last recape 

1. fetch to make an HTTP request to a live endpoint using json-server
2. refrectored the housing service to use promises and sync code
3. added filtering capabilities to our app with template variables and typescript 