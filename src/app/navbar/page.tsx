"use client";
import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import Image from 'next/image';

// Define types for menu items
interface MenuItemType {
  text: string;
  href: string;
  external?: boolean;
}

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems: MenuItemType[] = [
    { text: 'Home', href: '/drone-fleet' },
    { text: 'Drone Maintenance', href: '/drone-maintenance' },
    { text: 'Login', href: '/login' },
  ];

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.text}
          onClick={handleMenuClose}
          component={Link}
          href={item.href}
          target={item.external ? '_blank' : '_self'}
        >
          {item.text}
        </MenuItem>
      ))}
    </Menu>
  );

  const renderDrawer = (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              href={item.href}
              target={item.external ? '_blank' : '_self'}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              {renderDrawer}
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, marginLeft: 2, fontWeight: 'bold', fontFamily: 'Arial' }}
              >
                SUIND
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Typography
                    key={item.text}
                    variant="button"
                    sx={{
                      marginLeft: 2,
                      fontFamily: 'Arial',
                      fontWeight: 'bold',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                    component={Link}
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                  >
                    {item.text}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
          {renderMenu}
        </Toolbar>
      </AppBar>
    </div>
  );
}
