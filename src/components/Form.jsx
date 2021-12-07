
function Form ({title, children}){
    //console.log(props);
    console.log('Form');
    return (
        <>
            
            <h2>{title}</h2>
            {children}
            <input type="text" placeholder="soy input" /><br/>
            
        </>
    )
}
export default Form
