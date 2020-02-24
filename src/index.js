import React from "react";
import {
    render
} from "react-dom";
import images from "./data";



const Img = props => ( <
    div className = {
        `image img-${props.id}`
    } >
    <
    img src = {
        props.src
    }
    title = {
        props.title
    }
    alt = {
        props.alt
    }
    />  <
    /div >
);

const ImageList = ({
    images,
    version
}) => ( <
    React.Fragment > {
        images.map((image, i) => ( <
            Img src = {
                image.src
            }
            title = {
                image.title
            }
            alt = {
                image.alt
            }
            id = {
                i
            }
            />
        ))
    } <
    /React.Fragment>
);

render( < ImageList images = {
            images
        }
        />, document.getElementById("root"));
