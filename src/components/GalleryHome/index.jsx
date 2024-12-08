import React, { useState,useEffect } from "react";
import "./galleryHome.css";
import imgGallery1 from "../../assets/imgs/galery-nike-01.jpg";
import imgGallery2 from "../../assets/imgs/galery-nike-02.jpg";
import imgGallery3 from "../../assets/imgs/galery-nike-03.jpg";
import imgGallery4 from "../../assets/imgs/galery-nike-04.jpg";
import imgGallery5 from "../../assets/imgs/galery-nike-05.jpg";
import bLeft from "../../assets/arrow-left.svg";
import bRight from "../../assets/arrow-right.svg";

const GalleryHome = () => {
    const imgGallery = [imgGallery1, imgGallery2, imgGallery3, imgGallery4, imgGallery5];
    
    let [countImg, setCountImg] = useState(0);
    if(countImg <= -1){countImg = 4}
    else if(countImg>= 5){countImg = 0}
    return(
            <div className={"promo"}>
                <div className="article">
                    <h6>Melhores ofertas personalizadas</h6>
                    <h1>Queima de stoque Nike &#128293;</h1>
                    <p>Quos reiciendis voluptate similique facere. Repellat accusamus quos dolor cum officia consequuntur.</p>
                    <div className="buttom">Ver Ofertas</div>
                </div>
                <div>
                
                    <img src={imgGallery[countImg]} style={{with:1440, height:681 }}/>
                </div>
                
                <div className={"arrows"}>
                            <img id="left" onClick={()=>setCountImg(countImg-1)} src={bLeft}/>
                            <img id="right" onClick={()=>setCountImg(countImg+1)} src={bRight}/>
                </div>
            </div>
    );
}

export default GalleryHome;