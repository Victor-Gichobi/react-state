import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Person: {
        fullName: "Victor Gichobi",
        bio: "I am a passionate software developer who enjoys learning React and building web applications.",
        imgSrc:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        profession: "Frontend Developer",
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, timeSinceMounted } = this.state;

    return (
      <div className="container">
        <h1>React Class Component Checkpoint</h1>

        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="card">
            <img src={Person.imgSrc} alt={Person.fullName} />
            <h2>{Person.fullName}</h2>
            <p>
              <strong>Profession:</strong> {Person.profession}
            </p>
            <p>{Person.bio}</p>
          </div>
        )}

        <h3>Component mounted for: {timeSinceMounted} seconds</h3>
      </div>
    );
  }
}

export default App;