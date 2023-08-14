import { Children } from "react";

export const List = ({ children, title, variant = "column" }) => {
  if (Children.count(children) === 0) {
    return null;
  }

  return (
    <section className="list">
      <h3 className="h3-text list__title">{title}</h3>
      <div className="divider"></div>
      <ul className={variant === "column " ? "list-column" : "list-grid"}>
        {Children.map(children, (child) => {
          return <li>{child}</li>;
        })}
      </ul>
    </section>
  );
};
