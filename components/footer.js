class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e293b;
          color: white;
          padding: 3rem 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #e2e8f0;
        }
        .footer-section p, .footer-section a {
          color: #94a3b8;
          margin-bottom: 0.75rem;
          display: block;
        }
        .footer-section a:hover {
          color: #3b82f6;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }
        .social-links a:hover {
          background: #3b82f6;
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #334155;
          color: #94a3b8;
        }
      </style>
      <footer>
        <div class="container">
          <div class="footer-section">
            <h3>關於 TransClass</h3>
            <p>元智大學資管系畢業專題開發的多語言即時課堂翻譯系統，旨在幫助國際學生克服語言障礙。</p>
          </div>
          <div class="footer-section">
            <h3>快速連結</h3>
            <a href="/">首頁</a>
            <a href="#features">系統特色</a>
            <a href="#demo">示範影片</a>
            <a href="https://github.com/your-repo" target="_blank">GitHub</a>
          </div>
          <div class="footer-section">
            <h3>聯絡我們</h3>
            <p>元智大學資訊管理學系</p>
            <p>桃園市中壢區遠東路135號</p>
            <p>Email: transclass@yzu.edu.tw</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>© 2025 TransClass 智慧課堂翻譯系統. 版權所有.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);