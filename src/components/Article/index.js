import "./style.css";

export const Article = ({ article, img, fields }) => {
  return (
    <a
      href={article[fields.url]}
      target="_blank"
      rel="noreferrer"
      className="article"
    >
      <img width={60} src={img} alt="no" />
      <p>{article[fields.content]}</p>
    </a>
  );
};
