import getRawCss from "./getRawCss";

let styles = document.getElementById("styles.import");

const exportStyle = (selector, style) => {
    const generatedStyle = getRawCss(style);
    styles.appendChild(document.createTextNode(`.${selector} {${generatedStyle}}`))
}
export default exportStyle;