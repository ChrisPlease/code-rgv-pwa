/**
 * Title is-3 component
 */
import * as React from "react";
import { v4 } from "uuid";
import { Reader } from "ramda-fantasy";
import { View } from "../View/View";

const titleEl = View(({ title }: any) =>
  <h1 className="title is-3" key={v4()}>
    {title}
  </h1>
);

export const TitleThree = Reader(({ title }: any) =>
  titleEl.contramap(() => ({ title }))
);