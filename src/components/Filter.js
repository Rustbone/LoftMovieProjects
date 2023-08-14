export const Filter = ({ activeFilter, onFilterClick }) => {
  const activeFilterClass = "filter-list__item--active";

  const filters = [
    { value: "all", label: "Все" },
    { value: "actors", label: "Актеры" },
    { value: "movies", label: "Фильмы" }
  ];

  return (
    <section className="favourites-filter">
      <h1 className="h1-text">Избранное</h1>
      <ul className="filter-list">
        {filters.map((filter) => {
          return (
            <li>
              <button
                onClick={() => onFilterClick(filter.value)}
                className={`filter-list__item body-3-text $={activeFilter === filter.value ? activeFilterClass : ""}`}
              >
                {filter.label}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
