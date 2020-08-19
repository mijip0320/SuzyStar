import React, { Component } from "react";
import { Card, Image, Pagination } from "semantic-ui-react";
import "./ProductItem.css";
import ProductModalContainer from "../Container/ProductModalContainer";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
    };
  }
  
  getDataList() {
    let { products, onOpen } = this.props;
    let { pageNum } = this.state;
    let pNum = pageNum;
    if (Math.ceil(products.length / 3) < pageNum) {
      pNum = 1;
      this.setState({
        pageNum: pNum,
      });
    }
    let startNum, lastNum;
    startNum = (pNum - 1) * 3;
    lastNum = pNum * 3;

    let dataList = products.map((data, idx) =>
      idx >= startNum && idx < lastNum ? (
        <Card onClick={() => onOpen(data)} key={data.id} className="card-item">
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
  pageChange = (e, { activePage }) => {
    this.setState({
      pageNum: activePage,
    });
  };
  render() {
    let { length } = this.props;
    let dataList = this.getDataList();
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
            totalPages={Math.ceil(length / 3)}
            onPageChange={this.pageChange}
          />
        </div>

        <ProductModalContainer />
      </div>
    );
  }
}

export default ProductItem;
