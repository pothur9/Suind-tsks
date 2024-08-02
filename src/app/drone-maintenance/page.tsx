"use client";
import { Box, Typography, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import data from '../data/data.json';
import Navbar from '../navbar/page';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: '32px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" sx={{ marginBottom: '32px', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
          Drone Maintenance Management
        </Typography>
        <Grid container spacing={4}>
          {data.drones.map((drone) => (
            <Grid item key={drone.id} xs={12} sm={6} md={4}>
              <Card sx={{ 
                cursor: 'pointer', 
                height: '100%', 
                transition: 'transform 0.3s, box-shadow 0.3s', 
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' 
                } 
              }}>
                <Link href={`/drone/${drone.id}`} passHref>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/drone.png" 
                    alt={`Drone ${drone.id}`}
                  />
                </Link>
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ marginBottom: '16px', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
                    {`ID: ${drone.id}`}
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
                    Maintenance Logs:
                  </Typography>
                  <List dense>
                    {drone.maintenance_logs.map((log, index) => (
                      <ListItem key={index} sx={{ borderBottom: '1px solid #eee', paddingBottom: '16px', paddingTop: '16px' }}>
                        <ListItemText 
                          primary={
                            <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>
                              {`Date: ${log.date}`}
                            </Typography>
                          } 
                          secondary={
                            <Typography variant="body2" sx={{ fontSize: '1rem', color: '#777' }}>
                              {`Description: ${log.description}, Technician: ${log.technician}`}
                            </Typography>
                          } 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
