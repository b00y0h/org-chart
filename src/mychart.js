import React, { Component } from "react";
import OrgChart from "@balkangraph/orgchart.js";

export default class MyChart extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.chart = new OrgChart(this.divRef.current, {
      nodes: this.props.nodes,
      mouseScrool: OrgChart.action.scroll,
      showYScroll: OrgChart.scroll.visible,
      showXScroll: OrgChart.scroll.visible,

      layout: OrgChart.mixed,
      //   scaleInitial: 0.5,
      template: "olivia",
      enableSearch: false,
      enableDragDrop: true,
      collapse: {
        level: 2,
        allChildren: true,
      },
      nodeMenu: {
        details: { text: "Details" },
        edit: { text: "Edit" },
        add: { text: "Add" },
        remove: { text: "Remove" },
      },
      slinks: [
        { from: 2, to: 0, label: "text" },
        { from: 5, to: 1, template: "yellow", label: "lorem ipsum" },
      ],

      menu: {
        pdf: { text: "Export PDF" },
        png: { text: "Export PNG" },
        svg: { text: "Export SVG" },
        csv: { text: "Export CSV" },
      },

      tags: {
        Management: {
          template: "isla",
        },
        Studio: {
          template: "ana",
        },
        "Creative Manager": {
          template: "polina",
        },
        "`Accounts Manager`": {
          template: "ana",
        },
        Accounts: {
          template: "ula",
        },
        Creative: {
          template: "belinda",
        },
      },
      nodeBinding: {
        field_0: "Name",
        field_1: "Title",
        img_0: "img",
      },
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
