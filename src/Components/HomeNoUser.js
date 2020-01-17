import React from 'react';
import { Button, Box, Container, ButtonGroup, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logos/SOTG_Icon.svg';

export default function HomeNoUser() {
  return (
    <Container maxWidth="xs">
      <Box
        minHeight="calc(75vh - 50px)"
        // position="fixed"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box m="3em" mt={0}>
          <img src={Logo} alt="logo" />
        </Box>
        <Box>
          <Link to="/createevent" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button fullWidth variant="contained" style={{ background: '#0C61E1', color: 'white' }}>
              Create Event
            </Button>
          </Link>

          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button fullWidth style={{ color: '#0C61E1' }} variant="outlined">
              About
            </Button>
          </Link>

          <ButtonGroup fullWidth style={{ position: 'relative' }}>
            <Button
              component={Link}
              to="/playerdemo"
              variant="contained"
              style={{ background: '#0C61E1', color: 'white' }}
            >
              Player
            </Button>

            <div
              style={{
                background: '#8FDE58',
                borderRadius: '8px',
                display: 'inline',
                position: 'absolute',
                zIndex: 5,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '.1em .4em',
              }}
            >
              <Typography style={{ fontWeight: 'bold', fontSize: '10pt' }}>Demos</Typography>
            </div>

            <Button
              component={Link}
              to="/organizerdemo"
              variant="contained"
              style={{ background: '#0C61E1', color: 'white' }}
            >
              Organizer
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Container>
  );
}
