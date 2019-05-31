import { secondaryTextColor, titleColor } from './constants';

// TODO: Add type for Post
const Article = ({ post: { title, content, date, author } }) => (
  <article>
    <div className="articleInfo">
      <h1 className="title">{title.rendered}</h1>
      <span className="date">Posted on {date}</span>
      <span className="author">
        {/* TODO: fix author mapping */}
        Posted by {author}
      </span>
    </div>
    <p
      className="content"
      dangerouslySetInnerHTML={{ __html: content.rendered }}
    />
    <style jsx>{`
        .block {
          display: flex;
          justify-content: space-around;
        }
        .title {
          color: ${titleColor};
          font-size: 24px;
          text-align: center;
        }
        article {
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 70%;
        }
        .articleInfo {
          font-size: 14px;
          margin-bottom: 30px;
        }
        .date {
          color: ${secondaryTextColor};
        }
        .author {
          margin-left: 20px;
        }
        .coverImage {
          height: auto;
          margin: 0 auto;
          max-width: 80%;
        }
      `}
    </style>
  </article>
);
export default Article;
