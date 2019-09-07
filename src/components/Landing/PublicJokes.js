import React from 'react'
import axios from 'axios';


export default class PublicJokes extends React.Component {
  state = {jokes : [],loading : false};
  static defaultProps = {
    numJokesToGet: 4
  }
  componentDidMount(){
  
  }
  getJokes = async () => {
    let publicJokes = [];
    let pull = axios.get('https://dadjokes-backend.herokuapp.com/api/jokes/public');

  }

  render() {
    if (this.state.loading) {
      return(
        <div>
          <h1>Jokes Loading...</h1>
        </div>
      );
    }
    
    return (
      <div>
        {pull}
      </div>
    )
  }
}