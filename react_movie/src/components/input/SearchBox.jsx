import React from 'react';
import { TextField } from '@mui/material';
const SearchBox =({handleSearch ,onChangeInputValue}) => {
    return (
        <div>
            <TextField 
                id="standard-basic" 
                label="search movie..." 
                variant="standard" 
                onChange={onChangeInputValue}/>
            <button onClick={handleSearch}>검색</button>
        </div>
    )
}

export default SearchBox;