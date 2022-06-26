import classes from './ButtonBudget.module.css';


function Button(props) {
  
  return (
    <div className='mx-2'>
      <div className={classes.buttonStyle}>
          <div className="btn btn-lg btn-outline-light my-1" onClick={props.handle}>Will it be enough?</div>
      </div>
      <div className={classes.inputStyle}>
      <input readOnly className="form-control" type="text" id='budgetCompare'></input>
      </div>
      </div> 
  )
}

export default Button;