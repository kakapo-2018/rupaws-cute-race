## RuPaw's Cute Race
If don't find yourself cute, how the hell are you gonna find anyone else cute?

## Install

```
yarn
yarn knex migrate:latest
yarn knex seed:run
yarn dev
```

## Getting Started
  There are a few example files, like a words.js reducer and a Words database table migration and seeds. These are all for reference only!

  Front-end: you will need to clear the words.js reducer.
  Back-end: you will need to delete the Words migration and seed, and replace with a new, more relevant one. Routes and database functions will also change.
  
## User Stories

### MVP

    * I want to be able to see the leader board.
    * I want to be ablet to register/login/logout.

### Stretch

    * I want to be able to see the leader board.
    * I want to be ablet to register/login/logout.

## React (Client Side)
  | name | purpose |
  | --- | --- |
  | Header | Title and Navbar |
  | Footer | Names of the team |
  | Categories | View for user to select different types of animals |
  | Voting |View for user to vote their favorite image |
  | LeaderBoard | View for user to see the ranking  |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | Navigate | Switch pages |
  | CurrentPage | Display current animal page |
  | Animals | Store the array of animals (from db) |
  | TOP-10 | Store an array of the top 10 animals |
  
  
   ## Actions

 | type | data | purpose |
 | --- | --- | --- |
 | CHANGE_PAGE| page | Switch pages|
 | REQ_ANIMALS | animals | Change animal |
 | RECEIVE_ANIMAL | animals | Retreive the selected animal images from the server |
 | UPDATE_RANK | rank |Update the ranking |
 
 ## API (Client - Server)
 
 ## DB (Server Side)
 1 table for all the animals
(id, species, image and vote)
 
## API docs: Request and response formats
(see api-docs.md)

## Team Roles

* Back End: Matt & Yuzuki
* Front End: Winston & Zane
* API: Bella
