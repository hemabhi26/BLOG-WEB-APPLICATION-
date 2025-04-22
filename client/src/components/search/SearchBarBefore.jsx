import React, { useState, useEffect } from 'react';
import { API } from '../../service/api';
import { Typography, Box } from '@mui/material';

const SearchResults = ({ searchTerm }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    // Fetch blog posts based on the search term
    useEffect(() => {
        const fetchBlogPosts = async () => {
            if (searchTerm) {
                // Make an API call to fetch blog posts based on the search term
                // Replace this with your actual API call
                const response = await API.getAllPosts(`http://localhost:8000/posts?title=${searchTerm}`);
                const data = await response.json();
                setBlogPosts(data);
            }
        };

        fetchBlogPosts();
    }, [searchTerm]);

    return (
        <div>
            <Typography variant="h2">Search Results:</Typography>
            {blogPosts.map((post) => (
                <Box key={post.id} sx={{ marginBottom: 2 }}>
                    <Typography variant="h3">{post.title}</Typography>
                    <Typography variant="body1">{post.content}</Typography>
                </Box>
            ))}
        </div>
    );
};

export default SearchResults;