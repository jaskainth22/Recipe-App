import React, { Component } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      recipes: [
          {
            id:0,
            title: "Pasta",
            ingredients: ['flour','water'],
            instructions : "Mix ingredients",
            img:"https://www.thechunkychef.com/wp-content/uploads/2019/09/One-Pot-Spaghetti-feat.jpg"
          },
          {
            id:1,
            title:"MilkShake",
            ingredients:['Milk','fruits', 'IceCream'],
            instructions : "Mix ingredients",
            img:"https://images-gmi-pmc.edge-generalmills.com/2a612714-ee3e-4198-89fd-3f80215c0ef6.jpg"
          },
          {
            id:2,
            title:"Maggi",
            ingredients:['Maggi','Water', 'Vegetables','Maggi Masala'],
            instructions : "Made in 2 minutes",
            img:"https://mypullzone-9vexd6dl53at.netdna-ssl.com/wp-content/uploads/2020/01/Vegetable-Masala-Maggi-Recipe-Step-By-Step-Instructions-1024x900.jpg"
          }
      ],
      nextRecipeId:3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return{
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes : [...this.state.recipes, newRecipe],
        showForm : false
      }
    })
  }

  onDelete(id)
  {
      const recipes = this.state.recipes.filter(r => r.id !== id);
      this.setState({recipes});
  }
   

  render(){
    const {showForm} = this.state;
    return(
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        {showForm ? <RecipeInput 
          onSave={this.handleSave}
          onClose={() => this.setState({showForm: false})}
        /> :
         null}
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
        </div>
    )
  }
} 

export default RecipeApp;
