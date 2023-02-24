import { style, globalStyle } from "@vanilla-extract/css";

const oxanium = "Oxanium, sans-serif";

export default globalStyle("html, body", {
	fontFamily: oxanium
});

export const bodyStyle = style({
	padding: "2% 5%"
});

export const flexCentered = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});