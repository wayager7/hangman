import React, { Component } from 'react';
import './App.css';

class Keyboard extends Component {

    componentDidMount() {
        // Ajoute un écouteur pour détecter les pressions de touches
        window.addEventListener("keyup", (e) => {
            // Si la touche pressée est dans l'alphabet, déclenche l'action correspondante
            if (this.props.alphabet.indexOf(e.key) !== -1) {
                this.props.action(e.key);
            }
            console.log(e.key); // Affiche la touche pressée pour le débogage
        });
    }

    render() {
        return (
            <div id="keyboard">
                {
                    // Génère un bouton pour chaque lettre de l'alphabet
                    this.props.alphabet.map((letter, key) => (
                        <button 
                            key={"keyboard_" + key} // Clé unique pour chaque bouton
                            onClick={() => this.props.action(letter)} // Action au clic
                        >
                            {letter}
                        </button>
                    ))
                }
            </div>
        );
    }
}

export default Keyboard;
