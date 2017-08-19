/**
 * Header Component
 */
import * as React from "react";
import { v4 } from "uuid";
import { view } from "../View";
import { tap } from "ramda";

const backgroundSlice = {
  backgroundColor: "#00b3b3",
  height: "200px",
  marginBottom: "30px",
  paddingTop: "70px"
};

const divEl = (t: { title: string }) =>
  <div key={v4()} style={backgroundSlice}>
    {t.title}
  </div>;

export const AboutBackgroundSlice = view(divEl);
