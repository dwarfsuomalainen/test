import MyList from './MyList';
import {useState} from "react"

    const MyContainer = (props, onAdd) =>{
        const [items,setItems] = useState([
            {id: "1", text: "This is first item of list"},
            {id: "2", text: "This is second item of list"}
        ]);
        const[text,setText] = useState('');

        const onSubmit = (e) => {
            e.preventDefault()
    
            onAdd({name: text})
            setText("")
    
        }
      


    return (
        <div>
        <MyList items={items} header={props.header} />
        
        <form onSubmit={onSubmit}>
            <label>Add items to List</label>
            <textarea placeholder='add new item' onChange={(e) => setText(e.target.value)} value={text}></textarea>
            <input type="submit" value="Push to Add item"></input>
        </form>  
        </div>
    )
}

export default MyContainer 