import React from 'react';
import { InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';
import { API } from '../../service/api';

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        try {
            const response = await API.searchData(searchTerm);
            // Handle the API response data here
            console.log(response);
        } catch (error) {
            // Handle any API call errors here
            console.error(error);
        }
    };

    return (
        <div>
            <SearchIcon />
            <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
        </div>
    );
};

export default SearchInput;