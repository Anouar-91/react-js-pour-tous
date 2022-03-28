import React, { Component} from 'react';
import Car from './car';
import '../style/style.css'

const titleStyle = {fontSize: '60px', color: 'red'}

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
    labelColor = () => {
        if(this.state.color == "red") return "red"
        if(this.state.color == "green") return "green"
        if(this.state.color == "yellow") return "yellow"
    }
    render() {
        return(
            <div>
                <Car color={this.state.color} />
                <h1 style={titleStyle}>Commentaire</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo}/>
                    </div>
                    <div >
                        <label className={this.labelColor()}>Couleur</label>
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
                    
                    {this.state.color != "" && this.state.pseudo != '' ?<button className="btn btn-primary">Validé</button> : ""}
                </form>
            </div>
        )
    }
}

export default Form