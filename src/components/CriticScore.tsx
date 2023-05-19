import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const colour = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={colour} borderRadius="4px" fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
