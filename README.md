# SAGA Movie Database

## Description

SAGA Movie Database is an app that displays a list of movies.  The movies can be clicked on and the user will be taken to a details page, with a description, movie poster, the genres the movie falls into and title.  There is an add movie button on the header than can be clicked to add a movie to the database.

For the previous two projects I've used Material-UI to style the page.  For this project I decided to rely solely on my vanilla css skills.  The movie list page is styled in an overlapping cards carousel.  Hover over the cards will reveal more of the card and show the title of the movie layed over the image of the poster.  The add movie page selects a random background image from a movie.  I am happy with the way the app looks, but I would definitely like to tweak a couple things.

Originally when visiting the details of a selected movie if the user were to press the refresh button on their browser the page would re-render with none of the information.  I used localStorage and the useEffect hook to get past this.

In the future I am planning on adding more functionality to the app -- search (which I started and came close to finishing), deleting genre and movies, editing, etc.

## Installation

To get the app up and running on your machine follow these steps.

1. Clone repo onto your machine with the `git clone https://github.com/jappelgren/movie-sagas.git` command.
2. Create a database named `saga_movies_weekend`.
3. Use the database schema provided in `data.sql`.
4. Run `npm install` to install all necessary dependencies.
5. `npm run server` to start the server.
6. `npm run client` to start the client.
7. In your browser go to [localhost:3000](http://localhost:3000/).

## Usage

Go to localhost:3000.  The user will see a carousel of movies.  Clicking on a movie poster will bring the user to a detailed view of that movie.  The user can click on the back button (or logo) to go back to the list.  Clicking on the add a movie button will bring the user to a form where they can enter the details of a movie and select multiple genres.

## Built With

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [PG](https://node-postgres.com/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [React-Router](https://reactrouter.com/)
