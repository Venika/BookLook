import React from 'react';
import image from './books.svg';
import Header from './Header';
import Footer from './Footer';
const Start = () => {
    return(
        <div className="startBg">
            <Header />
            
           <div className="welcome">
           <img src={image}/>
                <div><div className="mainHeading"><h1>Welcome to BookLook!</h1></div>
                
                <h2>An app that helps you Look for your Book <i className="fas fa-heart"></i></h2>
                <h3>Searching for a book has never been easier. If you can't remember the title of your book, just enter the author's name or even the publisher's and hit search. <br/>
                This application is built using <a className="bold" href="https://reactjs.org/">ReactJS</a>, <a className="bold" href="https://developers.google.com/books">Google Books API</a> and <a className="bold" href="https://www.heroku.com/">Heroku</a>.
                </h3>
                <a href="/Search"><button className="searchBtn">Look Now <i className="fas fa-search fa-sm"></i></button></a></div>
                
            </div>
            <Footer />
        </div>
    )

    }

export default Start;