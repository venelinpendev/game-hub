import NoImagePlaceholder from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return NoImagePlaceholder;

  const target = "media/";
  const indexToSliceOn = url.indexOf(target) + target.length;
  return url.slice(0, indexToSliceOn) + "crop/600/400/" + url.slice(indexToSliceOn);
};

export default getCroppedImageUrl;
