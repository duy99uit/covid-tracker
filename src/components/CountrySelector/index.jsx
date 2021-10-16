import {
  FormControl,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

function CountrySelector({ value, handleOnChange, countries }) {
  const { t} = useTranslation();
  return (
    <FormControl>
      <InputLabel htmlFor="" shrink>
      {t(`translation:country`)}
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country) => {
          return (
            <option key={country.Country} value={country.ISO2.toLowerCase()}>
              {country.Country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
}

export default CountrySelector;
