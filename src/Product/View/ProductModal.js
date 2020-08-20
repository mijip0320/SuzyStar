import React, { useState } from "react";
import { Button, Header, Image, Modal, Input } from "semantic-ui-react";

const ProductModal = (props) => {
  const [price, setPrice] = useState("");
  const onChange = (e) => {
    let updatePrice = e.target.value;
    setPrice(updatePrice);
  };

  let { open, onClose, product, user, onUpdate, onDelete, addBasket } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Product</Modal.Header>
      <Modal.Content image>
        <Image wrapped src={product.imgUrl} style={{ marginBottom: 10 }} />

        <Modal.Description>
          <Header>{product.pName}</Header>
          <p>
            {product.des.split("\n").map((i, idx) => {
              return <p key={idx}>{i}</p>;
            })}
          </p>
          <p>{product.price}</p>
          <br></br>
          {user.userId === "admin" && <>
          <span>price : </span>
          <Input
            size="mini"
            placeholder={product.price}
            onChange={(e) => onChange(e)}
          />
          </>}
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
          onClick={addBasket} //?
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