import React from "react";
import { HowerWapper } from "./HowerWapper";
import { ImageSection } from "./ImageSection";
import { BottomSection } from "./BottomSection";
import { HoverCard } from "@/utils/SliderImage";
interface Props extends HoverCard {
cardkey ? :number
}
export const HowerCard: React.FC<Props> = ({cardkey ,...props }) => {
  return (
    <HowerWapper className="group w-[20%]" key={cardkey}>
      <ImageSection src={props.photo} fill alt="no" />
      <BottomSection name={props.name} />
    </HowerWapper>
  );
};
