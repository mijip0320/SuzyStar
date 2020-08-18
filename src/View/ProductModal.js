import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

//const { open, setOpen } = useState(false);

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onClose = () => {
    console.log("onClose");
    this.setState({ open: false });
  };

  onOpen = () => {
    this.setState({ open: true });
  };

  render() {
    let { open } = this.state;
    return (
      <div>
        <Modal
          open={open}
          onOpen={this.onOpen}
          onClose={this.onClose}
          trigger={<Button>Show Modal</Button>}
        >
          <Modal.Header>Product</Modal.Header>
          <Modal.Content image>
            <Image
              src="productImages/productedit.png"
              style={{ marginBottom: 10 }}
            />

            <Modal.Description>
              <Header>OFFICIAL FANLIGHT</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address. OFFICIAL FANLIGHT
              </p>
              <p>Total: 35,000 WON</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="black"
              onClick={this.onClose} //?
            >
              Basket
            </Button>
            <Button
              content="Buy"
              labelPosition="right"
              icon="checkmark"
              onClick={this.onClose} //?
              positive
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ProductModal;
