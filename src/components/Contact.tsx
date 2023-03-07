import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
// import MailIcon from '@material-ui/icons/Mail';
// import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstaIcon from '@material-ui/icons/Instagram';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  black: {
    color: '#fff',
    backgroundColor: '#000',
  },
  red: {
    color: '#fff',
    backgroundColor: red[500],
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Contact</Typography>
        </Box>
        <Box className={classes.root} display="flex" justifyContent="center" p={1}>
          <Link href="https://github.com/yufffff" color="inherit">
            <Avatar className={classes.black}>
              <GitHubIcon />
            </Avatar>
          </Link>
          <Link href="https://www.instagram.com/baikiruto0325/" color="inherit">
            <Avatar className={classes.red}>
              <InstaIcon />
            </Avatar>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
