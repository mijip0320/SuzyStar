import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

//const { open, setOpen } = useState(false);

class ProductModal extends Component {
  render() {
    let { open, product, onClose } = this.props;
    return (
      <Modal open={open} onClose={onClose}>
        <Modal.Header>Product</Modal.Header>
        <Modal.Content image>
          <Image wrapped src={product.imgUrl} style={{ marginBottom: 10 }} />

          <Modal.Description>
            <Header>{product.pName}</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address. OFFICIAL FANLIGHT
            </p>
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
  }
}

export default ProductModal;
