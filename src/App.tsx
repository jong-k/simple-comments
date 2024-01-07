import { useState } from "react";
import CommentInput from "./components/CommentInput.tsx";
import CommentItem from "./components/CommentItem.tsx";

export interface Comment {
  id: string;
  value: string;
}

export default function App() {
  const [commentList, setCommentList] = useState<Comment[]>([]);

  return (
    <div className="container">
      <h2>
        댓글
        <span> {commentList.length}</span>
      </h2>

      <CommentInput setCommentList={setCommentList} />

      <div>
        {commentList.map(({ id, value }) => (
          <CommentItem
            key={id}
            setCommentList={setCommentList}
            id={id}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}
