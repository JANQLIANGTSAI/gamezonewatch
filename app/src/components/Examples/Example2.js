import React from 'react';
// import Griddle from 'griddle-react';
import Griddle, { plugins } from 'griddle-react';

var data = [
  { "one": "one", "two": "two", "three": "three" },
  { "one": "uno", "two": "dos", "three": "tres" },
  { "one": "ichi", "two": "ni", "three": "san" }
];

const styleConfig = {
  icons: {
    TableHeadingCell: {
      sortDescendingIcon: <small>(desc)</small>,
      sortAscendingIcon: <small>(asc)</small>,
    },
  },
  classNames: {
    Row: 'row-class',
  },
  styles: {
    Filter: { fontSize: 18 },
    Table: { border: "2px solid #555 "},
  }
}

const Example2 = (props) => {
  return (
    <div className="container-fluid">
      <Griddle data={data} plugins={[plugins.LocalPlugin]} styleConfig={styleConfig} />
    </div>
  );
};

export default Example2;
