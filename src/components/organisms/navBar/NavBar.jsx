import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { listTags } from '../../../services/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getListPost, getListPostByTag } from '../../../store/apiSlice/thunks';
import { InputForm } from '../../atoms/input/InputForm';
import { Button } from '../../atoms/button/Button';
import { toggleSiderBar } from '../../../store/apiSlice/apiSlice';

export const NavBar = () => {
    const { post: dataCard,  listTags:options} = useSelector(state => state.api);

    const [filteredOptions, setFilteredOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const filterCards = (value) => {
        if(!value || value.includes("testtag")) return null;
        const tagToFind = encodeURIComponent(value);
        dispatch(getListPostByTag(tagToFind));
        setFilteredOptions([]);
        setInputValue(value);
    }

    const handleInputChange = (event) => {
        const value = event.target?.value;
        setInputValue(value);
        if (options.length === 0) return null;
        const newFilteredOptions = options.filter(x => typeof (x) === 'string' && x.includes(value))
        setFilteredOptions(value ? newFilteredOptions : []);
    }

    const loadDefaultCards = (type) => {

        if((inputValue === '' && dataCard.length===0)  || type==="reset"){
            dispatch(getListPost());
            setInputValue("");
        }
    }

    return (
        <nav className="navbar">
            <Button
                type={"button perfil"}
                onButtonClick={() => dispatch(toggleSiderBar())}
            >
                ☰ Perfil
            </Button>
            <InputForm
                type={"input"}
                format={"text"}
                value={inputValue}
                onBlurInput={() => loadDefaultCards()}
                onChangeInput={handleInputChange}
            />

            <Button
                type={"button raised"}
                onButtonClick={() => filterCards(inputValue)}
            >
                Filtrar
            </Button>

            <Button
                type={"button raised reset"}
                onButtonClick={() => loadDefaultCards("reset")}
            >
                Reset
            </Button>

            <ul className="options-list">
                {filteredOptions.length > 0 && (
                    <>
                        {filteredOptions.map((option, index) => (
                            <li key={index} onClick={() => filterCards(option.trim())}>{option}</li>
                        ))}
                    </>
                )}
            </ul>
        </nav>
    );
};
