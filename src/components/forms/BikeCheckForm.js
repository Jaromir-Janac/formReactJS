import dataBikeSelect from "../data/DataBikeSelect";
import BikeSelectForm from "./BikeSelectForm";
import classes from './BikeCheckForm.module.css';
import React from "react";
import './bikeCheckForm.css';
import { Row, Col } from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css";
import BRBLogo from '../../images/BRBLogo.png'

function BikeCheckForm(props) {
    const bikeSelectData = dataBikeSelect;

    return (
        <Row gutter={10} align="stretch">
            <label htmlFor={props.for}><div className="display-5 mb-4 labelMain"><img src={BRBLogo} alt='BRB Logo' height='100vh' className="mx-4"/>{props.text}</div></label>
            <div className="form-check" id={props.for}>
                {props.data.map(data =>
                    <Col 
                    xs={{ span: 12 }} sm={{ span: 6 }}
                    xl={{ span: 3 }} 
                    key={data.id}>
                        <div className="card bg-transparent text-bg-secondary" >
                            <img src={data.image} className="card-img-top" alt={data.id} />
                            <div className="card-body">
                                <h3 className="card-title">{data.title}</h3>
                                <p className="card-text">{data.text}</p>
                                <div className={classes.checkFormBody}>
                                    <div className="display-5">
                                        <div className={classes.input}>
                                    <input className="form-check-input" type="checkbox" id={data.id} value={data.value} />
                                    </ div>
                                    <div className={classes.label}>
                                        <label className='form-check-label btn btn-lg btn-outline-light' htmlFor={data.id}>Want to try it?</label>
                                        </div>
                                        </div>
                                </div>
                                <BikeSelectForm data={bikeSelectData} labelProp='Quantity:' for={data.selectId}
                                    onChange={props.handle} />
                            </div>
                        </div>
                    </Col>
                )}
            </div>
        </Row>

    );
}

export default BikeCheckForm;

 
                        