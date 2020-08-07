import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/React-Toastify.css"
import './App.css';
import { toast } from 'react-toastify';

function App() {

  const [cartItem, setCartItem] = useState([])

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id
    })

    if(isAlreadyAdded !== -1) {
      toast("Already Added In Cart", {
        type : "error"
      })
    }

    setCartItem([...cartItem, item])
  }

  const buyNow = () => {
    setCartItem([])

    toast("Purchase Complete", {
      type : "success"
    })
  }

  const removeItem = (item) => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;