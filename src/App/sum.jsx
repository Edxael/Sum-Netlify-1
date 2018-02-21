import React, { Component } from 'react'
import './style.css'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = { num1: '', num2: '', total: '' }
    }

    exe1(){
        console.log("Hello from Exe1")
        console.log(this.state)

        this.setState({ total: parseInt( this.state.num1, 0 ) + parseInt( this.state.num2, 0 ) })
    }

    render(){
        return(
            <div className="main-cont">

                <h1>Sum Numbers--</h1>

                <input type="text" value={this.state.num1} onChange={ (e) => { this.setState({ num1: e.target.value }) } } />
                <br/><br/>

                <input type="text" value={this.state.num2} onChange={ (e) => { this.setState({ num2:  e.target.value }) } } />
                <br/><br/>

                <input type="submit" onClick={this.exe1.bind(this)}/>
                <br/><br/>

                <input type="text" value={ this.state.total }/>

            </div>
        )
    }
}
