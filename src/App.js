import React, { Component } from 'react';
import './App.css';
import Keyboard from './keyboard';
import CurrentWord from './CurrentWord';
import frameImage from './Frame.png';
import framImage from './Fram.png';

class App extends Component {
  state = {
    //oui j'ai zappé l'api pour les mots, j'ai pas eu le temps de le faire
    wordscall: ["bonjour", "salut", "coucou", "hello", "hi", "hola", "ciao", "hallo", "ola", "nihao", "konichiwa", "namaste", "salaam", "sawubona", "jambo", "merhaba", "privet", "shalom", "desole", "voisin"],
    currentWord: null,
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(""),
    usedletters: [],
    win:0, // 0: en cours, 1: gagné
    attempts: 9
  }

  componentDidMount() {
    window.addEventListener("keyup", (e) =>{
      if(e.keyCode == 13){
        this.initGame()
      }
      console.log(e)
    })  
    this.initGame()
  }

  clickLetter = (letter) => {
    console.log("=>" + letter)
    //verifier si la lettre est dans le mot
    if (this.state.usedletters.indexOf(letter)=== -1) {

      let attempts = this.state.attempts
      const usedletters = [letter, ...this.state.usedletters]

      if (this.state.currentWord.indexOf(letter) === -1) {
        attempts = this.state.attempts - 1
        this.setState({usedletters, attempts}) //att
      }else {
        this.setState({usedletters})
      }

      let win = 1
      for(let i = 0; i < this.state.currentWord.length; i++) {
        if (usedletters.indexOf(this.state.currentWord[i]) == -1) {
          win = 0
        }
      }
      this.setState({win})
      // if (attempts === 0 && win === 0) {
      //   win = -1
      // }


    } else {
      console.log("lettre déjà utilisée")
    }
  }

  initGame = () => {
    this.setState({currentWord: this.state.wordscall[Math.floor(Math.random() * this.state.wordscall.length)], usedletters: [], win:0, attempts: 9})
  }

  //
  render () {
    if (this.state.attempts<=0){
      return (
        <div id="game">
          <h1>BAAHAHAHAHAHAHA T'AS PERDU</h1>
          <button onClick={this.initGame}>rejouer</button> <br/>
          <img src={frameImage} alt=""></img>
          <p>(ps: soyez indulugent monsieur, on est voisin et c'est mon bientot mon anniversaire 😅)</p>
        </div>
      )
    }
    if (this.state.win === 1){
      return (
        <div id="game">
          <h1>bien joué bro 🗿</h1>
          <button onClick={this.initGame}>rejouer</button> <br/>
          <img src={framImage} alt=""></img><br/>
          <p>(ps: soyez indulugent monsieur, on est voisin et c'est mon bientot mon anniversaire 😅)</p>
        </div>
      )
    }
    
    //
    return (
      <div id="game">
        <h1>bienvenido dans ce jeu du pendu</h1>
        essaies: {this.state.attempts} <br/>
        victoir: {this.state.win} <br/>
        pour commencer appuyer sur entrer <br/>
        
        {
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
      
    )
  }
}

export default App;
