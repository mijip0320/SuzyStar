import React, { Component } from "react";
import { List, Header } from "semantic-ui-react";
import "./ProductList.css";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ["Music", "Photo", "Concert", "Living", "Beauty"],
    };
  }

  getDataList() {
    let datas = this.state.category;
    let dataList;

    dataList = datas.map((data, idx) => {
      return (
        <List.Item key={idx} onClick={() => console.log(idx)}>
          <List.Content>
            <List.Header>{data}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
    return dataList;
  }

  render() {
    let dataList = this.getDataList();
    return (
      <div className="product-list">
        <Header size="huge">Suzy</Header>
        <hr></hr>
        <List size="huge" animated verticalAlign="middle">
          {dataList}
        </List>
      </div>
    );
  }
}

export default ProductList;
