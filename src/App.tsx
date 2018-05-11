import * as React from "react";
import MyComponent from "./components/MyComponent";
import Store from "./store";

class App extends React.Component<any, any> {
  state = {
    text: "",
    value: 0
  };

  _setText = () => {
    this.setState({ text: "Hello" });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({value: 2})
    }, 1000);
  }

  public render() {
    const { _setText } = this;
    const { text } = this.state;

    return (
      <Store.Provider value={this.state.value}>
        <div className="App">
          <h1>Typescript Handbook</h1>
          <h2>Interfaces</h2>
          <ul>
            <li onClick={_setText}>Extending Interfaces</li>
          </ul>
          <h2>Result</h2>
          <div>{text}</div>
          <MyComponent />
        </div>
      </Store.Provider>
    );
  }
}

export default App;
