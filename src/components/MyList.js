function MyList(header,items){
    
    return (
        <>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => <li key={item.id}>{item.text}</li>)}
            </ol>
            
        </>
    )
}



export default MyList