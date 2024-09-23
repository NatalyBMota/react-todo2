import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './InputWithLabel.module.css';

const InputWithLabel = (props) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>&nbsp;&nbsp;
            <input 
                type="text" 
                name="title" 
                ref={inputRef} 
                id='todoTitle' 
                value={props.todoTitle} 
                onChange={props.handleTitleChange} 
                className={styles.inputField}
            />
        </>
    );
};

InputWithLabel.propTypes = {
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func,
};

export default InputWithLabel;