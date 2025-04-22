import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Grid,Box } from '@mui/material';
import Posts from '../home/post/Posts';
import { API } from '../../service/api';
import { Link } from 'react-router-dom';
import Post from '../home/post/Post';



const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, getPosts] = useState([]);

    const handleSearch = async () => {
        console.log("entered")
        try {
            let response = await API.getAllPosts({ title : searchTerm || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
            // Handle the API response data here
            console.log(response);
        } catch (error) {
            // Handle any API call errors here
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        // 
        <Grid>
            <AppBar position="static" >
            <Toolbar >
                <IconButton edge="start" color="inherit" aria-label="open drawer">
                    <SearchIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Search
                </Typography>
                <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
            </Toolbar>
            </AppBar>
            <br />
                
                <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12} container>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
                
            </Grid>
        
        
    );
};

export default SearchBar;