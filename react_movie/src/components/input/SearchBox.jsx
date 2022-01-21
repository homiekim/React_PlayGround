import React, { memo, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { StyleButton, StyleInputContainer, StyleTextField } from './SearchBox.style';

const SearchBox = memo(({getAPI, setValue }) => {
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && setValue(name);
        getAPI(name);
        inputRef.current.value = '';
    }

  return (
    <StyleInputContainer onSubmit={onSubmit}>
      <StyleTextField
        inputRef={inputRef}
        id="standard-basic"
        label="search movie..."
        variant="standard"
      />
      <StyleButton  type='submit'>
        <SearchIcon fontSize="large" color="primary"/>
      </StyleButton>
    </StyleInputContainer>
  );
});

export default SearchBox;
