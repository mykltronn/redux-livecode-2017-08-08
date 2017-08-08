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
                <h2>Items</h2>
                {items.map(item => (
                    <div key={item.id} className="Item">
                        {item.title}: ${item.price}
                            <button className="button" onClick={this.handleBuyButton(item.id)}>Buy</button>

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
