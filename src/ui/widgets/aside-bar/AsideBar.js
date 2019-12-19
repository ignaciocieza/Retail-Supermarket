import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import { checkValue } from '../../../api/action/index';
import './asideBar.styles.scss';


const AsideBar = ({ title, values, checkValue, history }) => (
    <div className="asideBar">
        <span className='asideBar__titulo'>{title}</span>
        <hr className='asideBar__barra'></hr>
        {values.map(value => {
            return (
                <label key={value} className='checkbox__content'> 
                    <input type="checkbox" className='checkbox__item' onClick={(e) => {                      
                        checkValue(e.target.checked,value); 
                        // history.push('/');
                        history.push('/filters');
                    }} />
                    <span className="checkbox__label">{value}</span>
                </label>
            )
        })}
    </div>
);

const mapDispatchToProps = dispatch => ({
    checkValue: bindActionCreators(checkValue, dispatch)
})

export default withRouter(connect(null, mapDispatchToProps)(AsideBar));