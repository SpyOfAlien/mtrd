import { FC } from "react";

interface IProps {
  children: any;
  checked?: boolean;
  checkboxColor?: string;
  styles?: any;
  size: "large" | "medium" | "small";
}

const CheckedIcon: FC<IProps> = ({
  children,
  checked = false,
  size,
  styles,
  checkboxColor = "#05057F",
}) => {
  return (
    <div style={styles} className="flex items-center gap-[4px]">
      <div
        style={{
          width:
            size === "large" ? "14px" : size === "medium" ? "12px" : "10px",
          height:
            size === "large" ? "14px" : size === "medium" ? "12px" : "10px",
          borderColor: checkboxColor,
          borderWidth: size === "large" ? "1.5px" : "1px",
        }}
        className={`p-[1px] flex items-center justify-centers`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
            }}
            viewBox="0 0 306 363.75"
            x="0px"
            y="0px"
            fillRule="evenodd"
            clipRule="evenodd"
            width="100%"
            height="100%"
          >
            <g>
              <path d="M301 1c5,-3 8,3 -1,11 -94,80 -140,174 -172,254 -16,13 -37,38 -48,15 -14,-30 -44,-88 -80,-98 37,-44 82,27 98,58 38,-88 123,-191 203,-240z" />
            </g>
          </svg>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CheckedIcon;
