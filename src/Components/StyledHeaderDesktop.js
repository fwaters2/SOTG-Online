import React from 'react';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  Grid,
  withStyles,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Link as RouterLink, Link } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';
import { ReactComponent as SOTGLogo } from '../Assets/Logos/SOTG_Full.svg';
import Firebase from '../Utils/Firebase';

const links = [
  { text: 'Home', extension: '' },
  { text: 'New Event', extension: 'createevent' },
  { text: 'How To Use', extension: 'howtouse' },
  { text: 'Demo', extension: 'playerdemo' },
  { text: 'About', extension: 'about' },
  { text: 'Contact', extension: 'contact' },
];
const styles = makeStyles({
  menuItems: {
    fontWeight: 'bold',
    color: 'grey',
  },
  gridItem: {
    borderRadius: '8px',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(143, 222, 88,.6)',
    },
  },
});
const StyledExpansionPanel = withStyles({})(ExpansionPanel);
const StyledExpansionPanelSummary = withStyles({
  root: {},
  content: {
    '&$expanded': {
      // all this to get rid of the extra margin added when the panel is expanded
      // same margin as unexpanded expansion panel
      margin: '12px 0',
    },
  },
  expanded: {},
})(ExpansionPanelSummary);

export default function StyledHeaderDesktop({ user }) {
  const [expanded, toggleExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = styles();
  const handleLogout = () => {
    Firebase.auth().signOut();
    window.location.reload();
  };
  const handleMenuOpen = e => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div>
      <StyledExpansionPanel elevation={0} expanded={expanded}>
        <StyledExpansionPanelSummary>
          <Link to="/">
            <SOTGLogo
              style={{
                height: '2.5em',
                margin: '2em 1em',
              }}
            />
          </Link>
          <Grid container spacing={3} alignItems="center" justify="flex-end">
            {links.map(nav => (
              <Grid
                item
                className={classes.gridItem}
                key={nav.text}
                component={RouterLink}
                to={`/${nav.extension}`}
              >
                <div className={classes.gridText}>
                  <Typography variant="h6" className={classes.menuItems}>
                    {nav.text}
                  </Typography>
                </div>
              </Grid>
            ))}
            {user ? (
              <Grid item onClick={handleMenuOpen}>
                <IconButton color="secondary">
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Grid>
            ) : (
              <Grid item>
                <RouterLink
                  to="/login"
                  onClick={() => toggleExpanded(!expanded)}
                  style={{ textDecoration: 'none' }}
                >
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                </RouterLink>
              </Grid>
            )}
          </Grid>
        </StyledExpansionPanelSummary>
      </StyledExpansionPanel>
    </div>
  );
}
