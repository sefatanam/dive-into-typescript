
type Margin = "margin"
type Padding = "padding"

type Gap = Margin | Padding;
type Size = "rem" | "em" | "px";



type GapSize = `${Gap} ${number}${Size}`;


const gapSizz: GapSize = "margin 12rem";

const gapSiza: GapSize = "padding 4px";
