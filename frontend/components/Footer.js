import { backgroundColor } from './constants';

const Footer = () => (
  <footer>
    <figure>
      <img className="media" src="/static/images/logo.svg" alt="logo" />
    </figure>
    <style jsx>
      {`
        footer {
          display: flex;
          justify-content: center;
          background-color: ${backgroundColor};
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .media {
          height: 50px;
          width: 100%;
        }
      `}
    </style>
  </footer>
);

export default Footer;
