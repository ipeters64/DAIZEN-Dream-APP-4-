import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const About = () => {
    const { store, actions } = useContext(Context);

    return(
        <div classname="container about" class="bg-white">
            <h1 class="text-center">About Us</h1>
            <h2>Danny:</h2>
            <nbsp></nbsp>
            <nbsp></nbsp>
            <h2>Isaiah:</h2>
            <h3>Isaiah is an intellectual, articulate, up and coming Full Stack Software Developer who is always eager to learn more about Computer Science. My strengths in Technology are React, Javascript, FLASK, Python, HTML and CSS. I love sports such as Football and Basketball. Love to travel and meet new people as well! </h3>
        </div>
    )
}