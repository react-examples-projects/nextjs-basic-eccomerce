import React from "react";
import { Text } from "@geist-ui/react";

export default function TextShort({ content, maxLength = 100, ...args }) {
  const isLargeComment = content.length > maxLength;
  const text = isLargeComment
    ? content.substring(0, maxLength) + "... "
    : content + " ";
  return <Text {...args}>{text}</Text>;
}
