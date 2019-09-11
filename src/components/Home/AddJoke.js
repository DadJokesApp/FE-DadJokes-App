import React, {Component} from 'react';
import {connect } from 'react-redux';
import { addJoke } from '../../actions/addJokeAction';


class AddJoke extends Component {
    state = {
        joke: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addjoke = e => {
        e.preventDefault();
        console.log('this is state', this.state.joke);
        this.props.addjoke(this.state)
        .then(() => {
            this.props.history.push('/');
        });
    };

    render(){
        console.log('Is this props', this.props);
        return(
            <form onSubmit={this.addjoke} className='sign-up'>
                <h1 className='sign-up-title'>Add Joke</h1>
                <input name="joke" 
                value={this.state.joke} 
                onChange={this.handleChange} 
                type="text" 
                className='sign-up-input'
                placeholder="Got Jokes?"
                />
                <button className='sign-up-input'>Add Joke</button>

            </form>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {addJoke})(AddJoke)