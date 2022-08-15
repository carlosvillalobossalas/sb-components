/// <reference types="react" />
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
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
