import Key from "./Key"
import classes from '../../css/Symmrows.module.css'
const Symmrows=(props)=>{

    const uprows=<div className={classes.onerow}><Key val='CE' width={2} dispatchCalc={props.dispatchCalc}></Key><Key val='X' width={1} dispatchCalc={props.dispatchCalc} ></Key><Key val='=' width={1} dispatchCalc={props.dispatchCalc} ></Key></div>
    let keys=[  [ 0, 1, 2, '/'],
                [ 2, 3, 4, '+'],
                [ 5, 6, 7, '-'],
                [ 8, 9,'.','*']]
    const layout=keys.map((l,index)=>
        <div key={index} className={classes.onerow}>
        {l.map((key)=>
            <Key key={key} val={key} width={1} dispatchCalc={props.dispatchCalc}/>)}        
        </div>
        )

    return(
        <div>
            {uprows}
            {layout}
        </div>
    )
}

export default Symmrows