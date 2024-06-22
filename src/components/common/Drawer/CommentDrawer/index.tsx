import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CustomSwipeableDrawer from '@/components/common/Drawer/CustomSwipeableDrawer';
import { useCommentDrawer } from '@/store/slice/drawer/useDrawerController';

export default function CommentDrawer() {
  const {
    commentDrawerToggleHandler,
    setCommentDrawerHandler,
    commentDrawerState,
  } = useCommentDrawer();
  return (
    <CustomSwipeableDrawer
      drawerState={commentDrawerState}
      setHandler={setCommentDrawerHandler}
      toggleHandler={commentDrawerToggleHandler}
      title={'댓글'}
      buttonRender={false}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={commentDrawerToggleHandler}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </CustomSwipeableDrawer>
  );
}
