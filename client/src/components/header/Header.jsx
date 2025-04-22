import React, { useState } from 'react';
import { AppBar, Toolbar, styled, InputBase, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';



import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;

const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    marginLeft: 20,
    width: 'auto',
}));

const SearchIcon = styled(IconButton)(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        width: '20ch',
    },
}));

const Header = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onSearch = (e) => {
        setSearchTerm(e.target.value);
        if (handleSearch) {
            handleSearch(e.target.value); // Pass the search term to the parent component
        }
    };

    const logout = async () => navigate('/account');

    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                
                <Link to={`/search`} style={{ textDecoration: 'none' }}>
                    <button>Search</button>
                </Link>



                <Link to='/account'>LOGOUT</Link>
                <Link to={`/create?category=`} style={{ textDecoration: 'none' }}>
                    <button variant="contained">Create Blog</button>
                </Link>
            </Container>
        </Component>
    );
};

export default Header;