import { style } from "@vanilla-extract/css";
import { flexCentered } from "~/styles/common.css";

export const logoWrapper = style({
	marginRight: "auto",
});

export const headerWrapper = style([flexCentered, {
	marginBottom: "60px"
}]);