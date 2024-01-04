import { getThemeProps } from "@material-ui/styles";
import React from "react";
import "./Headings.css";

export default function Headings({LargeHeading, SmallHeading, Text, PageIllustration }) {
	return (
		<div className="Page_Headings">
			<div className="Section_Headings">
				<p className="large_heading">
					{LargeHeading}
				</p>
				<p className="small_heading">{SmallHeading}</p>
				<br></br>
				<p className="Heading_text">{Text}</p>
			</div>
			{PageIllustration!==''?
				<div className="Page_Image">
					<img src={PageIllustration} alt={LargeHeading}/>
				</div>:""}
		</div>
	);
}
export function HeadingNew({ LargeHeading, SmallHeading, Text}) {
  return (
    <div className="Page_Headings">
      <div className="Section_Headings">
        <p className="large_heading">{LargeHeading}</p>
        <p className="small_heading">{SmallHeading}</p>
        <br></br>
        <p className="Heading_text">{Text}</p>
      </div>
    </div>
  );
}
