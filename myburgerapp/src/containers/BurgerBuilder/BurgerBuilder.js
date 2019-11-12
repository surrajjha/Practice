import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControl from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICES= {
    salad:5,
    cheese:3,
    meat:6,
    bacon:2

}
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalprice:4
    }
   addIngredientHandler=(type) => {
       const oldCount=this.state.ingredients[type];
       const updatedCount=oldCount+1;
       const updatedIngredients={
           ...this.state.ingredients
       };
       updatedIngredients[type]=updatedCount;
       const priceAddition=INGREDIENTS_PRICES[type];
       const oldPrice=this.state.totalprice;
       const newPrice=oldPrice+priceAddition;
       this.setState({totalprice:newPrice,ingredients:updatedIngredients});
       //this.updatePurchaseState(updatedIngredients);
   }
   removeIngredientHandler=(type) => {
       const oldCount=this.state.ingredients[type];
       const updatedCount=oldCount-1;
       const updatedIngredients={
           ...this.state.ingredients
       };
       updatedIngredients[type]=updatedCount;
       const priceAddition=INGREDIENTS_PRICES[type];
       const oldPrice=this.state.totalprice;
       const newPrice=oldPrice-priceAddition;
       this.setState({totalprice:newPrice,ingredients:updatedIngredients});
   }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControl
                ingredientAdded={this.addIngredientHandler}
                 ingredientSubstracted={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;