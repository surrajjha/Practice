import React from 'react';
import './App.css';
import { Route, BrowserRouter, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Breakfast from './Components/Breakfast'
import Dinner from './Components/Dinner'

import Lunch from './Components/Lunch'
import Order from './Components/Order'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
     
      Breakfast: [{

        name: "  Pancakes and Maple Syrup",
        rating: 4.6,
        Cost: "₹300",
      },
      {

        name: "  Eggs Benedict ",
        rating: 4.2,
        Cost: "₹400",

      },
      {

        name: "Bagel with Cream Cheese",
        rating: 4.4,
        Cost: "₹400",
      },
      {

        name: "Cinnamon Rolls ",
        rating: 4.6,
        Cost: "₹150",
      },
      {
        name: "Belgian Style Waffles ",
        rating: 4.6,
        Cost: "₹200",
      },
      {

        name: "Breakfast Burrito ",
        rating: 4.6,
        Cost: "₹190",


      },
      {
        name:" Breakfast Burrito",
        rating:4.3,
        Cost:330
      },
      {
        name:"French Toast",
        rating:4.2,
        Cost:190
      },
      {
        name:"Bacon and Eggs",
        rating:4.0,
        cost:200
      }
    ],
      

    Lunch: [{

      name: "Allahabad Ki Tehri",
      address: "60, Jyothi Nivas College Road, Koramangala 5th Block, Bang",
      rating: 4.2,
      Cost: "₹289",
    },
    {
      name:" Low Fat Dahi Chicken",
      rating:4.3,
      Cost:499
    },
    {
      name:"Kolhapuri Vegetables",
      rating:4.5,
      Cost:299
    },
    {
      name:"Urlai Roast",
      rating:4.3,
      Cost:370

    },
    {
      name:" Paneer Achaari",
      rating:3.3,
      Cost:400
    },
    {
      name:" Dal Makhani",
      rating:4.4,
      Cost:299
    },
    {
      name:"Black Channa and Coconut Stew",
      rating:4.3,
      Cost:270
    },
    {
      name:"Urlai Roast",
      rating:300,
      Cost:4.2
    },
    {
      name:"Biryani",
      rating:4.4,
      Cost:370
    }


  ],
  Dinner :[{
    name:"BUTTER CHICKEN",
    rating:4.6,
    Cost:280
  },
  {
    name:"TANDOORI CHICKEN",
    rating:4.3,
    Cost:450
  },
  {
    name:"MALAI KOFTA",
    rating:4.7,
    Cost:180
  },
  {
    name:"MATAR PANEER",
    rating:4.1,
    Cost:280
  },
  {
    name:"Chana Masala",
    rating:3.2,
    Cost:120
  },
  {
    name:"Chili Chicken",
    rating:4.0,
    Cost:180
  },
  {
    name:"Navratan Korma (Nine Gem Curry)",
    rating:3.9,
    Cost:180
  },
  {
    name:"Uthapam",
    rating:3.9,
    Cost:220
  },
  {
    name:"Sambar",
    rating:3.8,
    Cost:120
  },
  {
    name:"SAMOSAS",
    rating:4.2,
    Cost:120
  }

  ]
}



}





render() {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="App ">
        <div className="row ml-7">
          <a className="ml-5">

            <br></br>
          

            <Link to="/breakfast"><h4>BreakFast</h4></Link>
          </a>

          <a className="ml-5">

            <br></br>
            <Link to="/lunch"><h4>Lunch</h4></Link>
          </a>

          <a className="ml-5">

            <br></br>
            <Link to="/dinner"><h4>Dinner</h4></Link>
          </a>

        </div>

        <Route path="/breakfast" exact render={() => <Breakfast input={this.state.Breakfast} />} />
        <Route path="/lunch" render={() => <Lunch input={this.state.Lunch} />} />
        <Route path="/dinner" render={() => <Dinner input={this.state.Dinner} />} />
        <Route path="breakfast/order" exact  Component={Order}/>

      
      </div>
     
    </BrowserRouter>
  );
}
}


export default App;
       
      


     


   








   
     
    
    
    
   


  


     












