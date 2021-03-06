/**
 * Lazy loaded about page
 */

import * as React from "react";
import { connect } from "react-redux";
import About from "./About";

type Props = {
  location: {
    pathname: string;
  };
};

type Component = {
  default(): About;
};

export class AboutAsync extends React.Component<Props> {
  private component: Component;

  public componentWillMount() {
    System.import("./About").then(component => {
      this.component = component;
      this.forceUpdate();
    });
  }

  private isNil(c: Component): boolean {
    return c === undefined || c === null;
  }

  public render() {
    return this.isNil(this.component)
      ? null
      : <this.component.default location={this.props.location.pathname} />;
  }
}
