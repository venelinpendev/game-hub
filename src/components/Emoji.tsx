import { Image, ImageProps } from "@chakra-ui/react";
import BullsEye from "../assets/bulls-eye.webp";
import Meh from "../assets/meh.webp";
import ThumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "great", boxSize: "25px" },
    5: { src: BullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
