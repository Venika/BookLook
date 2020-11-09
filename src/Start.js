import React from 'react';
import image from './books.svg';
import Header from './Header';
import Footer from './Footer';
const Start = () => {
    return(
        <div className="startBg">
            <Header />
           <div className="welcome">
                <div><h1>Welcome to BookLook!</h1>
                <h2>An app that helps you Look for your Book <i className="fas fa-heart"></i></h2>
                <h3>Searching for a book has never been easier. If you can't remember the title of your book, that's okay! Just enter the author's name or even the publisher's and hit search. </h3>
                <a href="/Search"><button className="searchBtn">Look Now <i className="fas fa-search fa-sm"></i></button></a></div>
                <img src={image}/>
            </div>
            <Footer />
        </div>
    )

    }

export default Start;