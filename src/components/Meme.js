import memesData from "../memesData"
import React from "react"

function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage () {
        const memesArray = memesData.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);

        setMemeImage(function (prevMemeImage)
            {return prevMemeImage = memesArray[randomNumber].url})
    }

    return(
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                />
                <button
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image
                </button>
            </div>
            <img src={memeImage} className="Meme--meme" alt="meme"/>
        </main>
    )}
/**/
export default Meme;