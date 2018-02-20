import React from 'react'
import ReactDOM from 'react-dom'
import Sum from './App/sum'

class IndexComp extends React.Component{
    render(){
        return(
            <div>
              <Sum/>
            </div>
        )
    }
}

ReactDOM.render(<IndexComp/>, document.getElementById('root'))