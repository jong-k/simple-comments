import { getImageUrl } from "./utils";

interface AvatarProps {
  person: {
    name: string;
    imageId: string;
  };
  size: number;
}

export default function Avatar({ person, size }: AvatarProps) {
  const sizeLevel = size >= 90 ? "b" : "s";

  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId, sizeLevel)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
