import { Link } from "react-router-dom";

export const MovieCard = ({ title, year, coverSrc, id }) => {
  return (
    <Link to={`/movie?id=${id}`} className="movie-card">
      <div className="movie-card-cover">
        <img
          src={
            coverSrc === "" ? "./assets/images/movie-placeholder.jpg" : coverSrc
          }
          className="movie-card-cover__img"
          loading="lazy"
          alt={title}
        />
        <div className="movie-card-cover__tags">
          <div className="tag tag-text">115 мин</div>
          <div className="tag tag-text">{year}</div>
        </div>
      </div>
      <div className="body-3-text text-nowrap">{title}</div>
    </Link>
  );
};
