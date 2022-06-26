import classes from './CheckForm.module.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

function CheckForm(props) {
    return (
        <Row >
            <div className={classes.CheckMain}>
                <Col xs={{ span: 12 }}>
                    <label htmlFor={props.for} className={classes.CheckLabel}>{props.text}</label>
                </Col>

                {props.data.map(data =>
                    <Col xs={{ span: 12 }} md={{ span: 4 }}
                        key={data.id} className={classes.CheckForm}>
                        <img src={data.image} alt={data.id} className={classes.CheckImage} />
                        <div className="form-check mx-3" id={props.for}>
                            <input className='form-check-input'
                                type={props.type}
                                value={data.value}
                                id={props.for}
                                name={props.name} />
                            <label className='form-check-label'
                                htmlFor={data.id}>
                                {data.text}
                            </label>
                        </div>
                    </Col>
                )}

            </div>
        </Row>

    );
}

export default CheckForm;