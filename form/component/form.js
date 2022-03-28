import React, { Component} from 'react';
import Car from './car';

class Form extends Component {
    state = {
        username: '',
        colors: ["","red", "green", "yellow"],
        color: "",
        comment: ""
    }
    handlePseudo = e => {
        this.setState({ username : e.target.value})
    }
    handleComment = e => {
        this.setState({ comment : e.target.value})
    }

    handleColor = event => {
        this.setState({
            color: event.target.value
        })
    }
    handleSubmitForm = e => {
        e.preventDefault()
        
    }
    render() {
        return(
            <div>
                <Car color={this.state.color} />
                <h1>Commentaire</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo}/>
                    </div>
                    <div >
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor} >
                            {
                                this.state.colors.map( color => {
                                    return <option key={color} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                    <div >
                        <label>Commentaire</label>
                        <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                    </div>
                    
                    {this.state.color != "" && this.state.pseudo != '' ?<button>Validé</button> : ""}
                </form>
            </div>
        )
    }
}

export default Form