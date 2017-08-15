/**
 * Generic View Component
 */
import * as React from "react";
import {
  not,
  isNil,
  compose,
  length,
  filter,
  lensIndex,
  view,
  pipe,
  concat
} from "ramda";

const asArray = (x: any) => (Array.isArray(x) ? x : Array.of(x));
const notNull = compose(not, isNil);
const filterNotNull = filter(notNull);
const first = lensIndex(0);
const takeFirst = view(first);
const lengthOfNotNull = compose(length, filterNotNull);

// tslint:disable-next-line:variable-name
// export const View: any = pipe(
//   (x: any) => compose(asArray, x),
//   computation => ({
//     computation,
//     fold: (props: any): any =>
//       lengthOfNotNull(computation(props)) === 1
//         ? takeFirst(filterNotNull(computation(props)))
//         : React.createElement("div", {
//             children: filterNotNull(computation(props))
//           }),

//     map: (f: (n: any) => any) => View((props: any) => f(computation(props))),

//     contramap: (g: (n: any) => any) =>
//       View((props: any) => computation(g(props))),

//     concat: (other: any) =>
//       View((props: any) => concat(computation(props), rdr.computation(props)))
//   })
// );
export const View: any = (g: any) => ({
  fold: g,
  contramap: (f: any) => View((x: any) => g(f(x))),
  concat: (other: any) =>
    View((x: any) =>
      <div>
        {g(x)} {other.fold(x)}
      </div>
    ),
  map: (f: any) => View((x: any) => f(g(x)))
});

View.of = (x: any) => View(() => x);
