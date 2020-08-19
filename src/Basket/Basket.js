import React, { Component } from 'react';
import { Grid, Header, Card, Image } from 'semantic-ui-react';
import "./Basket.css";
import { inject, observer } from 'mobx-react';

@inject("ProductStore", "UserStore")
@observer
class Basket extends Component {
    getDataList() {
        let products = this.props.ProductStore.getProducts;
        let user = this.props.UserStore.getUser;
        const baskets = user.basket;
        
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
        console.log(dataList);
        return dataList;
      }
    render() {
        let dataList = this.getDataList();
        return (
            <Grid.Row >
                <Grid.Column>
                    <div className="basket-container">
                <Header as="h1">Basket</Header>
                <hr></hr>
                <Card.Group itemsPerRow={4}>{dataList}</Card.Group>
                </div>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default Basket;