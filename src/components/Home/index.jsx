import React, { Component } from "react";
import DanhSachGhe from "../DanhSachGhe";
import DanhSachGheDangDat from "../DanhSachGheDangDat";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1 style={{ color: "#ffc107", textAlign: "center" }}>
                    ĐẶT VÉ XE BUS HÃNG CYBERSOFT
                </h1>
                <div className="row">
                    <DanhSachGhe />
                    <DanhSachGheDangDat />
                </div>
            </div>
        );
    }
}

export default Home;
