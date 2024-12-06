import "./logo.css";
import imgHeader from "../../assets/logo-header.svg";
import imgFooter from "../../assets/logo-footer.svg";
import { Link } from "react-router-dom";
// se for rederizar a logo do cabeçalho utilize <Logo name="header" /> se for usar a logo do footer utilize <Logo name="footer" />
const Logo = (props) => {
  let url = "";
  props.name == "header" ? (url = imgHeader) : (url = imgFooter);

  return (
    <Link className="container-logo" to={"/"}>
      <img
        src={url}
        alt={"Logo Digital Store Cabeçalho"}
        // style={{ width: "253px", height: "44px" }}
        className="logo-img"
      />
    </Link>
  );
};
export default Logo;
