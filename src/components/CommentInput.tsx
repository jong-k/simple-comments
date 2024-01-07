import { useState } from "react";
import type { Comment } from "../App.tsx";

interface CommentInputProps {
  setCommentList: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const SAMPLE_COMMENT: Comment = {
  id: "",
  value: "",
};

export default function CommentInput({ setCommentList }: CommentInputProps) {
  const [newComment, setNewComment] = useState<Comment>(SAMPLE_COMMENT);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment({
      ...newComment,
      id: new Date().toISOString(),
      value: e.target.value,
    });
  };

  const handleSubmit = () => {
    setCommentList((prev) => [...prev, newComment]);
    setNewComment(SAMPLE_COMMENT);
  };

  return (
    <div className="input-container">
      <textarea
        placeholder="댓글을 입력하세요"
        className="comment-input"
        rows={4}
        value={newComment.value}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        등록
      </button>
    </div>
  );
}
