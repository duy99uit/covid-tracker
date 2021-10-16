import { Grid } from "@material-ui/core";
import LineChart from "components/Charts/LineChart";
import HighMap from "components/Charts/HighMap";
import React, { useEffect, useState } from "react";

function Sumary({ report, selectedCountryId }) {
  const [mapData, setMapData] = useState({});
  useEffect(() => {
    if (selectedCountryId) {
      import(
        `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
      ).then((res) => {
        setMapData(res);
      });
    }
  }, [selectedCountryId]);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMap mapData={mapData} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Sumary;
