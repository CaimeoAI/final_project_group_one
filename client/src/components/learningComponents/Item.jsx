
import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import { useState, useEffect} from 'react';
import axios from 'axios';





/* const Item = styled(Paper)(({ theme }) => ({
  
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); */

export default function ResponsiveGrid() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect( () => {
     axios.get(`${process.env.REACT_APP_BE_URL}/classes/type`, {
      headers: {
        authorization: `Bearer ${token}`,

      }
     })
     .then((response) => {
        console.log('response', response);
        setCourses(response.data);
        setLoading(false);
     })
     .catch((error) => {
        console.log('error', error);
        setError(error);
        setLoading(false);
     }
      )
  }, [])

  return (



     
    <Box sx={{ flexGrow: 1 }} className=" " >
      <h1 className=' text-4xl py-8'>Frontend</h1>
      {/* FRONTEND Grid */}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} className=" grid-rows-1  grid-flow-row " >
        
        {Array.from(Array(2)).map((_, index) => (
          <Grid xs={2} sm={3} md={3} key={index}  >
          
              <div className=' text-text-primary'>
              <h1 className=' text-2xl text-orange-300 '>Javascript </h1>
              <p >Lorem ipsum dolor sit amet orem doloremque incidunt eveniet ducimus sint. Quibusdam, tempora! Eaque quos earum iusto?</p>
              
              <button className='my-6 bg-accent-secondary  text-text-primary px-6 mt-12 py-2  hover:bg-active'>See more</button>
            
              </div>
            
          </Grid>
        ))}
      </Grid>

      <h1 className=' text-4xl py-8 '>Backend</h1>
      {/* BACKEND Grid */}

      <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} className=" grid-rows-1  grid-flow-row " >
        
        {Array.from(Array(2)).map((_, index) => (
          <Grid xs={2} sm={3} md={3} key={index}  >
          
              {<div className=' text-text-primary'>
              <h1 className=' text-2xl text-orange-300 '>Node.Js </h1>
              <p >Lorem ipsum dolor sit amet orem doloremque incidunt eveniet ducimus sint. Quibusdam, tempora! Eaque quos earum iusto?</p>
              <button className='my-6 bg-accent-secondary  text-text-primary mt-12 px-6 py-2  hover:bg-active'>See more</button>
              </div>}
              
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}