import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/dashboard';
import Items from './Components/Items';
import Footer from './Components/Footer';
import Additem from './Components/Additem';
import Explore from './Components/Explore';
import AddItem2 from './Components/AddIteams';
function App() {
  return (
    <div>
<Dashboard/>
<Items/>
<Items/><Items/><Items/>
<Footer/>
<h3>Page 2</h3>
<Additem/>
<h3>PAge 3</h3>
<Explore/>
<h3>PAge 4</h3>
<AddItem2/>

<Explore/>
    </div>
   
  );
}

export default App;
