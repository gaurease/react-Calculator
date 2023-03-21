import classes from '../../css/Button.module.css'


const Button=(props)=>{
    const addNotoExp=(e)=>{
        let no=e.target.getAttribute('id')
        const operators={'+':'+','-':'-','*':'*','/':'/'}
        console.log('clicked ',no)
        if((no>=0 && no<=9)||no==='.')
            props.dispatchCalc({type:'no',val:no})
        else if (no in operators)
            props.dispatchCalc({type:'op',val:no})
        else 
            console.log("dispatching for ",no)
            props.dispatchCalc({type:no})
        
    }
    return(
        <button id={props.id} onClick={addNotoExp} className={classes.button}>
        {props.children}
        </button>
    )
}

export default Button