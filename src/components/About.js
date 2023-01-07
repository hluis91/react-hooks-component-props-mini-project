import React from "react";

function About({
    image = "https://via.placeholder.com/215", 
    about }) {
    // console.log("=>", props.blogData.about)
    return (
        <aside>
            <img src={image}  alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;