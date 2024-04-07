import React, { Component } from 'react';
import './App.css';

const CurrentWord = ({currentWord, usedletters}) => {
    // console.log(alphabet)
    return (
        <div>
            {
                currentWord.split("").map(
                    (letter, key) => {
                        let status = "finded"
                        if (usedletters.indexOf(letter) == -1){
                            status = "notfinded"
                        }
                        return <span key={"letter_"+key} className={status}>
                            {status == "finded" ? letter : "_"}
                        </span>
                    }
                )
            }
        </div>
    )
}

export default CurrentWord;