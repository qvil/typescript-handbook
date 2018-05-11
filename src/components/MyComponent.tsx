import * as React from "react";
import Store from "../store";

// interface MyComponentProps {
// }

const MyComponent: React.SFC<any> = props => {
  return (
    <Store.Consumer>
      {(value: any) => (
        <div>
          <h2>Context Test</h2>
          <p>Below value will be change after 1 second.</p>
          {value}
        </div>
      )}
    </Store.Consumer>
  );
};

export default MyComponent;
