import React, { Component } from "react";
import { connect } from "react-redux";
import GheItem from "../GheItem";
import "./style.css";

class DanhSachGhe extends Component {
    renderGhe = () => {
        const gheHTMLS = this.props.ghe.map((item) => {
            return (
                <div key={item.SoGhe} className="col-3 mb-2">
                    <GheItem seat={item} />
                </div>
            );
        });
        return gheHTMLS;
    };

    render() {
        return (
            <div className="col-6">
                <div className="danhSachGhe">
                    <h5 className="p-2">Tài xế</h5>
                    <div className="row">{this.renderGhe()}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ghe: state.ghe.danhSachGhe,
    };
};

export default connect(mapStateToProps)(DanhSachGhe);
