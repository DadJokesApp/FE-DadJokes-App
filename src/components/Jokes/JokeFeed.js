import React from 'react';
import Joke from './Joke';
import './jokes.css';
//const jokes = require('./jokes.js');  // for testing, remove when done

import { connect } from 'react-redux'



class JokeFeed extends React.Component {
    render () {
        console.log('this.props.jokes', this.props.jokes);
        console.log('this.state', this.state);
        console.log('user', this.props.user);
        console.log('isLoggedIn', this.props.isLoggedIn);

        return (
            <div className="joke-feed">
                <p>This is the joke feed component</p>

                {this.props.jokes.map(joke => <Joke joke={joke} />)}
            </div>
        )
    
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        jokes: state.jokes
    }
  }
  
  export default connect(
    mapStateToProps,
    { }
  )(JokeFeed)

