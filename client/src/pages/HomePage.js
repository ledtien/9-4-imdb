import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { movieActions } from "../redux/actions";

function HomePage() {
  // const [movies, setMovies] = useState([]);
  const { movies } = useSelector((s) => s.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getAll());
  }, [dispatch]);

  return (
    <div>
      <h1>IMDB Home Page!</h1>
    </div>
  );
}

export { HomePage };
