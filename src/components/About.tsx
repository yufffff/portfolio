import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">About</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1" align="left">
            会社員 → 個人事業主
            <br />
            Webエンジニアとしての経歴が一番長いです。
            <br />
            好きな作業はコーディングです。
            <br />
            今はアイデアやこうなったらいいなを実現しようともがいています。
            <br />
            写真はうちの看板猫です。
            <br />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
