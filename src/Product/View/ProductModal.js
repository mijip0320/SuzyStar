// import React, { Component } from "react";

import React, { useState } from "react";
import { Button, Header, Image, Modal, Input } from "semantic-ui-react";

const ProductModal = (props) => {
  const [price, setPrice] = useState("");
  const onChange = (e) => {
    setPrice(e.target.value);
  };

  let { open, onClose, product, user, onUpdate, onDelete } = props;
  console.log(product);
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Product</Modal.Header>
      <Modal.Content image>
        <Image wrapped src={product.imgUrl} style={{ marginBottom: 10 }} />

        <Modal.Description>
          <Header>{product.pName}</Header>
          <p>{product.des}</p>
          <p>{product.price}</p>
          <br></br>
          <span>price : </span>
          <Input
            value="price"
            placeholder={product.price}
            onChange={(e) => onChange(e)}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {user.userId === "admin" && (
          <Button
            content="Update"
            color="orange"
            onClick={() => onUpdate(price)} //?
          ></Button>
        )}
        {user.userId === "admin" && (
          <Button
            content="Delete"
            color="red"
            onClick={onDelete} //?
          ></Button>
        )}

        <Button
          content="Basket"
          color="black"
          onClick={onClose} //?
        ></Button>
        <Button
          content="Buy"
          labelPosition="right"
          icon="checkmark"
          onClick={onClose} //?
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ProductModal;
