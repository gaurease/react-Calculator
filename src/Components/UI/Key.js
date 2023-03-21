import Button from "./Button"
import classes from '../../css/Numbers.module.css'
const Key=(props)=>{
    let w={width: `${props.width*80}px`}
    return(
        <div className={classes.number} style={w}>
            <Button id={props.val} dispatchCalc={props.dispatchCalc}>
                {props.val}
            </Button>
        </div>
    )
}

export default Key