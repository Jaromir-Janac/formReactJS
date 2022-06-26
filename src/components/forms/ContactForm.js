import ButtonOrder from "../layout/ButtonOrder";

function ContactForm (props) {
    return (
        <div className= "mt-1" onClick={props.handle}>
                <label htmlFor='emailInput' className='col-form-label'>E-mail</label>
                <div className="mx-2">
                <input type='email' className="form-control" id='emailInput' placeholder='name@domain.com'/>
                </div> 
                <ButtonOrder />
        </div>
    );
}

export default ContactForm;