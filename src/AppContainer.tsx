/**
 * Applicaion Container
 */
import * as React from "react";
import { Nav } from "./components";

export class AppContainer extends React.Component<any, any> {
  public render() {
    const marginTop = {
      marginTop: "10px"
    };
    return (
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
