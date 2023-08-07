import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: '100%',
  },
});

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Skills</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">言語</Typography>
              <Typography color="textSecondary">JavaScript / TypeScript / HTML / CSS / SCSS / Bootstrap</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">フレームワーク</Typography>
              <Typography color="textSecondary">Vue / Vuetify / React</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">データベース</Typography>
              <Typography color="textSecondary">Oracle / MySQL / PostgreSQL / DynamoDB</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">クラウド</Typography>
              <Typography color="textSecondary">AWS / GCP</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
