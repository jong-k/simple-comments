import type { Comment } from "../App.tsx";

interface CommentItemProps extends Comment {
  setCommentList: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export default function CommentItem({
  id,
  value,
  setCommentList,
}: CommentItemProps) {
  const deleteComment = () => {
    setCommentList((prev) => {
      return [...prev].filter((comment) => comment.id !== id);
    });
  };

  return (
    <div className="comment-box">
      <div className="comment-header">
        <h3>닉네임</h3>
        <button type="button" onClick={deleteComment}>
          삭제
        </button>
      </div>

      <p>{value}</p>
    </div>
  );
}
