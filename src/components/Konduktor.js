import React, { Component } from 'react'

 class Konduktor extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
             name: '',
             type: '',
             cointainerimage: ''
         }
     }
     handleNamechange = (event) => {
         this.setState({
            name: event.target.value
         })
     }
     handleTypeChange = (event) => {
         this.setState({
            type: event.target.value
         })
     }
     handlecointainerImagechange = (event) => {
        this.setState({
            cointainerimage: event.target.value
        })
    }
    render() {
        return (
            <form>
            <div>
                <label>Name: </label>
                <input type='text' 
                value={this.state.name} 
                onChange={this.handleNamechange}
                />
            </div>
            <div>
                <label>Type: </label>
                <select value={this.state.topic} onChange={this.handleTypeChange}>
                    <option value= "stateless">Stateles  </option>
                    <option  value= "statefull">Statefull </option>
                </select>
            </div>
            <div>
                <label>CointainerImage:  </label>
                <input type='text' 
                value={this.state.cointainerimage} 
                onChange={this.handlecointainerImagechange}
                />
            </div>
            </form>
        )
    }
}

export default Konduktor
