//BasketContainer로부터 받은 정보로 View 구성

import React, { Component } from 'react';
import { Grid, Header, Card, Image, Button } from 'semantic-ui-react';
import "./Basket.css";

class Basket extends Component {
    getDataList() {
        let {products, baskets} = this.props;

        //기존 상품리스트에서 baskets에 해당하는 값만 출력
        let dataList = products.map((data) => baskets.find(basket => data.id === basket) ?
        (
            <Card key={data.id} className="card-item">
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
        ) : []
        );
        return dataList;
      }
    render() {
        let dataList = this.getDataList();
        return (
            <Grid.Row className="basket-minheiht" >
                <Grid.Column>
                    <div className="basket-container">
                <Header as="h1" className="basket-header">Basket</Header>

                {/* 구매버튼을 이용해서 장바구니 초기화 */}
                <Button 
                onClick={this.props.onBuy}
                className="basket-button"
          content="Buy"
          labelPosition="right"
          icon="checkmark"
          positive
        />
                <hr></hr>
                <Card.Group itemsPerRow={4}>{dataList}</Card.Group>
                </div>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default Basket;