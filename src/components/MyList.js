function MyList(props){


    return (
        <>
            <h1>{props.header}</h1>
            <ol>
                {props.items.map((item) => <li key={item.id}>{item.text}</li>)}
            </ol>
            
        </>
    )
}

export default MyList