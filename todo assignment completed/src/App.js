import React from "react";
import './App.css'
import ToDos from './Components/ToDos'

class App extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return(
      <div className="App">
         <h1>Hey wasssup!!</h1>
         <ToDos/>
      </div>
    )
  }
}
export default App