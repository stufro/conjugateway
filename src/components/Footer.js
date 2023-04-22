import "./css/Footer.scss"

function Footer() {
  return (
    <div className="footer-container">
      <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="footer-notes">
        <small>By <a href="https://www.stufro.com" target="_blank" rel="noreferrer">Stuart Frost</a></small>
        <small>&nbsp;|&nbsp;</small>
        <small><a href="https://github.com/stufro/conjugateway" target="_blank" rel="noreferrer">Code</a></small>
        <small>&nbsp;|&nbsp;</small>
        <small>Data: <a href="https://www.ghidinelli.com/free-spanish-conjugated-verb-database" target="_blank" rel="noreferrer">Fred Jehle</a></small>
      </div>
    </div>
  )

}

export default Footer