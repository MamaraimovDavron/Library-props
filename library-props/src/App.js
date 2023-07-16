import React from "react";
import Card from "./Card";
import books from './books';

const App = () => {
    return(
        <div className="main-box">
            <h1>Best Books of All time!</h1>
                <Card 
                    name={books[0].name}
                    imgUrl={books[0].imgUrl}
                    author={books[0].author}
                    genre={books[0].genre}
                    number={books[0].number}
                    date={books[0].date}
                />

            <Card 
                    name={books[1].name}
                    imgUrl={books[1].imgUrl}
                    author={books[1].author}
                    genre={books[1].genre}
                    number={books[1].number}
                    date={books[1].date}
                />

            <Card 
                    name={books[2].name}
                    imgUrl={books[2].imgUrl}
                    author={books[2].author}
                    genre={books[2].genre}
                    number={books[2].number}
                    date={books[2].date}
                />

            <Card 
                    name={books[3].name}
                    imgUrl={books[3].imgUrl}
                    author={books[3].author}
                    genre={books[3].genre}
                    number={books[3].number}
                    date={books[3].date}
                />
        </div>
    );
}

export default App;