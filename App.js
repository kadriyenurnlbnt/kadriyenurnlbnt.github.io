import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';

export default class App extends Component {

  state={currentCategory:"", products:[]};

  componentDidMount(){
    this.getProducts();
  }
  
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
};

getProducts =()=>{
  fetch("http://localhost:3000/products")
  .then(response=>response.json())
  .then(data=>this.setState({products:data}))
}

  render() {
    let productInfo ={title: "ProductList"}
    let categoryInfo = {title: "CategoryList"}
    
      return (
        <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList 
              products={this.state.products}
              currentCategory={this.state.currentCategory} info={productInfo}/>
            </Col>
          </Row>
        </Container>
  
  
      </div>
      );
   }
}
