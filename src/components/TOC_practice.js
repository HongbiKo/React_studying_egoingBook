import React, { Component } from "react";

class TOC_practice extends Component {
  shouldComponentUpdate(newProps) {
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    let list = [];
    const data = this.props.data;
    for (let i = 0; i < data.length; i++) {
      list.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default TOC_practice;
