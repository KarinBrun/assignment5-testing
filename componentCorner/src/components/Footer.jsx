import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-store">{props.store}</h3>

        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 {props.store}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;