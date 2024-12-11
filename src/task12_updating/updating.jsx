import React, { Component } from "react";
import axios from "axios";
import CardsCom from "../task5_bootstrap/cards";
import Spinner from 'react-bootstrap/Spinner';

class UpdateLifycycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      products: null,
    };
  }

  componentDidUpdate(PrevSprops, PresvState) {
    if (PresvState.count !== this.state.count) {
      axios
        .get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res) => {
          this.setState({ products: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  shouldComponentUpdate(nextprop, nextstate) {
    if (this.state.count >= 10) {
      return false;
    } else {
      return true;
    }
  }

  getSnapshotBeforeUpdate(PrevSprops, PresvState) {
    console.log("PresvState", PresvState.count);
    return null;
  }

  handleIncre = (a) => {
    this.setState({count : a})
  };


  render() {
    const { count, products } = this.state;

    return (
      <div>
        <h1>List of Products</h1>
        <h1>Product {count}</h1>

        <div >
          <button style={styling.obj} onClick={()=>this.handleIncre(1)}> 1 </button>
          <button style={styling.obj} onClick={()=>this.handleIncre(2)}> 2 </button>
          <button style={styling.obj} onClick={()=>this.handleIncre(3)}> 3 </button>
          <button style={styling.obj} onClick={()=>this.handleIncre(4)}> 4 </button>
          <button style={styling.obj} onClick={()=>this.handleIncre(5)}> 5 </button>
          <button style={styling.obj} onClick={()=>this.handleIncre(6)}> 6 </button>
          <button style={styling.obj} onClick={()=>this.handleIncre(7)}> 7 </button>
          <button style={styling.obj} onClick={()=>this.handleIncre(8)}> 8 </button>
          <button style={styling.obj} onClick={()=>this.handleIncre(9)}> 9 </button>
          <button style={styling.obj} onClick={()=>this.handleIncre(10)}> 10 </button>
        </div>
        
        {!products ? (
          <div style={{margin:"25px"}}>
              <Spinner animation="border" variant="primary" />
          </div>
        ) : (
            <div style={{width:"450px",margin:"auto", alignItems:"center", marginTop:"20px"}}>
          <CardsCom
            key={products.id}
            image={products.image}
            title={products.title}
            desc={products.description}
            price={products.price}
          />
          </div>
        )}
      </div>
    );
  }
}


const styling={
  obj:{
    color:"white",
    backgroundColor:"blue", padding:"10px",border:"none", margin:"3px", width:"50px"
  }
}
export default UpdateLifycycle;
