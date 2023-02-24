import { styleVariants } from '@vanilla-extract/css';

const base = {
  background: "none",
  border: "none",
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  padding: "0 12px",
  color: "#C1B9B9",
  lineHeight: "19px",
  fontWeight: 800,
  fontSize: 16,
  height: 32
}

const black = [base, {
  background: "#222323",
  borderRadius: "6px",
}];

const plain = [base, {}]

export const btn = styleVariants({
  plain,
  black
});

