import React, { Component } from "react";
import {
  Card,
  Image,
  Pagination,
  Modal,
  Header,
  Button,
} from "semantic-ui-react";
import "./ProductItem.css";
import { observer, inject } from "mobx-react";
import ProductModal from "../View/ProductModal";

@inject("ProductStore")
@observer
class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      open: false,
      product: {
        id: "",
        pName: "",
        price: "",
        imgUrl: "",
        des: "",
        property: "",
      },
    };
  }
  getDataList() {
    let { pageNum } = this.state;
    let startNum, lastNum;
    startNum = (pageNum - 1) * 3;
    lastNum = pageNum * 3;
    let datas = this.props.ProductStore.getProducts;
    let dataList = datas.map((data, idx) =>
      idx >= startNum && idx < lastNum ? (
        <Card
          onClick={() => this.onOpen(data)}
          key={data.id}
          className="card-item"
        >
          <Image src={data.imgUrl} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Suzy</Card.Header>
            <Card.Meta>
              <span>{data.pName}</span>
              <br />
              <span>{data.property}</span>
            </Card.Meta>
            <Card.Description>{data.price}</Card.Description>
          </Card.Content>
        </Card>
      ) : (
        []
      )
    );
    return dataList;
  }
  onClose = () => {
    this.setState({ open: false });
  };

  onOpen = (data) => {
    let product = {
      id: data.id,
      pName: data.pName,
      price: data.price,
      imgUrl: data.imgUrl,
    };
    this.setState({ product: product, open: true });
  };
  pageChange = (e, { activePage }) => {
    this.setState({
      pageNum: activePage,
    });
  };
  render() {
    let { open, product } = this.state;
    let dataList = this.getDataList();
    let totalLength = this.props.ProductStore.getProducts.length;
    return (
      <div className="product-item">
        <Card.Group itemsPerRow={3}>{dataList}</Card.Group>
        <div className="product-pagination">
          <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={totalLength / 3}
            onPageChange={this.pageChange}
          />
        </div>

        <ProductModal
          product={product}
          open={open}
          onClose={this.onClose}
        ></ProductModal>
      </div>
    );
  }
}

export default ProductItem;
