import React, {Component} from 'react'

class CreateContact extends Component {    
    render(){
        var divStyle = {
            'text-align':'center', 
            'font-weight': 'bolder',
            'font-size':'3em'
        }
        return(
            <div style={divStyle}>Create Contact!</div>
        )
    }
}

export default CreateContact