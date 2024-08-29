import { notFound } from "next/navigation";
import React from "react";
import { MovieContainer } from "@/containers/movie";
import Movies from "@/mocks/movies.json";

// import { fetchSingleMovie } from "@/services/movie";

async function MoviePage({ params, searchParams }) {
  console.log(params);
  // const movieDetail = await fetchSingleMovie(params.id);

  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
