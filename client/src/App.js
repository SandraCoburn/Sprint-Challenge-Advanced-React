import React from "react";
import axios from "axios";
import CardInfo from "./components/CardInfo";
import SearchForm from "./components/SearchForm";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerInfo: [],
      query: ""
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      console.log("players", res);
      this.setState({
        playerInfo: res.data
      });
    });
  }
  handleChanges = e => {
    this.setState({ query: e.target.value });
    this.filterUsers(e.target.value);
  };
  //query is the target value from input. this will filter all the cards and leave only the matching to input data
  filterUsers = query => {
    const results = this.state.playerInfo.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ playerInfo: results });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Women's World Cup players </h1>
        </header>
        <SearchForm
          handleChanges={this.handleChanges}
          value={this.state.query}
        />
        <CardInfo playerInfo={this.state.playerInfo} />
      </div>
    );
  }
}

export default App;
