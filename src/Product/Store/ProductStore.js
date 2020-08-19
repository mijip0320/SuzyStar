import { observable, computed, action } from "mobx";
import Products from "../Data/Products";
class ProductStore {
  @observable products = Products;
  @observable selectProducts = Products;
  @observable selectMenu = "";
  @observable product = Products[0];
  @observable open = false;
  @observable list = [
    "Music",
    "Photo",
    "Concert",
    "Living",
    "Beauty",
    "Accessory",
  ];

  @computed get getProducts() {
    return this.products;
  }

  @computed get getSelectProducts() {
    return this.selectProducts;
  }
  @computed get getProduct() {
    return this.product;
  }
  @computed get getOpen() {
    return this.open;
  }
  @computed get getList() {
    return this.list;
  }

  @action
  setProduct(data) {
    this.product = data;
  }

  @action
  setOpen() {
    this.open = true;
  }

  @action
  setClose() {
    this.open = false;
  }

  @action
  updateProduct(price) {
    let updatePrice = price;
    this.product = { ...this.product, price: updatePrice };
    this.selectProducts = this.products.map((product) =>
      product.id === this.product.id
        ? { ...product, price: updatePrice }
        : product
    );
    this.products = this.selectProducts;
    alert("수정됐습니다.")
  }

  @action
  deleteProduct() {
    this.products = this.products.filter(
      (product) => this.product.id !== product.id
    );
    this.selectProducts = this.selectProducts.filter(
      (product) => this.product.id !== product.id
    );
    this.setClose();
  }

  @action
  setSelectProducts(name) {
    this.selectProducts = this.products.filter(
      (product) => product.property === name
    );
    this.selectMenu = name;
  }
}
export default new ProductStore();
