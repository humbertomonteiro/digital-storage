import "./section.css";
import { Link } from "react-router-dom";
const Section = ({ title, titleAlign = "start", link, children }) => {
  // titleAlign recebe start por padrão. caso queiro o
  // title centralizado passar o atributo titleAlign='center'
  return (
    <section className="container-section">
      <div className="title-section" data-title-align={titleAlign}>
        <h2>{title}</h2>
        {link && <Link to={link.href}>{link.text}</Link>}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
