import "./footer.css";
import imgFacebook from "../../assets/facebook.svg";
import imgInstagram from "../../assets/instagram.svg";
import imgTwitter from "../../assets/twitter.svg";
import Logo from "../../components/Logo";
import React from "react";

const Footer = () => {
    const titles = ["Informações", "Categorias", "Contato"];
    const informations = {
                            informacoes:["Sobre Drip Store","Segurança","Wishlist","Blog","Trabalhe conosco","Meus Pedidos"],
                            categorias:["Camisas","Calças","Bonés","Headphones","Tênis"],
                            contato:["Av. Santos Drumont, 1510- 1 andar - Aldeota, Fortaleza - CE, 60.150-181", "(85) 3051-3411"]};
                
    return (
        <footer>
            <div className="conteiner">
                <div>
                    <Logo name="footer" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste mollitia animi veritatis, qui voluptas placeat ducimus optio harum deleniti vel temporibus id maxime! Nulla, doloribus ab! Rem, at perspiciatis?
                    </p>
                    <ul>
                        <li><a href="https://www.facebook.com/ielceara" target="_blank"><img src={imgFacebook} alt={"Facebook"} /></a></li>
                        <li><a href="https://www.instagram.com/ielceara/" target="_blank"><img src={imgInstagram} alt={"Instagram"} /></a></li>
                        <li><a href="https://twitter.com/falecomoiel" target="_blank"><img src={imgTwitter} alt={"X"} /></a></li>
                    </ul>
                </div>
                <div>
                    
                </div>
                <div></div>
                <div></div>
            </div>    
            <hr />
            <p>@ 2024 Digital Store</p>
        </footer>
    );
};

export default Footer;