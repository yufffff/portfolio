import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 730,
  maxWidth: '100%',
}))

const Skills: FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Skills</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">言語</Typography>
              <Typography color="textSecondary">JavaScript / TypeScript / HTML / CSS / SCSS / Bootstrap</Typography>
            </CardContent>
          </StyledCard>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">フレームワーク</Typography>
              <Typography color="textSecondary">Vue / Vuetify / React</Typography>
            </CardContent>
          </StyledCard>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">データベース</Typography>
              <Typography color="textSecondary">Oracle / MySQL / PostgreSQL / DynamoDB</Typography>
            </CardContent>
          </StyledCard>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">クラウド</Typography>
              <Typography color="textSecondary">AWS / GCP</Typography>
            </CardContent>
          </StyledCard>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
