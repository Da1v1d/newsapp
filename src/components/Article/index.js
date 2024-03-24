import "./style.css";

export const Article = ({ article, img, fields }) => {
  return (
    <article className="article">
      <a
        className="article"
        href={article[fields.url]}
        target="_blank"
        rel="noreferrer"
      >
        <img width={60} src={img} alt="no" />
        <p>{article[fields.content]}</p>
      </a>
    </article>
  );
};
