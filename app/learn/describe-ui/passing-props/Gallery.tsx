import Profile from "./Profile";
import Avatar from "./Avatar";
import CardProfile from "./CardProfile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {/* challenge1 */}
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovered="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovered="a method for measuring carbon dioxide in seawater"
      />
      <h2>------------------------</h2>
      {/*  challenge2 */}
      <Avatar
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
        size={90}
      />
      <h2>------------------------</h2>
      {/* challenge3 */}
      <CardProfile />
    </div>
  );
}
