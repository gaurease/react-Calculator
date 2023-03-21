import Screen from "./Screen"
import Touchpad from "./Touchpad"
import classes from '../css/Calculator.module.css'
import {useReducer} from 'react'

const cal_data={
    history:[],
    cur_val:0,
    cur_exp:'',
    is_focused:false
}
const calReducer=(state,action)=>{
    const operators={'+':'+','-':'-','*':'*','/':'/'}
    console.log("cur state is" ,state)
    if(state.is_focused)
    {
        if(action.type==='no')
        {   
            let new_history=state.history
            if(state.cur_exp!==state.cur_val.toString() && state.cur_exp!=='')
                new_history.push({exp:state.cur_exp,val:state.cur_val})
            let exp=action.val
            let val= (exp==='')?0:eval(exp)
            return {history:new_history,cur_exp:exp,cur_val:val,is_focused:false}
        }
        else if(action.type==='op')
        {
            let new_history=state.history
            if(state.cur_exp!==state.cur_val.toString() && state.cur_exp!=='')
                new_history.push({exp:state.cur_exp,val:state.cur_val})
            let cur_str=state.cur_val.toString()
            cur_str=cur_str.concat(action.val)
            let val=(cur_str.slice(0,-1)==='')?0:eval(cur_str.slice(0,-1))
            return {history:new_history,cur_exp:cur_str,cur_val:val,is_focused:false}
        }        
    }
    switch(action.type){
        case '=':
            {
            if(state.is_focused)
                return state
            let val=0
            if(state.cur_exp.slice(-1) in operators)
                val=state.cur_exp.slice(0,-1)===''? 0:eval(state.cur_exp.slice(0,-1))
            else
                val=state.cur_exp===''?0:eval(state.cur_exp)
            return {...state,is_focused:true,cur_val:val}
            }
        case 'no':
            {
            let exp=state.cur_exp
            if(exp==='0')
                exp=action.val
            else 
                exp=exp.concat(action.val)
            let val=(exp==='')?0:eval(exp)
            return {...state,cur_val:val,cur_exp:exp,is_focused:false}
            }
        case 'op':
            {
            let exp=state.cur_exp
            if(exp.slice(-1) in operators)
                exp=exp.slice(0,-1)
            exp=exp.concat(action.val)
            return {...state,cur_exp:exp}
            }
        case 'CE':
            return {...state,history:[],cur_val:0,cur_exp:'',is_focused:false}
        case 'X':
            let exp=state.cur_exp
            exp.length===1 ? exp='':exp=exp.slice(0,-1)
            let val_exp=exp
            if(val_exp.slice(-1) in operators)
                val_exp=exp.slice(0,-1)
            let val=(val_exp==='')?0:eval(val_exp)
            return {...state,cur_exp:exp,cur_val:val}
        default:
            return state

    }
}
const Calculator=(props)=>{
    const [calc,dispatchCalc]=useReducer(calReducer,cal_data)
    return(
        <div className={classes.frame}>
                <Screen cal_data={calc} dispatchCalc={dispatchCalc}/>
                <Touchpad cal_data={calc} dispatchCalc={dispatchCalc}/>
        </div>
    )
}

export default Calculator