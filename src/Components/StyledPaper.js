import React from "react";
import { Paper, Typography, Grid, IconButton } from "@material-ui/core";
import { Language } from "@material-ui/icons";
import LangDialog from "./SpiritScoring/LangDialog";

const myBlue = "#0C61E1";
//const myGreen = "#8FDE58";
//const myPurple = "#E82178";

export default function StyledPaper({
  title,
  children,
  setLang,
  currentLanguage,
  lang
}) {
  const [isLangSelectOpen, toggleLangSelect] = React.useState(false);
  return (
    <Paper
      style={{
        color: "white",
        backgroundColor: myBlue,
        borderRadius: "12px",
        marginBottom: "1em",
        padding: "2em 0"
      }}
    >
      <div
        style={{
          padding: "0 0 2em 0",
          marginLeft: "2em",
          marginRight: "2em",
          marginBottom: 0
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="h5">{title}</Typography>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => toggleLangSelect(!isLangSelectOpen)}
              style={{
                color: "#0038ae",

                padding: 0
              }}
              size="small"
            >
              <Language />
            </IconButton>
          </Grid>
        </Grid>
        <LangDialog
          open={isLangSelectOpen}
          onClose={() => toggleLangSelect(false)}
          setLang={setLang}
          currentLanguage={currentLanguage}
          lang={lang}
        />
      </div>
      {children}
    </Paper>
  );
}
