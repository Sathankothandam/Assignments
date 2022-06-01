import './App.css';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Restaurants from './components/Restaurants';
import Offers from './components/Offers';

import userInfo from "./data/userInfo.json"
import offers from './data/offers.json';
import restaurants from "./data/restaurants.json";  
import {useState} from 'react';

// const filters = {
//   "1" : "Cost High to Lost",
//   "2" : "Cost Lost to High",
//   "3" : "Ratings",
//   "4" : "Delivery Time",
//   "5" : "Relevance",
// };
const filters = ["Cost High to Lost","Cost Lost to High","Ratings","Delivery Time","Relevance"];

function App() {  

  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(restaurants);

  const updateFilter = (newFilter) =>{
      switch(newFilter){
        case "Cost High to Lost":  {
          setFilterBy("Cost High to Lost");
          data.sort((a,b)=>b.costForTwo -a.costForTwo);
          setData([...data]);
          break;
        }
        case "Cost Lost to High":  {
          setFilterBy("Cost Lost to High");
          data.sort((a,b)=>a.costForTwo -b.costForTwo);
          setData([...data]);
          break;
        }
        default:{
          setData(restaurants)
          break;
        }
      }
  };  

  return (
    <div>
     <Navbar {...userInfo.location}/> 
     <Offers offers={offers}/>
     <section className="near-you">
     <Filters 
          filters={filters} 
          currentFilteredBy ={filterBy} 
          updateFilter={updateFilter}
      />
     <Restaurants restaurants={data} />
     </section>
    </div>
  );
}

export default App;
