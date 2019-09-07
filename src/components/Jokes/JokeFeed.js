import React from 'react';
import Joke from './Joke';
import './jokes.css';

import { connect } from 'react-redux'

class JokeFeed extends React.Component {
    render () {

        // this comes in as an empty array
        console.log('this.props.jokes', this.props.jokes);
        
        // this seems to be correct
        console.log('user', this.props.user);


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

