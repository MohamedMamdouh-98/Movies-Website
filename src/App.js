import './App.css'
import { Container } from "react-bootstrap";
import MovieList from "./components/movielist/MoviList";
import AppBar from "./components/navbar/AppBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviItem from "./components/movItem/MoviItem";

function App() {
  const [movies, setMovies] = useState();
  const [countPage, setCountPage] = useState(0);
  // get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4a9342afc5b2e7ad55435e2401571da2&language=en"
    );
    setMovies(res.data.results);
    setCountPage(res.data.total_pages);
  };

  // get page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4a9342afc5b2e7ad55435e2401571da2&language=en&page=${page}`
    );
    setMovies(res.data.results);
    setCountPage(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
  }, []);
  // to search in api
  const searchMovies = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4a9342afc5b2e7ad55435e2401571da2&query=${word}&language=en`
      );
      setMovies(res.data.results);
      setCountPage(res.data.total_pages);
    }
  };
  return (
    <div>
      <Container>
        <AppBar searchMovies={searchMovies} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  getPage={getPage}
                  countPage={countPage}
                />
              }
            />
            <Route path="/MoviItem/:id" element={<MoviItem />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
