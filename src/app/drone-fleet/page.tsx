"use client";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Link from 'next/link';
import data from '../data/data.json';
import Navbar from '../navbar/page';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: '32px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" sx={{ marginBottom: '32px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial', color: '#333' }}>
          Drone Fleet Overview
        </Typography>
        <Grid container spacing={4}>
          {data.drones.map((drone) => (
            <Grid item key={drone.id} xs={12} sm={6} md={4}>
              <Link href={`/drone/${drone.id}`} passHref>
                <Card 
                  sx={{ 
                    cursor: 'pointer', 
                    height: '100%', 
                    transition: 'transform 0.3s, box-shadow 0.3s', 
                    '&:hover': { 
                      transform: 'scale(1.05)', 
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' 
                    } 
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={`/drone.png`}
                    alt={`Drone ${drone.id}`}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Arial', color: '#333' }}>
                      {`ID: ${drone.id}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px', color: '#555' }}>
                      {`Status: ${drone.status}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '4px', color: '#555' }}>
                      {`Flight Hours: ${drone.flight_hours}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '4px', color: '#555' }}>
                      {`Battery Status: ${drone.battery_status}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
