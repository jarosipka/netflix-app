import "./MovieDeleteButton.css";

const MovieDeleteButton = (props) => {
  return (
    <button className="movie-delete-button" onClick={props.deleteMovie}>
      Vymazať film
    </button>
  );
};

export default MovieDeleteButton;
