function BikeSelectForm(props) {
    return (
        <div className="mx-4">
            <label htmlFor={props.for} className="col-form-label">{props.labelProp}</label>
            <div> 
                <select className="form-select " id={props.for}>
                    {props.data.map(data => 
                        <option key={data.id} value={data.value}>
                          {data.text}
                          </option>                   
                    )}                  
                </select>
            </div>
        </div>
    );
} 

export default BikeSelectForm;