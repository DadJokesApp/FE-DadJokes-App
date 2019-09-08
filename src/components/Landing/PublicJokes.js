import React from 'react';
import Joke from './Joke';
// import axios from 'axios';
import { connect } from 'react-redux';
import Typing from 'react-typing-animation';
import './JokeList.css';
import SearchForm from '../../components/search/SearchForm';
import { getPublicJokes } from '../../actions/publicJokes'




class PublicJokes extends React.Component {
  // state = {jokes : [],loading : false};
  // static defaultProps = {
  //   jokesToGet: 4
   //}
  componentDidMount(){
    this.props.getPublicJokes();
  }

  // getNewJokes = () => {
  //   this.setState({loading: true });
  // }


  // getJokes = async () => {
  //   let publicJokes = [];
  //   // let pull = axios.get('https://dadjokes-backend.herokuapp.com/api/jokes/public');

  //   while (publicJokes.length < this.props.jokesToGet){
  //     let res = await axios.get('https://dadjokes-backend.herokuapp.com/api/jokes/public');
  //     publicJokes.push(res.data);

  //   }

    

  //   let publicJokesA = publicJokes[0].map(j => {
  //     return j;
  //   })

  //   this.setState({publicJokesA, loading: false});
  // }

  // handleVote(id, delta) {
  //   this.setState(
  //     st => ({
  //       publicJokes: st.publicJokes.map(j => 
  //         j.id === id
  //         ? {
  //           ...j,
  //           votes: j.votes + delta
  //         }
  //         : j
  //         )
  //     }),
  //     (window.localStorage.setItem('publicJokes', JSON.stringify(this.state.jokes)))
  //   );
  // }

  // handleClick = () => {
  //   this.setState(
  //     {
  //       loading: true
  //     },
  //     this.getJokes
  //   );
  // };

  // searchJoke = (list) => {
  //   this.setState({
  //     ...this.state, publicJokes:list
  //   })
  // }

  
  

  render(){
    if (this.props.gettingJokes) {
      return(
        <div>
          <h1>Jokes Loading...</h1>
        </div>
      );
    }
    
    return (
      <div className = 'container'>
        {/* <SearchForm className='search-bar' searchJoke={this.searchJoke}/> */}
        <div className="JokeList">
          <div className= "top-word">

          </div>

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
              text = {j.joke}
              upvote = {() => this.handleVote(j.id,1)}
              downvote= {() => this.handleVote(j.id, -1)}
            />
          ))} 
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