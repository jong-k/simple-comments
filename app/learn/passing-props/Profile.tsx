import Avatar from "./Avatar";
import { getImageUrl } from "./utils";

interface ProfileProps {
  name: string;
  imageId: string;
  profession: string;
  awards: string[];
  discovered: string;
}

export default function Profile({
  name,
  imageId,
  profession,
  awards,
  discovered,
}: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({...awards})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}
