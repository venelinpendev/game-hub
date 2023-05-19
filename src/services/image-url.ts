const getCroppedImageUrl = (url: string) => {
  const target = "media/"
  const indexToSliceOn = url.indexOf(target) + target.length;
  return url.slice(0, indexToSliceOn) + "crop/600/400/" + url.slice(indexToSliceOn);
}

export default getCroppedImageUrl;