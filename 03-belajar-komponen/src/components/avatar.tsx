// avatar.tsx
import { getImageUrl } from "./utils";

type Person = {
  name: string;
  imageId: string;
};

type AvatarProps = {
  size: number;
  person?: Person; // Making person optional
};

function Avatar({ size, person }: AvatarProps) {
  // Check if person is defined before accessing its properties
  if (!person || !person.imageId) {
    // Handle the case where person or imageId is undefined
    return null; // or any fallback content or error handling
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;
