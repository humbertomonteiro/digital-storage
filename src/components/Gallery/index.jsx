import React from "react";
import "./gallery.css";
import imgGallery1 from "../../assets/imgs/home-slide-1.png";
import Section from "../Section";

const Gallery = () => {

    return(
        <Section>
            <div>
                <article>
                    <h6>Melhores ofertas personalizadas</h6>
                    <h1>Queima de stoque Nike &#128293;</h1>
                    <p>Quos reiciendis voluptate similique facere. Repellat accusamus quos dolor cum officia consequuntur.</p>
                    <buttom>Ver Ofertas</buttom>
                </article>
                <div>
                    <img src={imgGallery1}/>
                </div>
                

            </div>
        </Section>
    );
}

export default Gallery;