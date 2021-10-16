import React from 'react';
import { CardContent, Typography, Card, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === 'confirmed') return { borderLeft: '5px solid #1D4ED8' };
    if (props.type === 'recovered') return { borderLeft: '5px solid #10B981' };
    else return { borderLeft: '5px solid #EF4444' };
  },
  title: { fontSize: 18, marginBottom: 5 },
  count: { fontWeight: 'bold', fontSize: 18 },
});

function HighlightCard({ title, count, type }) {
  const classes = useStyles({ type });
  return (
    <Card className={classes.wrapper}>
      <CardContent>
        <Typography variant='body2' component='p' className={classes.title}>
          {title}
        </Typography>
        <Typography variant='body2' component='span' className={classes.count}>
          <CountUp end={count} separator='.' duration={1} />
        </Typography>
      </CardContent>
    </Card>
  );
}
export default  HighlightCard