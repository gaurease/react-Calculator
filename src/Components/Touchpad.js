import Symmrows from "./UI/Symmrows"
import classes from '../css/Touchpad.module.css'
const Touchpad=(props)=>{
    return (
        <div className={classes.touchpad}>
                <Symmrows dispatchCalc={props.dispatchCalc}/>
        </div>
    )
}

export default Touchpad