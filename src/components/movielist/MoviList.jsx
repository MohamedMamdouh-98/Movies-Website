import React from "react";
import CardMovie from "../cardMovie/CardMovie";
import { Row } from "react-bootstrap";
import Pagination from "../Pagination";
import './movielist.css'

const MovieList = ({ movies, getPage, countPage }) => {
  return (
    <>
      <Row className="mt-2 mov">
        {movies ? (
          movies.map((mov) => {
            return <CardMovie key={mov.id} mov={mov} />;
          })
        ) : (
          <h1>لا يوجد افلام</h1>
        )}
        <Pagination getPage={getPage} countPage={countPage} />
      </Row>
    </>
  );
};

export default MovieList;
