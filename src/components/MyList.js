function List(){
    const header = "This is a header of List";
    const items = [
    {id: "1", text: "This is first item of list"},
    {id: "2", text: "This is second item of list"}
    ];
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => <li key={item.id}>{item.text}</li>)}
            </ol>
            
        </div>
    )
}

export default List