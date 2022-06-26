function DateForm(props) {
    return (
        <div className="mx-2">
            <label htmlFor={props.for} className="col-form-label">{props.text}</label>
            <div>
                <input type="date" className="form-control" id={props.for} value={props.value}/>
            </div>
        </div>
    );
}

export default DateForm;