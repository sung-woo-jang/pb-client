import { IGetCommentsResponseData } from '@/api/comment/getComments';
import { Fragment } from 'react';
import CommentItem from '@/components/common/Drawer/CommentDrawer/CommentItem';
import Divider from '@mui/material/Divider';

interface CommentListProps {
  comments: IGetCommentsResponseData[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="rounded-t-lg">
      {comments.map((comment) => (
        <Fragment key={comment.id}>
          <CommentItem comment={comment} />
          <Divider />
        </Fragment>
      ))}
    </div>
  );
}
