class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #3b82f6;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: #4b5563;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #3b82f6;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="container">
          <a href="/" class="logo">
            <i class="fas fa-language"></i>
            TransClass
          </a>
          <div class="nav-links">
            <a href="/">首頁</a>
            <a href="#features">系統特色</a>
            <a href="#demo">示範影片</a>
            <a href="https://github.com/your-repo" target="_blank">GitHub</a>
          </div>
          <button class="mobile-menu-btn">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);