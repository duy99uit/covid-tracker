import React, { useState } from "react";
import { Grid, Select, MenuItem, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { I18N_LOCALE } from "helpers/i18n";

const localeTagList = Object.values(I18N_LOCALE);
function ChangeLangueges() {
  
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const currentLocaleTag = i18n.language;
  const handleChange = (event) => {
    setLanguage(event.target.value);
    if (event.target.value === currentLocaleTag) {
      return;
    } else {
      window.location.reload();
      i18n.changeLanguage(event.target.value);
    }
  };

  return (
    <Grid container spacing={0} align="center" justifyContent="flex-end" style={{}}>
      <Box sx={{ minWidth: 120 }}>
        <Box fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Age"
            onChange={handleChange}
          >
            {localeTagList.map((langTagItem, index) => (
              <MenuItem value={langTagItem} key={index}>
                {t(`translation:localeTag.${langTagItem}`)}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
    </Grid>
  );
}

export default ChangeLangueges;
