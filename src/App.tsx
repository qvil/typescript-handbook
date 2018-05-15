import * as React from "react";
// import * as fs from "fs";
import { RootConatiner, CardContainer, List } from "./components/App";
import Store from "./store";
import Octopus from "./lib/Octopus";
import pickCard from "./lib/overloads";

class App extends React.Component<any, any> {
  state = {
    code: "",
    result: "",
    value: 0
  };

  _setResult = (result: any) => () => {
    this.setState({ result });
  };

  _octopus = () => {
    const octopus: Octopus = new Octopus("Awesome Octopus");
    this.setState({ result: `Hi, I'm ${octopus.name}, My number of legs is ${octopus.numberOfLegs}` });
  };

  _overLoads = () => {
    const myDeck = [
      { suit: "diamonds", card: 2 },
      { suit: "spades", card: 10 },
      { suit: "hearts", card: 4 }
    ];
    const pickedCard1 = myDeck[pickCard(myDeck)];
    const pickedCard2 = pickCard(15);

    this.setState({
      code: `
        let suits = ["hearts", "spades", "clubs", "diamonds"];

        function pickCard(x: {suit: string; card: number; }[]): number;
        function pickCard(x: number): {suit: string; card: number; };
        function pickCard(x): any {
            // Check to see if we're working with an object/array
            // if so, they gave us the deck and we'll pick the card
            if (typeof x == "object") {
                let pickedCard = Math.floor(Math.random() * x.length);
                return pickedCard;
            }
            // Otherwise just let them pick the card
            else if (typeof x == "number") {
                let pickedSuit = Math.floor(x / 13);
                return { suit: suits[pickedSuit], card: x % 13 };
            }
        }

        let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        let pickedCard1 = myDeck[pickCard(myDeck)];
        alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

        let pickedCard2 = pickCard(15);
        alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
      `,
      result: `
        pickedCard1 : ${pickedCard1.card}, ${pickedCard1.suit}
        pickedCard2 : ${pickedCard2.card}, ${pickedCard2.suit}`
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: 2 });
    }, 1000);
  }

  public render() {
    const { _setResult } = this;
    const { code, result } = this.state;

    // this.readFile("./Octo.ts");
    return (
      <Store.Provider value={this.state.value}>
        <RootConatiner>
          <CardContainer>
            <h1>Typescript Handbook</h1>
            <h2>Interfaces</h2>
            <ul>
              <List onClick={_setResult("Hello")}>Extending Interfaces</List>
            </ul>
            <h2>Classes</h2>
            <h3>Readonly modifier</h3>
            <ul>
              <List onClick={this._octopus}>Parameter properties</List>
            </ul>
            <h2>Functions</h2>
            <ul>
              <List onClick={this._overLoads}>Overloads</List>
            </ul>
          </CardContainer>
          <CardContainer>
            <h1>Code</h1>
            <div>{code}</div>
            <h1>Result</h1>
            <div>{result}</div>
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
