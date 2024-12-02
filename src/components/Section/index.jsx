import React from "react";

const Section = ({props}) => {

    return(
        <div>
            <h4 style={props.titleAlign}>{props.href}</h4>
            <a href={props.link.text}>{props.text}</a>
            {props.children}
        </div>
    );
};

export default Section;