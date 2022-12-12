import * as React from 'react';
/* import { experimentalStyled as styled } from '@mui/material/styles'; */
import Box from '@mui/material/Box';
/* import Paper from '@mui/material/Paper'; */
import Grid from '@mui/material/Unstable_Grid2';

/* const Item = styled(Paper)(({ theme }) => ({
  
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); */

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {Array.from(Array(8)).map((_, index) => (
          <Grid xs={2} sm={4} md={3} key={index}  >
          
              <div className=' text-zinc-100'>
              <h1 className=' text-2xl text-orange-300 '>Javascript </h1>
              <p >Lorem ipsum dolor sit amet orem doloremque incidunt eveniet ducimus sint. Quibusdam, tempora! Eaque quos earum iusto?</p>
              <button className='my-6 bg-white  text-slate-600 px-6 py-2  hover:bg-gray-300'>See more</button>
              </div>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}