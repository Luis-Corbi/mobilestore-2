const estados= ['item 1', 'item 2', 'item 3']


const Item = ({valor}) => {
    return (
        <button>{valor}</button>
    )
}


function ComponenteConteiner() {

    const items = estados.map(t => <Item valor={t}/>)

    
    return (
        <div>
            {items}
        </div>
    )
}

export default ComponenteConteiner
