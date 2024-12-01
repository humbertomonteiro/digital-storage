import "./footer.css";
import imgFacebook from "../../assets/facebook.svg";
import imgInstagram from "../../assets/instagram.svg";
import imgTwitter from "../../assets/twitter.svg";
import Logo from "../../components/Logo";
import React from "react";

const titles = [{"text":"Informações"}, {"text":"Categorias"}];
const informacoes = [{"text":"Sobre Drip Store","link":"/about"},{"text":"Segurança","link":"/security"},{"text":"Wishlist","link":"/WL"},{"text":"Blog","link":"/blog"},{"text":"Trabalhe conosco","link":"/trabalheConosco"},{"text":"Meus Pedidos","link":"/pedidos"}];
const myInf = informacoes.map(informacao => <li key={informacao.text}><a href={informacao.link}>{informacao.text}</a></li>);

const categorias = [{"text":"Camisas","link":"/camisas"},{"text":"Calças","link":"/calcas"},{"text":"Bonés","link":"/bones"},{"text":"Headphones","link":"/headphones"},{"text":"Tênis","link":"/tenis"}];
const myCat = categorias.map(categoria => <li key={categoria.text}><a href={categoria.link}>{categoria.text}</a></li>);

export const Infor = () => {

    return(
        <>
            {titles.map((title,index) =>
                <div className="info" key={title.text}>
                    <h3 key={index}>{title.text}</h3>
                    <ul>
                        {index == 0 && myInf}
                        {index == 1 && myCat}
                    </ul>
                </div>
            )}
        </>
    );

    
};    

const Footer = () => {
                       
                        return(

        <footer>
            <div className="conteiner">
                <div className="logo">
                    <Logo name="footer" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste mollitia animi veritatis, qui voluptas placeat ducimus optio.
                    </p>
                    <ul>
                        <li><a href="https://www.facebook.com/ielceara" target="_blank"><img src={imgFacebook} alt={"Facebook"} /></a></li>
                        <li><a href="https://www.instagram.com/ielceara/" target="_blank"><img src={imgInstagram} alt={"Instagram"} /></a></li>
                        <li><a href="https://twitter.com/falecomoiel" target="_blank"><img src={imgTwitter} alt={"X"} /></a></li>
                    </ul>
                </div>
                <div className="list">
                    <Infor />
                </div>    
                <div>
                    <h3>Contato</h3>
                    <ul>
                        <li>Av. Santos Drumont, 1510- 1 andar - Aldeota, Fortaleza - CE, 60.150-181</li>
                        <li>(85) 3051-3411</li>
                    </ul>

                </div>
            </div>    
            <hr />
            <p>@ 2024 Digital Store</p>
        </footer>
    );
};

export default Footer;