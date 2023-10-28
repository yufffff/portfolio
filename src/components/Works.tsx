import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Folder } from '@mui/icons-material';

const StyledList = styled(List)(() => ({
    width: 770,
    maxWidth: '100%',
}))

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Works: FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Works</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <StyledList>
            <ListItem>
              <ListItemLink href="https://yufffff.github.io/task_manager">
                <ListItemAvatar>
                  <Avatar>
                    <Folder />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="TODOアプリ"
                  secondary="Vue.js + Vuetifyで作成したTODOアプリです。Cordovaと組み合わせることでスマホアプリとしても使えます。"
                />
              </ListItemLink>
            </ListItem>
            {/* <ListItem>
              <ListItemLink href='#'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Work2' secondary='Work2です。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='#'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Work3' secondary='Work3です。' />
              </ListItemLink>
            </ListItem> */}
          </StyledList>
        </Box>
      </Box>
    </>
  );
};

export default Works;
