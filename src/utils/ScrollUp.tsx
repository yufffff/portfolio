import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ImageFile from '../static/images/top_jump.png';
import { Tooltip } from '../utils/Tooltip';
import { animateScroll } from 'react-scroll';

const StyledBox = styled(Box)(() => ({
  right: 40,
  bottom: 40,
  position: 'fixed',
  zIndex: 2,
  cursor: 'pointer',
  transition: 'opacity 1s ease-in-out',
  transform: 'matrix(0.95, 0, 0, 0.95, 0, 0)',
}));
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}))

const ScrollUp: FC = () => {
  const returnTop = () => {
    animateScroll.scrollTo(0);
  };

  return (
    <>
      <StyledBox>
        <Tooltip tooltipText="TOPへ戻る">
          <StyledAvatar alt="TOPへ戻る" src={ImageFile} onClick={returnTop} />
        </Tooltip>
      </StyledBox>
    </>
  );
};

export default ScrollUp;
