"use client";
import { getImageUrl } from "./utils";

interface AvatarProps {
  person: {
    name: string;
    imageId: string;
  };
  size: number;
}

// 값이 높을 수록 선명한 디스플레이 (1 ~ 2 사이)
const RATIO = window.devicePixelRatio;

export default function Avatar({ person, size }: AvatarProps) {
  console.log("window.devicePixelRatio", RATIO); // 1.5
  const sizeLevel = size * RATIO >= 90 ? "b" : "s";

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
