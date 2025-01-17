import React, { Component } from 'react';
import './App.css';

class Keyboard extends Component {

    componentDidMount(){
        window.addEventListener("keyup", (e) =>{
            if (this.props.alphabet.indexOf(e.key) !== -1){
                this.props.action(e.key)
            } 
            console.log(e.key)
        })
    }

    render() {
        return (
            <div id="keyboard">
                {
                    this.props.alphabet.map((letter, key) => {
                        return <button 
                            key ={"keyboard_"+key}
                            onClick={() => this.props.action(letter)}
                        >{letter}</button>
                    })
                }
            </div>
        )
    }
}

export default Keyboard;