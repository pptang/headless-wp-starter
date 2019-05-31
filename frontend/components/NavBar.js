const NavBar = () => (
  <header>
    <a id="logo-link" href="">
      <figure>
        <img className="logo" src="img/logo.svg" alt="logo" />
      </figure>
    </a>
    <nav>
      <a href="">首頁</a>
      <a href="">服務內容</a>
      <a href="">過去實績</a>
      <a href="">團隊成員</a>
      <a href="">日本內幕</a>
      <a href="">聯絡我們</a>
    </nav>
    <style jsx>{`
      header {
        background-color: rgba(255, 255, 255, 0.7);
        box-sizing: border-box;
        display: flex;
        font-size: 1.6rem;
        height: 100px;
        padding: 40px 30px 6px;
        position: fixed;
        width: 100%;
        z-index: 99;
      }
      .logo {
        height: 40px;
        object-fit: contain;
        width: 100%;
      }
    `}
    </style>
  </header>
);

export default NavBar;