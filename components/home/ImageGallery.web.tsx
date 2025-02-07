import React from "react";
import { Spacing } from "../design-system/spacing";

/**
 * Web-only component.
 */
export function ImageGallery({ images }: { images: any[] }) {
  return (
    <div style={galleryStyles}>
      <div style={scrollContainerStyles}>
        {images.map((image, index) => (
          <img key={index} src={image.uri} style={imageStyles} />
        ))}
      </div>
    </div>
  );
}

const galleryStyles = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  width: "100%",
  overflowY: "hidden",
  overflowX: "scroll",
  paddingBottom: Spacing.S4,
  paddingTop: Spacing.S4,
} as const;

const scrollContainerStyles = {
  display: "flex",
  flexDirection: "row",
  gap: Spacing.S2,
  paddingLeft: Spacing.S4,
  paddingRight: Spacing.S4,
  height: "100%",
  maxHeight: 600,
} as const;

const imageStyles = {
  height: "100%",
  width: "auto",
  objectFit: "contain",
} as const;
