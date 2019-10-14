import React, { Component } from 'react';

export class NewTweet extends Component {
  state = {
    content: "",
    username: ""
  }
  
  handleGraham = ({ target: { name, value }}) => {
    // console.log(evt.target.name)
    // console.log(evt.target.value)
    // this.setState({
    //   [evt.target.name]: evt.target.value
    // })
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.makeNewTweet({
      content: this.state.content,
      username: this.state.username,
    })
    this.setState({content: '', username: ''})
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit /*(evt) => this.props.handleSubmit(evt, this.state)*/ } onChange={ this.handleGraham } className="tweet-form">
        <input className="tweet-input" type="text" placeholder="Tweet" value={this.state.content} name="content"/>
        <input type="text" placeholder="Username" value={this.state.username} name='username'/>
        <input type="submit" value="Tweet"  />
      </form>
    );
  }
}

export default NewTweet;
