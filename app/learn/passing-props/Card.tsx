interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
}
