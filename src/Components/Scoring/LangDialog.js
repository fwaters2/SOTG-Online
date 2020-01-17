import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {
  ListItem,
  Avatar,
  ListItemText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
} from '@material-ui/core';
import { LangSelection, otherLang } from '../../Assets/Lang/Languages';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function LangDialog({ open, onClose, setLang, currentLanguage, lang }) {
  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">Language Selection</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <ListItem onClick={() => setLang('en')} selected={lang === 'en'}>
              <Avatar
                style={{
                  background: '#0038ae',
                  marginRight: '1em',
                  fontWeight: 'bold',
                }}
              >
                En
              </Avatar>
              <ListItemText primary="English" />
            </ListItem>
          </Grid>
          {LangSelection.map(language => (
            <ListItem
              onClick={() => setLang(language.nameShort)}
              key={language.avatar}
              selected={language.nameShort === lang}
            >
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    style={{
                      background: '#0038ae',
                      marginRight: '1em',
                      fontWeight: 'bold',
                    }}
                  >
                    {language.avatar}
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>{language.name}</Typography>
                </Grid>

                <Grid item>98%</Grid>
              </Grid>
            </ListItem>
          ))}
        </Grid>
        <FormControl>
          <InputLabel shrink>Other</InputLabel>
          <Select value="" onChange={() => alert('hayo')}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {otherLang.map(lang => (
              <MenuItem key={lang.langCode} value={lang.langCode}>
                {lang.languageLocal}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {currentLanguage.general.ready}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
