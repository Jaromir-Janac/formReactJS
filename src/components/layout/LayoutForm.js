import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import classes from './LayoutForm.module.css';
import CheckForm from '../forms/CheckForm';
import SelectForm from '../forms/SelectForm';
import { dataBudget, dataPrice } from '../data/DataInput';
import PriceForm from '../forms/PriceForm';
import BudgetForm from '../forms/BudgetForm';
import Button from "./ButtonBudget";
import BikeCheckForm from '../forms/BikeCheckForm';
import dataBikeCheck from '../data/DataBikeCheck';
import dataDaySelect from '../data/DataDaySelect';
import dataOptionalCheck from '../data/DataOptionalCheck';
import DateForm from '../forms/DateForm';
import ContactForm from '../forms/ContactForm';
import OrderSummaryForm from '../forms/OrderSummaryForm';


function LayoutForm() {
  const bikeCheckData = dataBikeCheck;
  const daySelectData = dataDaySelect
  const optionalCheckData = dataOptionalCheck;
  const priceInput = dataPrice;
  const budgetInput = dataBudget

  const [addValue, setAddValue] = useState({
    bikeMountainCount: 1,
    bikeKidsCount: 1,
    bikeRoadCount: 1,
    bikeATCount: 1,
    bikeMountain: 500,
    bikeKids: 200,
    bikeRoad: 1500,
    bikeAllTerain: 2500,
    inputDayCount: 1,
    inputOptional: 0,
  });
  const [checkState, setCheckState] = useState({
    bikeMountain: false,
    bikeKids: false,
    bikeRoad: false,
    bikeAllTerrain: false,
  });
  const [budgetCheck, setBudgetCheck] = useState(0)
  const [dateState, setDateState] = useState({
    dateStart: '2022-01-01',
    dateEnd: '2022-01-02',
  });
  const [orderState, setOrderState] = useState (false)

  const handleChange = (e) => {
    setAddValue(prevState => ({ ...prevState, [e.target.id]: e.target.value }));
    setCheckState(prevState => ({ ...prevState, [e.target.id]: e.target.checked }));
    setDateState(prevState => ({ ...prevState, dateEnd: EndDate(dateState.dateStart, addValue.inputDayCount) }));
    setDateState(prevState => ({ ...prevState, dateStart: document.querySelector('#dateStart').valueAsDate }));
  };
  const handleClick = (e) => {
    setBudgetCheck(document.querySelector('#inputBudget').value);
    CalculateBudget(budgetCheck, CalculatePrice(addValue, checkState));
  };
  const handleDateActual = (e) => {
    setDateState(prevState => ({ ...prevState, dateStart: ActualDate() }));
  };
  const handleOrderSubmit = (e) => {
    setOrderState(OrderSubmit());
  };

  useEffect(() => { CalculatePrice(addValue, checkState) }, [addValue, checkState]);
  useEffect(() => { setBudgetCheck(document.querySelector('#inputBudget').value) }, [addValue]);
  useEffect(() => { EndDate(dateState.dateStart, addValue.inputDayCount) }, [addValue, dateState]);
  useEffect(() => { OrderSummary() }, [addValue, dateState]);

  function CalculatePrice(input, check) {
    const bikeMountainBool = check.bikeMountain;
    const bikeKidsBool = check.bikeKids;
    const bikeRoadBool = check.bikeRoad;
    const bikeATBool = check.bikeAllTerrain;
    const dayCount = parseInt(input.inputDayCount);
    const optional = parseInt(input.inputOptional);
    let price = 0;

    if (bikeMountainBool) {
      const bikeMountainCount = parseInt(input.bikeMountainCount);
      const bikeMountainPrice = parseInt(input.bikeMountain);
      price += (bikeMountainCount * bikeMountainPrice)
    };
    if (bikeKidsBool) {
      const bikeKidsCount = parseInt(input.bikeKidsCount);
      const bikeKidsPrice = parseInt(input.bikeKids);
      price += (bikeKidsCount * bikeKidsPrice)
    };
    if (bikeRoadBool) {
      const bikeRoadCount = parseInt(input.bikeRoadCount);
      const bikeRoadPrice = parseInt(input.bikeRoad);
      price += (bikeRoadCount * bikeRoadPrice)
    };
    if (bikeATBool) {
      const bikeAllTerrainCount = parseInt(input.bikeATCount);
      const bikeAllTerrainPrice = parseInt(input.bikeAllTerrain);
      price += (bikeAllTerrainCount * bikeAllTerrainPrice)
    };
    price *= dayCount;
    price += (price * (optional / 100));

    return price + " Kč"
  };
  function CalculateBudget(inputBudget, inputPrice) {
    const price = parseInt(inputPrice);
    const budget = parseInt(inputBudget);
    const result = budget >= price ? true : false;
    if (result) {
      document.querySelector('#budgetCompare').value = "Your budget is sufficient"
      document.querySelector('#budgetCompare').style.backgroundColor = "lightgreen"
    }
    else {
      document.querySelector('#budgetCompare').value = "Your budget is insufficient"
      document.querySelector('#budgetCompare').style.backgroundColor = "lightcoral"
    }
    return result
  };
  function ActualDate() {
    let dateActual = new Date();
    document.querySelector('#dateStart').valueAsDate = dateActual
    return dateActual
  };
  function EndDate(dateStart, days) {
    let msec = Date.parse(dateStart);
    msec += days * 24 * 60 * 60 * 1000;
    const dateEnd = new Date(msec);
    document.querySelector('#dateEnd').valueAsDate = dateEnd
    return dateEnd
  };
  function OrderSummary () {
    let rows = 1;
    let summary = "";
    let price = 0;
    if (checkState.bikeMountain) {
      summary += 'Bike Mountain: ' + (addValue.bikeMountain) + ' Kč x ' + (addValue.bikeMountainCount) + ' pcs   = '  + ((addValue.bikeMountainCount)*(addValue.bikeMountain)) + " Kč\n";
      price += ((addValue.bikeMountainCount)*(addValue.bikeMountain))
      rows++;
    }
    if (checkState.bikeKids) {
      summary += 'Bike Kids:\t\t ' + (addValue.bikeKids) + ' Kč x ' + (addValue.bikeKidsCount) + ' pcs   = '  + ((addValue.bikeKidsCount)*(addValue.bikeKids)) + " Kč\n";
      price += ((addValue.bikeKidsCount)*(addValue.bikeKids))
      rows++;
    }
    if (checkState.bikeRoad) {
      summary += 'Bike Road: \t '  + (addValue.bikeRoad) + ' Kč x ' + (addValue.bikeRoadCount) + ' pcs = ' + ((addValue.bikeRoadCount)*(addValue.bikeRoad)) + " Kč\n";
      price += ((addValue.bikeRoadCount)*(addValue.bikeRoad))
      rows++;
    }
    if (checkState.bikeAllTerrain) {
      summary += 'Bike AllTerrain:\t ' + (addValue.bikeAllTerain) + ' Kč x ' + (addValue.bikeATCount) + ' pcs = ' + ((addValue.bikeATCount)*(addValue.bikeAllTerain)) + " Kč\n";
      price += ((addValue.bikeATCount)*(addValue.bikeAllTerain))
      rows++;
    }
    summary += 'Final Price:\t ' + price + ' Kč x ' + addValue.inputDayCount + ' day = ' + (price * addValue.inputDayCount) + ' Kč'
    document.querySelector('#orderSummaryInput').rows = rows;
    document.querySelector('#orderSummaryInput').value = summary;
  }
  function OrderSubmit () {
    let order = orderState;
    let mail = document.querySelector('#emailInput').value;
    for (let i=1; i<=mail.length; i++) {
      if (mail.charAt(i) === '@' ) {
        order = true;
      }
    }
    if (order) {
      
    }
    return order
  }

  return (
    <div className={classes.formLayout} onChange={handleChange} onLoad={handleDateActual}>
      <Row className={classes.formComponent}>
        <BikeCheckForm data={bikeCheckData} for='inputBikeCheck' text='Bike Rental Blokes'
          handle={handleChange}
        />
      </Row>
      <Row className={classes.formComponent}>
        <Col xs={{ span: 12 }} sm={{ span: 4 }}>
          <SelectForm data={daySelectData} labelProp='Number of days:' for='inputDayCount' /></Col>
        <Col xs={{ span: 12 }} sm={{ span: 4 }} >
          <DateForm for='dateStart' text='Start Date' /></Col>
        <Col xs={{ span: 12 }} sm={{ span: 4 }}>
          <DateForm for='dateEnd' text='End Date' /></Col>
      </Row>
      <Row className={classes.formComponent}>
        <CheckForm data={optionalCheckData} type='radio' for='inputOptional' text='Optional:' name='boardRadio' />
      </Row>
      <Row className={classes.formComponent}>
        <Col xs={{ span: 12 }} sm={{ span: 4 }}>
          <PriceForm data={priceInput} input={CalculatePrice(addValue, checkState)} /></Col>
        <Col xs={{ span: 12 }} sm={{ span: 4 }}>
          <BudgetForm data={budgetInput} /></Col>
        <Col xs={{ span: 12 }} sm={{ span: 4 }}>
          <Button handle={handleClick} /></Col>
      </Row>
      <Row className={classes.formComponent}>
        <Col xs={{ span: 12 }} sm={{ span: 6 }}>
          <OrderSummaryForm />
        </Col>
        <Col xs={{ span: 12 }} sm={{ span: 6 }}>
          <ContactForm handle={handleOrderSubmit}/>
        </Col>
      </Row>
    </div>
  );
}

export default LayoutForm;