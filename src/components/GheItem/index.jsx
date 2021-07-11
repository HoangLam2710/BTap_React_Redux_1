import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class GheItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isBooking: false,
        };
    }

    onSelectedSeat = () => {
        this.props.dispatch({
            type: "SELECT_SEAT",
            payload: this.props.seat,
        });
    };

    componentDidUpdate(prevProps, prevState) {
        const index = this.props.danhSachGheDangDat.findIndex(
            (item) => item.SoGhe === this.props.seat.SoGhe
        );
        let result = true;
        if (index === -1) {
            result = false;
        }

        if (prevState.isBooking !== result) {
            this.setState({
                isBooking: result,
            });
        }
    }

    render() {
        const { SoGhe, TrangThai } = this.props.seat;
        const buttonHTML = TrangThai ? (
            <button className="gheitem btn bg-danger" disabled>
                {SoGhe}
            </button>
        ) : this.state.isBooking ? (
            <button
                className="gheitem btn bg-success"
                onClick={this.onSelectedSeat}
            >
                {SoGhe}
            </button>
        ) : (
            <button
                className="gheitem btn bg-secondary"
                onClick={this.onSelectedSeat}
            >
                {SoGhe}
            </button>
        );
        return buttonHTML;
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.ghe.danhSachGheDangDat,
    };
};

export default connect(mapStateToProps)(GheItem);
