import MyList from './MyList';
import {useState} from "react"

    const MyContainer = () =>{
        const [items,setItems] = useState([
            {id: "1", text: "This is first item of list"},
            {id: "2", text: "This is second item of list"}
        ]);
        console.log({items});
        //console.log(props);

    return (
        
        MyList({items})
        
    )
}

export default MyContainer 