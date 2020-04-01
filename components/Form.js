import React, { Component } from 'react'
import Mostrar from './Mostrar'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: '',
             comment: '',
             topic: 'React'
        }
    }

    handleUsernameChange = evento => {

        this.setState({
            username: evento.target.value
        })
           
    }

    handlePassword = evento => {
        this.setState({
            password: evento.target.value
        })
    }

    handlerCommentChange = evento => {
        this.setState({
            comment: evento.target.value
        })
    }

    handlerTopicChange = evento => {
        this.setState({
            topic: evento.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic} ${this.state.password}`)
        event.preventDefault()
    }
    

    render() {

        let output = ' '
        if(this.state.comment){
         output = <h6>hola {this.state.comment}</h6>;
        }else output ='';


        return (
            <React.Fragment>
                
                <form onSubmit={this.handleSubmit} className="Container fluid" >
                    

                    <div >
                        <h1>Ejemplo de Formulario</h1>
                        <h6> <b> Username </b></h6> 
                        <input type='text' 
                        value={this.state.username} 
                        onChange={this.handleUsernameChange}></input>
                        
                    </div>

                    <div>
                        <h6><b> Password </b></h6>
                        <input type='text' onChange={this.handlePassword} value={this.state.password}></input>
                    </div>

                    <div>
                        <h6><b> Comment </b></h6>
                        <textarea value={this.state.comment} onChange={this.handlerCommentChange} />
                    </div>

                    <div>
                        <h6> <b> Topic </b> </h6>
                        <select value={this.state.topic} onChange={this.handlerTopicChange} >
                            <option value="React">React</option>

                            <option value="Angular">Angular</option>

                            <option value="Vue">Vue</option>
                        </select>
                    </div>

                    <div  >
                        <button type= "buttom" className = "btn btn-primary btn-lg" >Enviar</button>
                    </div>

                    <div>{output}</div>

                </form>
  
                
                <div>
                    <Mostrar name={this.state.comment} />
                </div>

            </React.Fragment>
            
        )
    }
}

export default Form
