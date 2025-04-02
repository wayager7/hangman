import React, { Component } from 'react';
import './App.css';
import Keyboard from './keyboard';
import CurrentWord from './CurrentWord';
import frameImage from './Frame.png';
import framImage from './Fram.png';

class App extends Component {
  state = {
    wordscall: ["bonjour", "salut", "coucou", "hello", "hi", "hola", "ciao", "hallo", "ola", "nihao", "konichiwa", "namaste", "salaam", "sawubona", "jambo", "merhaba", "privet", "shalom", "desole", "voisin"],
    currentWord: null, // Mot à deviner
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(""), // Alphabet minuscules
    usedletters: [], // Lettres déjà utilisées
    win: 0, // 0: en cours, 1: gagné
    attempts: 9 // Nombre d'essais restants
  }

  componentDidMount() {
    // Ajoute un écouteur pour redémarrer le jeu avec la touche "Entrée"
    window.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.initGame();
      }
      console.log(e);
    });
    this.initGame(); // Initialise le jeu au chargement
  }

  clickLetter = (letter) => {
    console.log("=>" + letter);

    // Vérifie si la lettre n'a pas encore été utilisée
    if (this.state.usedletters.indexOf(letter) === -1) {
      let attempts = this.state.attempts;
      const usedletters = [letter, ...this.state.usedletters];

      // Si la lettre n'est pas dans le mot, décrémente les essais
      if (this.state.currentWord.indexOf(letter) === -1) {
        attempts = this.state.attempts - 1;
        this.setState({ usedletters, attempts });
      } else {
        this.setState({ usedletters });
      }

      // Vérifie si toutes les lettres du mot ont été trouvées
      let win = 1;
      for (let i = 0; i < this.state.currentWord.length; i++) {
        if (usedletters.indexOf(this.state.currentWord[i]) === -1) {
          win = 0;
        }
      }
      this.setState({ win });
    } else {
      console.log("lettre déjà utilisée");
    }
  }

  initGame = () => {
    // Réinitialise le jeu avec un nouveau mot et les paramètres par défaut
    this.setState({
      currentWord: this.state.wordscall[Math.floor(Math.random() * this.state.wordscall.length)],
      usedletters: [],
      win: 0,
      attempts: 9
    });
  }

  render() {
    // Affiche l'écran de défaite si les essais sont épuisés
    if (this.state.attempts <= 0) {
      return (
        <div id="game">
          <h1>BAAHAHAHAHAHAHA T'AS PERDU</h1>
          <button onClick={this.initGame}>rejouer</button> <br />
          <img src={frameImage} alt=""></img>
          <p>(ps: soyez indulgent, c'est mon premier projet react :D)</p>
        </div>
      );
    }

    // Affiche l'écran de victoire si le joueur a gagné
    if (this.state.win === 1) {
      return (
        <div id="game">
          <h1>bien joué bro 🗿</h1>
          <button onClick={this.initGame}>rejouer</button> <br />
          <img src={framImage} alt=""></img><br />
          <p>(ps: soyez indulgent, c'est mon premier projet react :D)</p>
        </div>
      );
    }

    // Affiche l'écran principal du jeu
    return (
      <div id="game">
        <h1>bienvenido dans ce jeu du pendu</h1>
        essaies: {this.state.attempts} <br />
        victoir: {this.state.win} <br />
        pour commencer appuyer sur entrer <br />

        {
          // Affiche le mot actuel si le jeu a commencé
          (this.state.currentWord !== null) &&
          <CurrentWord
            currentWord={this.state.currentWord}
            usedletters={this.state.usedletters}
          />
        }

        <Keyboard
          alphabet={this.state.alphabet}
          action={this.clickLetter}
        />
      </div>
    );
  }
}

export default App;