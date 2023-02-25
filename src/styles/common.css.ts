import { style, globalStyle, styleVariants } from "@vanilla-extract/css";

const oxanium = "Oxanium, sans-serif";

export default globalStyle("html, body", {
	fontFamily: oxanium,
	backgroundColor: "#0c1116"
});

export const bodyStyle = style({
	padding: "2% 5%"
});

export const flexCentered = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});