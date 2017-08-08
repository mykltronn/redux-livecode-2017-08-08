import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearCart, updateQty} from "../actions";

class Cart extends Component {
    handleQtyChange = (id) => {
        const updateQty = this.props.updateQty;
        return (event) => {
            this
                .props
                .updateQty(id, event.target.value);
        }
    }

    render() {
        const cart = this.props.cart;
        return (
            <div className="Cart">
                <h2>Cart</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr className="CartItem">
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>
                                    <input type="text" value={item.qty} onChange={this.handleQtyChange(item.id)}/>
                                </td>
                                <td>${item.qty * item.price}</td>
                            </tr>
                        ))}
                        <tr>
                            <th colSpan="3">Total</th>
                            <td>${this.props.total}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="button" onClick={this.props.clearCart}>
                  Clear Cart
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const cart = [];
    for (let id in state.cart) {
        const itemIdx = state
            .availableItems
            .findIndex(item => item.id == id)
        const item = state.availableItems[itemIdx];
        cart.push(Object.assign({}, item, {qty: state.cart[id]}));
    }

    let total = cart.reduce(function(total, item) {
        return total + (item.price * item.qty);
    }, 0);

    return {cart: cart, total: total}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQty: (id, qty) => {
            console.log(id, qty);
            return dispatch(updateQty({id: id, qty: qty}));
        },
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
