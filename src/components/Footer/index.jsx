import "./footer.css";
import imgFacebook from "../../assets/facebook.svg";
import imgInstagram from "../../assets/instagram.svg";
import imgTwitter from "../../assets/twitter.svg";
import Logo from "../../components/Logo";
import React from "react";

const titles = ["Informações", "Categorias", "Contato"];
const informacoes = ["Sobre Drip Store","Segurança","Wishlist","Blog","Trabalhe conosco","Meus Pedidos"];
const myInf = informacoes.map(informacao => <li key={informacao}>{informacao}</li>);

const categorias = ["Camisas","Calças","Bonés","Headphones","Tênis"];
const myCat = categorias.map(categoria => <li key={categoria}>{categoria}</li>);

const contatos = ["Av. Santos Drumont, 1510- 1 andar - Aldeota, Fortaleza - CE, 60.150-181", "(85) 3051-3411"];
const myCont = contatos.map(contato => <li key={contato}>{contato}</li>);

export const Infor = () => {

    return(
        <>
        {titles.map((title,index) =>
            <div className="info" key={title} >
                <h3>{title}</h3>
                <ul>
                   {index == 0 && myInf}
                   {index == 1 && myCat}
                   {index == 2 && myCont}
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
                <Infor />
            </div>    
            <hr />
            <p>@ 2024 Digital Store</p>
        </footer>
    );
};

export default Footer;