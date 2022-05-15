import React from "react";
import logo from "../logo.svg";
import "../App.css";
import {
  Graph,
  GraphNode,
  GraphLink,
  GraphData,
  GraphConfiguration,
} from "react-d3-graph";

// graph payload (with minimalist structure)
const nodes: GraphNode[] = [
  {
    id: "دریا! پنجاه و نهمین عشق مرا بردی!",
    labelProperty: "salam",
  },
  {
    id: "گام دوم",
  },
  {
    id: "گوگولی‌ها",
  },
];

const links: GraphLink[] = [
  { source: nodes[0].id, target: nodes[1].id },
  { source: nodes[0].id, target: nodes[2].id },
];

const data: GraphData<GraphNode, GraphLink> = {
  nodes: nodes,
  links: links,
};

// the graph configuration, just override the ones you need
const myConfig: Partial<GraphConfiguration<GraphNode, GraphLink>> = {
  nodeHighlightBehavior: true,
  width: 1000,
  height: 1000,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

function App() {
  return (
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={myConfig}
    />
  );
}

export default App;
