import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Filter from "./components/Filter/Filter";
import Movies from "./components/Movies";
import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./components/details";

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const [rating, setRating] = useState(10);
  const addMovie = (newMovie) => {
    Movies.push(newMovie);
  };

  /*  {
    Title: "stranger things",
    Released: "20 Jan 2015",
    imdbRating: 9.0,
    Plot:"Hawkins, Indiana, 1983. A young boy, Will Byers, goes missing near a top-secret government laboratory.
     That same night, a strange young girl appears at a diner in the town. She has telekinetic powers and is on the run from the laboratory."
    Images:
      "https://static01.nyt.com/images/2019/07/08/arts/08sstrangerthings/80a98d5238ba4f0aa59ba7bff5787528-superJumbo.jpg",
  } */

  return (
    <Fragment>
      <div className="App">
        <Filter
          setSearchMovie={setSearchMovie}
          rating={rating}
          setRating={setRating}
          addMovie={addMovie}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ padding: 35 }}>
                <MovieList
                  movies={Movies.filter(
                    (el) =>
                      el.Title.toLowerCase().includes(
                        searchMovie.toLowerCase().trim()
                      ) && Math.ceil(el.imdbRating) === rating
                  )}
                />
              </div>
            }
          />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
