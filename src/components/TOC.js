import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log("==> TOC render shouldComponentUpdate");
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log("==> TOC render");
    let lists = [];
    const data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (id, e) {
              e.preventDefault();

              // first method
              // this.props.onChangePage(e.target.dataset.id);

              // second method
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
