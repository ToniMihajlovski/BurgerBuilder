import React from 'react';
import classes from './Modal.module.css';
import Auxiliary from '../../../Auxiliary/Auxiliary';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
    <Auxiliary>
        <BackDrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxiliary>
);

export default modal;