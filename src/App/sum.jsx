import React, { Component } from 'react'
import './style.css'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = { num1: '', num2: '', total: '' }
    }

    exe1(){
        console.log("Hello from Exe1")
    }

    render(){
        return(
            <div className="main-cont">

                <h1>Sum Numbers</h1>

                <input type="text" value={this.state.num1} onChange={ this.exe1.bind(this) } />
                <br/><br/>

                <input type="text" />
                <br/><br/>

                <input type="submit" onClick={this.exe1.bind(this)}/>
                <br/><br/>

                <input type="text"/>

            </div>
        )
    }
}
