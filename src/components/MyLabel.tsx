import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Set label text
   */
  label: string;
  /**
   * Set label size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * set All Caps
   */
  allCaps: boolean;
  /**
   * set color text
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * set font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
