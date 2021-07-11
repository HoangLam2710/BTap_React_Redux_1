import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachGheDangDat extends Component {
    cancleSeat = (item) => {
        this.props.dispatch({
            type: "CANCLE_SEAT",
            payload: item,
        });
    };

    render() {
        return (
            <div className="col-6">
                <h5>
                    Danh sách ghế đã đặt ({this.props.danhSachGheDangDat.length}
                    )
                </h5>
                <div className="danhSachGheDangDat">
                    {this.props.danhSachGheDangDat.map((item) => {
                        return (
                            <p key={item.SoGhe} className="mb-2">
                                Ghế: {item.TenGhe} ${item.Gia}{" "}
                                <button
                                    className="btn p-0 pb-1 text-danger"
                                    onClick={() => this.cancleSeat(item)}
                                >
                                    [Huỷ]
                                </button>
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.ghe.danhSachGheDangDat,
    };
};

export default connect(mapStateToProps)(DanhSachGheDangDat);
