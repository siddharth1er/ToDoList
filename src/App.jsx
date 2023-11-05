import React, {useState} from "react";
import ToDolists from './ToDoLists';

const App=() =>{
    const [inputList,setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvents = (event) =>{
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems,inputList];
        })
        setInputList('');

    }; 

    const deleteItems = ()=>{
        console.log('deleted');

        setItems((oldItems) => {
            return oldItems.filter((arrElem,index)=> {
                return index!==id;  

            });
        });
    };
return(
<>
<div className="main_div">
<div className="center_div">
    <br />
    <h1>TODO List</h1>
    <br />
    <input
    type="text"
    placeholder="Add a Items"
    value={inputList}
    onChange={props.deleteItems}/>
    <button> onClick={listOfitems} + </button>
    <ol>
        <li>{inputList}</li>
    
    {Items.map( (itemval, index)  => {
       return <ToDoLists 
       key ={index}
    id={index} text={itemval}
       onSelect={deleteItems} />;
    })}
    
    </ol>
</div>
</div>
</>
);
};

export default App;