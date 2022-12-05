import React, { useState } from "react";
import "./Count.css";

const Count = () => {

const [counter, setCounter] = useState(0)

const [text, setText] = useState('black');

const increment = () => {
	setCounter(counter + 100)
  setText(counter >= 0 ? 'blue':'red' );

}

const decrement = () => {
	setCounter(counter - 1)
  setText(counter <= 0 ? 'red' : 'blue');

}

return (
	<div className="page" >
	<div >
		  <small style={{ color:text}} className="container_text">{counter}</small>
	</div>
  <div >

    
		<button className="btn2"
		onClick={decrement}><span>-</span></button>

    &nbsp;&nbsp;


		<button className="btn"
		onClick={increment}>++</button>
	</div>

	</div>

)
}

export default Count;
/* le projet est bien exécutable */