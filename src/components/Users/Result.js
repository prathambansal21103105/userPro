import Card from "../UI/Card";
import ListItem from "./ListItem";
import classes from './Result.module.css';
const Result=(props)=>{
    return(
        <Card className={classes.users}>
        <ul>
            {props.data.map((element)=>(
                <li><ListItem key={element.id} val={element}/></li>
            ))}
        </ul>
        </Card>
    );
}
export default Result;