import classes from './ButtonOrder.module.css';

function ButtonOrder(props) {

    return (
        <div className='mx-2'>
            <div className={classes.buttonStyle}>
                <div className="btn btn-lg btn-outline-light my-1 px-5" onClick={props.handle}>Order Now</div>
            </div>
        </div>
    )
}

export default ButtonOrder;