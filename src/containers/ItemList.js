import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions';

class ItemList extends Component {
    handleBuyButton = (id) => {
        return (event) => {
            const addItem = this.props.addItem;

            event.preventDefault();
            addItem(id);
        }
    }

    render() {
        const items = this.props.items;
        return (
            <div className="ItemList">
                {items.map(item => (
                    <div className="Item">
                        <div>{item.title}: ${item.price}</div>
                        <div>
                            <button className="button" onClick={this.handleBuyButton(item.id)}>Buy</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {items: state.availableItems}
}

const mapDispatchToProps = function(dispatch) {
    return {
        addItem: function(id) {
            dispatch(addItem(id));
        }
    }
}

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default ItemListContainer;
