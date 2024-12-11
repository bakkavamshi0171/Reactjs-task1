import React, { Component } from "react";
import CardsCom from "../task5_bootstrap/cards";
import Spinner from "react-bootstrap/Spinner";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
    };
  }
//   static getDerviedStateFromProps(props, state) {
//     if (!this.state.loading) {
//       return { loading: true };
//     }
//     return null;
//   }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => this.setState({ products: json, loading: false }))
        .catch((error) => {
          console.error("Error fetching products:", error);
          this.setState({ loading: false });
        });
    }, 5000);
  }

  render() {
    return (
      <>
        {this.state.loading ? (
            <div style={{textAlign:"center", width:"100%", fontSize:"30px"}}> 
                <Spinner animation="border" variant="primary" />
                
            </div>
        ) : (
          this.state.products.map((a) => {
            return (
              <CardsCom
                key={a.id}
                image={a.image}
                title={a.title}
                price={a.price}
                desc={a.description}
              />
            );
          })
        )}

        {/* {this.state.loading ? (<Spinner animation="border" variant="primary" />) : this.state.products.length > 0 ? ( this.state.products.map((a) => (<CardsCom key={a.id} image={a.image} title={a.title} price={a.price} desc={a.description}/>))) : (<p>No products available.</p> )} */}
      </>
    );
  }
}

export default LifeCycle;
