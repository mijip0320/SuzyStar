import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const ProductModal = (props) => {
  let { open, onClose, product } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Product</Modal.Header>
      <Modal.Content image>
        <Image wrapped src={product.imgUrl} style={{ marginBottom: 10 }} />

        <Modal.Description>
          <Header>{product.pName}</Header>
          <p>{product.des}</p>
          <p>{product.price}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="black"
          onClick={onClose} //?
        >
          Basket
        </Button>
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
