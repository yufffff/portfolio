import { FC } from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { GitHub, Instagram } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const GitHubColor = styled(Avatar)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#000',
  margin: theme.spacing(1),
}));
const InstagramColor = styled(Avatar)(({ theme }) => ({
  color: '#fff',
  backgroundColor: red[500],
  margin: theme.spacing(1),
}));

const Contact: FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Contact</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Link href="https://github.com/yufffff" color="inherit">
            <GitHubColor>
              <GitHub />
            </GitHubColor>
          </Link>
          <Link href="https://www.instagram.com/baikiruto0325/" color="inherit">
            <InstagramColor>
              <Instagram />
            </InstagramColor>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
