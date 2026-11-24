import OpengraphImage, { alt as ogAlt, contentType as ogContentType, size as ogSize } from "./opengraph-image";

// X/Twitter uses the same preview card as other sites.
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default OpengraphImage;
