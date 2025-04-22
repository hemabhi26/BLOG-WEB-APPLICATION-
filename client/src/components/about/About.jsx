
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url('https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg');
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Blogify</Typography>
                <Text variant="h5">We are software developers based in India.
                    Created by<br /> <br />Vivek (22BCE7383)  
                    <br />Yashaswin(22BCE8142)
                    <br />Hemanth Abhinav (22BCE9258) 
                    <br />Pradeepthi (22BCE8702)<br /><br />
                    We are passionate about technology. We like to build things that makes our life easier.<br />
                    We love to share our knowledge with each other. We believe that everyone should have access to quality education.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:vikramaditya967@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;