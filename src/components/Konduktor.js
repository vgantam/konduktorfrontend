import React, { Component } from 'react'

 class Konduktor extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
             name: '',
             type: '',
             cointainerimage: '',
             metadata: '',
             networkingprotocal:'',
             portnumber:'',
             cpusize:''
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
    handlemetadatachange = (event) => {
        this.setState({
            metadata: event.target.value
        })
    }
    handleProtocalChange = (event) =>{
        this.setState({
            networkingprotocal:event.target.value
            
        })
    }
    handlePortNumberchange = (event) => {
        this.setState({
            portnumber: event.target.value  
        })
    }
    handlecpusize = (event) => {
        this.setState({
            cpusize:event.target.value
        })
    }
    handlechoosememory = (event) => {
        this.setState({
            choosememory:event.target.value
        })
    }
        handlememorysizechange = (event) => {
            this.setState({
                memorysize:event.target.value
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
                    <option value= "stateless">Stateless  </option>
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
            <div>
                <label>Metadata: </label>
                <input type='text'
                value={this.state.metadata}
                onChange={this.handlemetadatachange}
                />
            <div>
                <label>NetworkingProtocal: </label>
                <select value={this.state.networkingprotocal} onChange={this.handleProtocalChange}>
                    <option value= "tcp">TCP  </option>
                    <option  value= "udp">UDP </option>
                </select>
            </div>
            <div>
                <label>Port: </label>
                <input type='text'
                value={this.state.portnumber}
                onChange={this.handlePortNumberchange}
                />
            </div>
            <div>
                <label>Cpu Profile: </label>
                <select value={this.state.cpusize} onChange={this.handlecpusize}>
                    <option value= "Small"> Small</option>
                    <option value= "Medium"> Medium</option>
                    <option value= "Large"> Large</option>
                </select>
            </div>
            <div>
                <label>Choose Memory: </label>
                <select>value={this.state.choosememory} onChange={this.handlechoosememory}>
                <option value= "Megabytes">Megabytes</option>
                <option value= "Gigabytes">Gigabytes</option>
                </select>
            </div>
            <div>
                <label>Memory Size: </label>
                <input type='text'
                value={this.state.memorysize}
                onChange={this.handlememorysizechange}
                />
            </div>
            </div>
            </form>
        )
    }
}
export default Konduktor
