import React, { Component } from 'react'
import JokeList from '../Landing/PublicJokes'





export class JokeSearch extends Component {
    constructor() {
        super()
        this.state = {
          search: "",
          jokes: [],
          isFetchingJokes: true
        }
      }

      searchHandler = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      componentDidMount() {
        this.setState({
          jokes: jokes
        })
      }

      er() {
        console.log(this.state.search);
      }
      render() {
      return (
        <div>
          {/* <JokeSearch 
          onChange={this.searchHandler} 
          value={this.state.search} /> */}
          <JokeList postProps={this.state.jokes} />
        </div>
      )
    }
  }