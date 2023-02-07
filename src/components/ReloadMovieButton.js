import "./ReloadMovieButton.css";

const ReloadMovieButton = (props) => {
  return (
    <button className="reload-movies-button" onClick={props.reloadMovies}>
      Načítať všetky filmy
    </button>
  );
};

export default ReloadMovieButton;
