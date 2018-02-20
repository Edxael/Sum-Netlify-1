import React, { Component } from 'react'
import './style.css'

export default class extends Component{
    render(){
        return(
            <div className="main-cont">

                <h1>Sum Numbers</h1>

                <input type="text"/>
                <br/><br/>

                <input type="text"/>
                <br/><br/>

                <input type="submit"/>
                <br/><br/>

                <input type="text"/>

            </div>
        )
    }
}
