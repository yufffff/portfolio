import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ImageFile from '../static/images/top_jump.png';
import { makeStyles } from '@material-ui/core';
import { Tooltip } from '../utils/Tooltip';

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    right: 40,
    bottom: 40,
    position: 'fixed',
    zIndex: 2,
    cursor: 'pointer',
    transition: 'opacity 1s ease-in-out',
    transform: 'matrix(0.95, 0, 0, 0.95, 0, 0)',
  },
  pic: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const ScrollUp: React.FC = () => {
  const classes = useStyles();
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Box className={classes.large}>
        <Tooltip tooltipText="TOPへ戻る">
          <Avatar alt="TOPへ戻る" src={ImageFile} className={classes.pic} onClick={returnTop} />
        </Tooltip>
      </Box>
    </>
  );
};

export default ScrollUp;
