import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import imageBlog from "./image/blog-big.png"
import SearchAndCategories from "./SreachAndCategories";

const BlogSingle = () => {
  return (
    <div className="blog-single">
      <CssBaseline />
      <Container maxWidth="la">
        <Box my={4} sx={{ width: '100%' }}>
            <Grid container justifyContent="space-between" >
                <Grid item size={8}>
                    <img src={imageBlog} alt="Blog" style={{ maxWidth: '60%', height: 'auto', marginRight : "120px" }}/>
                </Grid> 
                <Grid item size={3}>
                    <SearchAndCategories />
                </Grid> 
            </Grid>
         
        </Box>
      </Container>
    </div>
  );
};

export default BlogSingle;
