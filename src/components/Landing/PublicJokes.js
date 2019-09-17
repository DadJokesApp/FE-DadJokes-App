import React from 'react';
import Joke from './Joke';
// import axios from 'axios';
import { connect } from 'react-redux';
import Typing from 'react-typing-animation';
import './JokeList.css';
import SearchForm from '../../components/search/SearchForm';
import { getPublicJokes } from '../../actions/publicJokes'

class PublicJokes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      publicJokes: `${this.props.publicJokes}`
    }
    console.log(props, "PublicJokes props");
  }
  componentDidMount(){
    
    this.props.getPublicJokes();
  }
  handleVote(id, delta) {
    this.setState(
      st => ({
        publicJokes: st.publicJokes.map(j => 
          j.id === id
          ? {
            ...j,
            votes: j.votes + delta
          }
          : j
          )
      }),
      () => window.localStorage.setItem('publicJokes', JSON.stringify(this.state.jokes))
    );
  }
  searchJoke = (list) => {
    this.setState({
      ...this.props.getPublicJokes(), publicJokes:list
    })
  }
  
  
  render(){
    if (this.props.gettingJokes) {
      return(
        <div>
          <h1>Jokes Loading...</h1>
        </div>
      );
    }
    console.log(this.props, "PUB PROPS")
    return (
      <div className = 'container'>
        <SearchForm className='search-bar' searchJoke={this.searchJoke}/>
        <div className="JokeList">
          <div className= "top-word"></div>
          <div className = 'JokeList-sidebar'>
            <h1 className="JokeList-title">
              <Typing>
                <span>PUBLIC</span> JOKES
              </Typing>
            </h1>
            <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt = "Laughing"
            />
            <button className = "JokeList-getmore" onClick= {this.handleClick} >
              Get Dad Jokes
            </button>
          </div>
          <div className="JokeList-jokes">
            {this.props.publicJokes.map(j => (
              <Joke 
                key = {j.id}
                votes = {j.votes}
                text = {j.joke + ' ' + j.punchline}
                upvote = {() => this.handleVote(j.id,1)}
                downvote= {() => this.handleVote(j.id, -1)}
              />
            ))} 
            {console.log(this.props, 'bottom props')}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    publicJokes: state.publicJokes,
    gettingJokes: state.gettingJokes,
  }
}

export default connect(
  mapStateToProps,
  // null,
  { getPublicJokes }
)(PublicJokes)