import React, { Component } from "react";
import SuperHeroCard from "./components/SuperHeroCard";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Frame from "./components/Frame";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends: friends,
    count: [],
    topScore: 0
  };

  StartGame = event => {
    const name = event.target.attributes.getNamedItem("name").value;
    this.shufflefriends();
    this.HandleIncremental(name);
  };

  shufflefriends = () => {
    this.setState((this.state.friends = this.shuffleArray(this.state.friends)));
  };

  shuffleArray = a => {
    var i, j, k;
    for (i = 0; i < a.length; i++) {
      j = Math.floor(Math.random() * 12);
      k = a[i];
      a[i] = a[j];
      a[j] = k;
    }
    return a;
  };

  HandleIncremental = name => {
    const newState = { ...this.state };
    if (newState.count.includes(name)) {
      alert("TRY AGAIN!");
      newState.count = [];
      this.setState((this.state = newState));
    } else {
      newState.count.push(name);
      this.setState((this.state = newState));
      if (newState.count.length > newState.topScore) {
        newState.topScore++;
        this.setState((this.state = newState));
        if (newState.topScore === 12) {
          alert("YOU HAVE WON!");
          newState.count = [];
          this.setState((this.state = newState));
        }
      }
    }
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          topScore={this.state.topScore}
          score={this.state.count.length}
        />
        <Header />
        {this.state.friends.map(obj => (
          <Frame item lg={3}>
            <SuperHeroCard
              id={obj.id}
              name={obj.name}
              image={obj.image}
              key={obj.id}
              StartGame={this.StartGame}
            />
          </Frame>
        ))}
        <Footer currentYear="2020" />
      </Wrapper>
    );
  }
}

export default App;
