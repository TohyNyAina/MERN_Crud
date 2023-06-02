import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Body from './components/body';
import Cart from './components/Cart';

import './styles/body.css';

const App = () => {
	const [list , setList] = useState([]);

	const handleClick = (item)=>{
		let isPresent = false;
		list.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		
		setList([...list, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		list.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = list;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setList([...tempArr])
	}

  return (
	<React.Fragment>
		
		<Navbar/>
		<Cart list={list} setList={setList} handleChange={handleChange} />
		<Body handleClick={handleClick} />


			 
		
		
	</React.Fragment>
  )
}

export default App