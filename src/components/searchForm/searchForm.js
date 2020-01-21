import React, {useEffect, useState} from 'react';
import {Form, FormGroup, Label} from "reactstrap";
import Autocomplete from 'react-autocomplete'
import 'react-autocomplete-input/dist/bundle.css';
import * as axios from "axios";

const SearchForm = props => {
    const [text, setText] = useState('');
    const [show, setShow] = useState([]);

    const requestData = async () => {
            const resp =  await axios.get('http://api.tvmaze.com/search/shows?q='+text);
            const data = resp.data.map(show => ({ label: show.show.name }));
            setShow(data);
    };

    useEffect(() => {
        requestData();
    },[text]);

    return (
        <Form>
            <FormGroup className='d-flex align-items-center'>
                <Label for="name" className='w-25'>Search for TV Show: </Label>
                <Autocomplete
                    getItemValue={(item) => {
                        return item.label
                    }}
                    items={show}
                    renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.label}>
                            {item.label}
                        </div>
                    }
                    value={text || props.inpValue}
                    onChange={e => setText(e.target.value)}
                    onSelect={(value) => {
                        setText(value);
                        props.history.push('/show/' + value);
                    }}
                />
            </FormGroup>
            <hr/>
        </Form>
    );
};

export default SearchForm;