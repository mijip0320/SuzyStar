import { List, Header } from "semantic-ui-react";
import "./ProductList.css";
import React from "react";

const ProductList = (props) => {
  const getDataList = () => {
    let datas = props.list;

    let dataList = datas.map((data, idx) => {
      return (
        <List.Item key={idx} onClick={() => props.selectProduct(data)}>
          <List.Content>
            <List.Header>{data}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
    return dataList;
  };
  let dataList = getDataList();
  return (
    <div className="product-list">
      <Header size="huge">Suzy</Header>
      <hr></hr>
      <List size="huge" animated verticalAlign="middle">
        {dataList}
      </List>
    </div>
  );
};

export default ProductList;

// class ProductList extends Component {
//   getDataList() {
//     let datas = this.props.list;
//     let dataList;

//     dataList = datas.map((data, idx) => {
//       return (
//         <List.Item key={idx} onClick={() => console.log(idx)}>
//           <List.Content>
//             <List.Header>{data}</List.Header>
//           </List.Content>
//         </List.Item>
//       );
//     });
//     return dataList;
//   }

//   render() {
//     let dataList = this.getDataList();
//     return (
//       <div className="product-list">
//         <Header size="huge">Suzy</Header>
//         <hr></hr>
//         <List size="huge" animated verticalAlign="middle">
//           {dataList}
//         </List>
//       </div>
//     );
//   }
// }

// export default ProductList;
