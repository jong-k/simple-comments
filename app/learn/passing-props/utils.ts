export function getImageUrl(imageId: string, size: string = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
