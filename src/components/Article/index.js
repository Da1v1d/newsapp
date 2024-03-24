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
        <img width={60} src={img} alt="news_img" />
        <p>
          {article[fields.content]
            ? article[fields.content]
            : "No provided content"}
        </p>
      </a>
    </article>
  );
};
