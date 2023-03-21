import classes from '../css/Screen.module.css'

const History=(props)=>{
    return(
    <p className={classes.exp}>{props.children}</p>
    )
}
const Val=(props)=>{
    return(
        <p className={props.is_focused ? classes.focused :classes.curval} >{props.children}</p>
        )    
}
const Exp=(props)=>{
    return(
        <p className={props.is_focused ? classes.cur_expfocused : classes.curexp} >{props.children}</p>
        )    
}
const Screen=(props)=>{
    let hist=[]
    let n=1
    for (let item of props.cal_data.history){
        hist.push(item.exp)
        hist.push(<br key={n}/>)
        hist.push('='+item.val)
        hist.push(<br key={`${n}-br`}/>)
        n=n+1;
    }
    return(
        <div className={classes.screen}>
            <History >{hist}</History>
            <Exp is_focused={props.cal_data.is_focused} >{props.cal_data.cur_exp}</Exp>
            <Val is_focused={props.cal_data.is_focused}>= {props.cal_data.cur_val}</Val>

        </div>
    )
}
export default Screen