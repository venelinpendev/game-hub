import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={4} />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}{" "}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
