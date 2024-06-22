import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { toggleCommentDrawer } from '@/store/slice/drawer/slice';
import CustomSwipeableDrawer from '@/components/common/Drawer/CustomSwipeableDrawer';

export default function CommentDrawer() {
  const dispatch = useAppDispatch();
  return (
    <CustomSwipeableDrawer title={'댓글'}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => {
              dispatch(toggleCommentDrawer());
            }}
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
