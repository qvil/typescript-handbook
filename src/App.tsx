import * as React from "react";

class App extends React.Component<any, any> {
  state = {
    text: ""
  };

  _setText = () => {
    this.setState({ text: "Hello" });
  };

  public render() {
    const { _setText } = this;
    const { text } = this.state;

    return (
      <div className="App">
        <h1>Typescript Handbook</h1>
        <h2>Interfaces</h2>
        <ul>
          <li onClick={_setText}>Extending Interfaces</li>
        </ul>
        <h2>Result</h2>
        <div>{text}</div>
      </div>
    );
  }
}

export default App;
