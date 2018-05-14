import * as React from "react";
// import * as fs from "fs";
import styled from "styled-components";
// import MyComponent from "./components/MyComponent";
import Store from "./store";
import Octo from "./Octo";

const RootConatiner = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  flex: 1;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

const List = styled.li`
  cursor: pointer;
`;

class App extends React.Component<any, any> {
  state = {
    text: "",
    value: 0
  };

  _setText = (text: any) => () => {
    this.setState({ text });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: 2 });
    }, 1000);
  }

  public render() {
    const { _setText } = this;
    const { text } = this.state;
    const octo: Octo = new Octo("I'm Octo~");

    // this.readFile("./Octo.ts");

    return (
      <Store.Provider value={this.state.value}>
        <RootConatiner>
          <CardContainer>
            <h1>Typescript Handbook</h1>
            <h2>Interfaces</h2>
            <ul>
              <List onClick={_setText("Hello")}>Extending Interfaces</List>
            </ul>
            <h2>Classes</h2>
            <h3>Readonly modifier</h3>
            <h4>Parameter properties</h4>
            <ul>
              <List onClick={_setText(octo.name)}>Extending Interfaces</List>
            </ul>
            <div>{}</div>
          </CardContainer>
          <CardContainer>
            <h2>Code</h2>
            <h2>Result</h2>
            <div>{text}</div>
          </CardContainer>
        </RootConatiner>
      </Store.Provider>
    );
  }

  // private readFile = (path: string): string => {
  //   fs.readFile(path, (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(data);
  //   });
  //   const stream = "asdf";

  //   return stream;
  // };
}

export default App;
