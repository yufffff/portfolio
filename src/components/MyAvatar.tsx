import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// 画像ファイルをインポート
import ImageFile from '../static/images/cat3.png';

const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(30), height: theme.spacing(30)
}))

const MyAvatar: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <AvatarImage alt="看板猫" src={ImageFile} />
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1">PG-GUND</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">YUKI FUKAI</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1">Web / App Enginner</Typography>
        </Box>
      </Box>
    </>
  );
};

export default MyAvatar;
