import React, { Component } from "react";
import axios from "axios";
import api from "../api/api";
import "./Shoes.css"
import Input from "./input";
import {put} from "../api/api"


class Shoes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shoes: []
        };
    }

    async componentDidMount() {
        const {data} =await api.get('shoes')
        this.setState({shoes: data})
        // console.log("first call", this.state.users)
      }

      async getSingleShoe(id) {
         let shoe = await api.get(`shoes/${id}`) 
         console.log("shoe", shoe)

      }

      create = async (value) => {
        try {
          if (value.name.length < 6) {
            throw new Error("must be more than 5 letters");
          }
          const newItem = {
            name: value.name,
          };
          const { data } = await api.shoes("/shoes", newItem);
    
          this.setState((state) => {
            return { data: [...state.data, data] };
          });
        } catch (e) {
          this.setState({ errorMsg: e.message });
        }
      };
      
      delete = async (id) => {
        await api.delete(`/shoes/${id}`);
        console.log(this.state.shoes);
        const shoes = this.state.shoes.filter((el) => el.id !== id);
        this.setState({ shoes });
      };
    
      update = async (updatedName, id) => {

        const { brand } = await put(`shoes/${id}`, {brand: updatedName});
        console.log("shoes", brand);
        const index = this.state.shoes.findIndex((el) => el.id === id);
        const newItems = [...this.state.shoes];
        newItems[index].brand = brand;
        this.setState({ shoes: newItems });
      };
     
    render() {
        const data = this.state.shoes;
        
        const shoeData = data.map(item => <div className="product-list" key={item.id}>
        <h1>{item.brand}</h1>
        <img src={item.img} />
        <h5>${item.price}</h5>
            <div className="btn">
                <Input id={item.id} handleCallback={this.update} />
                <button onClick={() => {this.delete(item.id)}} className="delete">Delete</button>
                
            </div>
    
        
        </div>
            
            )
        console.log("second call", data);
       
        return(
            <div className="container">
                {console.log("hello",data[0])}
            {shoeData}
            </div>
        )
    }

   





}

export default Shoes;