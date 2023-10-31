const ListItem=(props)=>{
    console.log(props.val.name,props.val.age);
    return(
        <div>
        {props.val.name} ({props.val.age} years old)
        </div>
    );
}
export default ListItem;