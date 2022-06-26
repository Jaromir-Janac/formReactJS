function OrderSummaryForm () {
    return (
        <div className="mt-1">
                <label htmlFor='orderSummaryInput' className='col-form-label'>Order Summary:</label>
                <div className="mx-2">
                <textarea readOnly type='text-area' rows='1' className="form-control" id='orderSummaryInput' placeholder=''/>
                </div> 
        </div>
    );
}

export default OrderSummaryForm;