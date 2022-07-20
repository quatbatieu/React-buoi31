import React, { Component } from "react";
import data from "./data.json";
import "./style.css";

export default class Glass extends Component {
  constructor() {
    super();
    this.state = {
      // lưu trữ đường dẫn hình ảnh
      imgUrl: "./img/v1.png",
      // lưu trữ data của glass
      changeName: "GUCCI G8850U",
      changePrice: 30,
    };
  }

  changeGlass = (img, names, frices) => {
    const imgUrl = `./img/${img}.png`;
    const changeName = names;
    const changePrice = frices;
    this.setState({ imgUrl, changeName, changePrice });
  };
  render() {
    return (
      <div className="container">
        <div className="rows">
          <div className="left">
            <img className="imgbg" src="./img/model.jpg" alt="" />
            <div className="imgs">
              <img
                src={this.state.imgUrl}
                // src="./img/v1.png"
              />
            </div>
            <div className="text">
              <div className="textes">
                <h1>{this.state.changeName}</h1>
                <h2>${this.state.changePrice}</h2>
              </div>
              <span>
                Light pink square lenses define these sunglasses, ending with
                amother of pearl effect tip.
              </span>
            </div>
          </div>
          <div className="right">
            <ul>
              <li
                className="mb-3"
                onClick={() => this.changeGlass("v1", "GUCCI G8850U", 30)}
              >
                <img src="./img/g1.jpg" alt="icon" width="70px" />
              </li>
              <li
                className="mb-3"
                onClick={() => this.changeGlass("v2", "GUCCI G8759H", 50)}
              >
                <img src="./img/g2.jpg" alt="icon" width="70px" />
              </li>
              <li
                className="mb-3"
                onClick={() => this.changeGlass("v3", "DIOR D6700HQ", 30)}
              >
                <img src="./img/g3.jpg" alt="icon" width="70px" />
              </li>
              <li
                className="mb-3"
                onClick={() => this.changeGlass("v4", "DIOR D6005U", 70)}
              >
                <img src="./img/g4.jpg" alt="icon" width="70px" />
              </li>
              <li
                className="mb-3"
                onClick={() => this.changeGlass("v5", "PRADA P8750", 40)}
              >
                <img src="./img/g5.jpg" alt="icon" width="70px" />
              </li>
              <li
                className="mb-3"
                onClick={() => this.changeGlass("v6", "PRADA P9700", 60)}
              >
                <img src="./img/g6.jpg" alt="icon" width="70px" />
              </li>
              <li
                className="mb-3"
                onClick={() => this.changeGlass("v7", "FENDI F8750", 80)}
              >
                <img src="./img/g7.jpg" alt="icon" width="70px" />
              </li>
              <li
                className="mb-3"
                onClick={() => this.changeGlass("v8", "FENDI F8500", 100)}
              >
                <img src="./img/g8.jpg" alt="icon" width="70px" />
              </li>
              <li
                className="mb-3"
                onClick={() => this.changeGlass("v9", "FENDI F4300", 60)}
              >
                <img src="./img/g9.jpg" alt="icon" width="70px" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
