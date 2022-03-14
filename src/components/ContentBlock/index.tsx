import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import RightBlockCustom from "./RightContentBlockCustom";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "rightcustom") return <RightBlockCustom {...props} />;
  return null;
};

export default ContentBlock;
