import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col, ButtonGroup, InputGroup, InputGroupText, Input } from 'reactstrap';

import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const Icon = ({ label }) => {
    if (label === 'Water') {
        return (
            <i className="bi bi-droplet-fill"></i>
        )
    }
    if (label === 'Tea' || label === 'Coffee') {
        return (
            <i className="bi bi-cup-hot-fill"></i>
        )
    }
    if (label === 'Soda') {
        return (
            <i className="bi bi-cup-straw"></i>
        )
    }
}

const Drink = ({ label, handler, isActive }) => {
    return (
        <Col>
            {label}
            <p>
                <Button
                    color="primary"
                    outline
                    onClick={handler}
                    active={isActive}
                >
                    <Icon label={label} />
                </Button>
            </p>
        </Col>
    )
}

const AddDrinkModal = ({ modal, toggle }) => {

    const [drink, setDrink] = useState('Water');
    const [value, setValue] = useState(250);

    const saveDrink = () => {
        const newitems = JSON.parse(localStorage.getItem("drink_array") || "[]");
        var d = new Date();
        newitems.unshift({
            'drink': drink,
            'quantity': value,
            'time': d.toLocaleTimeString()
        })
        localStorage.setItem('drink_array', JSON.stringify(newitems))
    }

    const saveQuantity = () => {
        const currentAmount = localStorage.getItem('water_count')
        if (currentAmount == null) {
            localStorage.setItem('water_count', 0)
        }
        var x = +JSON.parse(currentAmount) + +value
        localStorage.setItem('water_count', x)
    }

    const handleSave = () => {

        saveQuantity()
        saveDrink()
        toggle()

    }



    return (
        <Modal isOpen={modal} toggle={toggle} centered size='sm'>
            <ModalHeader toggle={toggle}>Choose your drink</ModalHeader>
            <ModalBody>
                <Row>
                    <Drink
                        label={'Water'}
                        handler={() => setDrink('Water')}
                        isActive={drink === 'Water'}
                    />
                    <Drink
                        label={'Tea'}
                        handler={() => setDrink('Tea')}
                        isActive={drink === 'Tea'}
                    />
                    <Drink
                        label={'Coffee'}
                        handler={() => setDrink('Coffee')}
                        isActive={drink === 'Coffee'}
                    />
                    <Drink
                        label={'Soda'}
                        handler={() => setDrink('Soda')}
                        isActive={drink === 'Soda'}
                    />
                </Row>



                <Row>
                    <Col>
                        <RangeSlider
                            value={value}
                            min={0}
                            max={2000}
                            step={10}
                            tooltip='on'
                            tooltipPlacement='top'
                            tooltipLabel={v => `${v} ml`}
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            className='mt-3'
                        />
                        <label className="float-start">0 ml</label>
                        <label className="float-end">2000 ml</label>
                    </Col>
                </Row>


                {/* <input type="range" className="form-control-range" style={{ width: '100%' }} id="fader" /> */}




                <div className='text-center mt-2'>
                    <Button color="primary" onClick={handleSave} >
                        Confirm
                    </Button>{' '}
                </div>
            </ModalBody>

        </Modal>

    )
}

export default AddDrinkModal