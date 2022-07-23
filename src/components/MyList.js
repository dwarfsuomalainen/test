function List(props){
    const header = "This is a header of List";
    const items = [
    {id: "1", text: "This is first item of list"},
    {id: "2", text: "This is second item of list"}
    ];
    return (
        <>
            <h1>{header}</h1>
            <ol>
                {items.map((props) => <li key={props.id}>{props.text}</li>)}
            </ol>
            
        </>
    )
}

export default List