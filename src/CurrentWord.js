import React from 'react';
import './App.css';

const CurrentWord = ({ currentWord, usedletters }) => {
    return (
        <div>
            {
                // Parcourt chaque lettre du mot actuel
                currentWord.split("").map((letter, key) => {
                    // Détermine si la lettre a été trouvée ou non
                    let status = "finded";
                    if (usedletters.indexOf(letter) === -1) {
                        status = "notfinded";
                    }

                    // Affiche la lettre si elle a été trouvée, sinon affiche un "_"
                    return (
                        <span key={"letter_" + key} className={status}>
                            {status === "finded" ? letter : "_"}
                        </span>
                    );
                })
            }
        </div>
    );
}

export default CurrentWord;