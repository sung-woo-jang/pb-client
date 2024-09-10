interface CommentContentProps {
  isEditing: boolean;
  comment: string;
  editedComment: string;
  setEditedComment: (comment: string) => void;
}

export default function CommentContent({
  isEditing,
  comment,
  editedComment,
  setEditedComment,
}: CommentContentProps) {
  if (isEditing) {
    return (
      <textarea
        className="mt-1 ml-4 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={editedComment}
        onChange={(e) => setEditedComment(e.target.value)}
        onKeyDown={(e) => e.stopPropagation()}
        rows={3}
      />
    );
  }

  return <p className="mt-1 ml-4 text-black">{comment}</p>;
}
