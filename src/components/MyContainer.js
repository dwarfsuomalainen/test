import MyList from './MyList';
import {useState} from "react"

    const MyContainer = (props) =>{
        const [items,setItems] = useState([
            {id: "1", text: "This is first item of list"},
            {id: "2", text: "This is second item of list"}
        ]);
        const[text,setText] = useState('');
        
        const addLine = (line) => {
            const id = Math.floor(Math.random()*1000000 + 1000)
            const newLine = {id,...line}

            setItems([...items, newLine])
          }
        const onSubmit = (e) => {
            e.preventDefault()
    
            addLine({text: text})
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