import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { BLUE } from "../../themes/colors";
import { ListItemIcon, SvgIcon } from "@material-ui/core";
import { ReactComponent as USA } from "./svg/USA.svg";
import { ReactComponent as SouthKorea } from "./svg/SouthKorea.svg";
import { ReactComponent as Taiwan } from "./svg/Taiwan.svg";
import LanguageContext from "../../languages/default";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },

  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClose }: any) {
  const languageContext: any = React.useContext(LanguageContext);
  const classes = useStyles();
  const languageList = [
    {
      key: "en",
      icon: <USA />,
      primary: "English",
      secondary: "Default",
    },
    { key: "ch", icon: <Taiwan />, primary: "Chinese", secondary: "中文" },
    { key: "ko", icon: <SouthKorea />, primary: "Korean", secondary: "한국어" },
  ];

  const handleClick = (newLanguage) => () => {
    languageContext.setCurrentLanguage(newLanguage);
    handleClose();
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar} style={{ background: BLUE }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Choose Language
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {languageList.map((language, index) => (
            <ListItem
              button
              onClick={handleClick(language.key)}
              key={index}
              divider={index !== languageList.length - 1}
            >
              <ListItemIcon>
                <SvgIcon style={{ color: "black" }}>
                  {language.icon || null}
                </SvgIcon>
              </ListItemIcon>
              <ListItemText
                primary={language.primary}
                secondary={language.secondary}
              />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
}
