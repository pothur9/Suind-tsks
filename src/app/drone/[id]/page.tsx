"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText } from '@mui/material';
import data from '../../data/data.json';
import Navbar from '@/app/navbar/page';

// Define the type for the params object
interface DroneDetailsParams {
  id: string;
}

// Define the type for the drone object
interface Drone {
  id: string;
  status: string;
  flight_hours: number;
  battery_status: string;
  current_mission: string;
  maintenance_logs: Array<{
    date: string;
    description: string;
    technician: string;
  }>;
}

// Define the props type for the DroneDetails component
interface DroneDetailsProps {
  params: DroneDetailsParams;
}

// Define the DroneDetails component
const DroneDetails: React.FC<DroneDetailsProps> = ({ params }) => {
  const { id } = params;
  const [drone, setDrone] = useState<Drone | null>(null);

  useEffect(() => {
    if (id) {
      const foundDrone = data.drones.find((drone: Drone) => drone.id === id);
      setDrone(foundDrone || null);
    }
  }, [id]);

  if (!drone) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: '800px', width: '100%' }}>
          <CardMedia
            component="img"
            height="150"
            image="/drone.png" // Replace with the actual image path
            alt={`Drone ${drone.id}`}
          />
          <CardContent>
            <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center' }}>
              Drone Details View
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={`ID: ${drone.id}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Status: ${drone.status}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Flight Hours: ${drone.flight_hours}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Battery Status: ${drone.battery_status}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Current Mission: ${drone.current_mission}`} />
              </ListItem>
            </List>
            <Typography variant="h6" component="h2" sx={{ marginTop: '16px', textAlign: 'center' }}>
              Maintenance Logs
            </Typography>
            <List>
              {drone.maintenance_logs.map((log, index) => (
                <ListItem key={index} sx={{ borderBottom: '1px solid #ccc', padding: '16px' }}>
                  <ListItemText 
                    primary={<Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{`Date: ${log.date}`}</Typography>} 
                    secondary={<Typography variant="body2" sx={{ fontSize: '1rem' }}>{`Description: ${log.description}, Technician: ${log.technician}`}</Typography>} 
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default DroneDetails;
