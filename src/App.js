import CountrySelector from "components/CountrySelector";
import Highlight from "components/Highlight";
import Sumary from "components/Sumary";
import ChangeLangueges from "components/ChangeLangueges";
import { useEffect, useState, useMemo } from "react";
import { getCountries, getReportByCountry } from "apis";
import { sortBy } from "lodash";
import { Container, Typography, Grid } from "@material-ui/core";

import image from "images/image.png";
import styles from "./App.module.css";
import moment from "moment";
import "moment/locale/vi";
import { useTranslation } from "react-i18next";
moment.locale("en");
function App() {
  const { t, i18n } = useTranslation();
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      const countries = sortBy(data, "Country");
      setCountries(countries);
      setSelectedCountryId("vn");
    });
  }, []);
  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      );
      getReportByCountry(selectedCountry.Slug).then((res) => {
        console.log("getReportByCountry", { res });
        // remove last item = current date
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);
  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          title: t(`translation:totalCase`),
          count: latestData.Confirmed,
          type: "confirmed",
        },
        {
          title: t(`translation:recovered`),
          count: latestData.Recovered,
          type: "recovered",
        },
        {
          title: t(`translation:death`),
          count: latestData.Deaths,
          type: "death",
        },
      ];
    }
    return [];
  }, [report]);

  return (
  
      
      <Container style={{ marginTop: 20 }}>
      <ChangeLangueges />
        <Grid container spacing={0} align="center" justify="center" style={{}}>
          <Grid item style={{}}>
            <img className={styles.image} src={image} alt="COVID-19" />
            <Typography>{moment().format("LLL")}</Typography>
          </Grid>
        </Grid>

        <CountrySelector
          countries={countries}
          handleOnChange={handleOnChange}
          value={selectedCountryId}
        />
        <Highlight summary={summary} />
        <Sumary report={report} selectedCountryId={selectedCountryId} />
      </Container>
  
  );
}

export default App;
