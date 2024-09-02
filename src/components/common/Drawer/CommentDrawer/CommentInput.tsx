import { Dispatch, SetStateAction } from 'react';

interface CommentInputProps {
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  createCommentHandler: () => Promise<void>;
}

export default function CommentInput({
  comment,
  setComment,
  createCommentHandler,
}: CommentInputProps) {
  return (
    <div className="p-4 bg-white border-t">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={comment}
          onChange={(e) => {
            e.stopPropagation();
            setComment(e.target.value);
          }}
          onKeyDown={(e) => {
            e.stopPropagation();
          }}
          placeholder="댓글을 입력하세요..."
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
          onClick={createCommentHandler}
        >
          댓글 등록
        </button>
      </div>
    </div>
  );
}
