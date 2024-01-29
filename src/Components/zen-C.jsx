import '../Components/Zen.scss';

export const LargeHeadings = ({ lhsClass, lhsText }) => {
  return <h3 className={`large_headings ${lhsClass}`}>{lhsText}</h3>
}

export const SubTittles = ({ sTittle }) => {
  return <h6 className="sub_tittles">{sTittle}</h6>;
}

export const CustomBoldText = ({ cbText }) => {
  return <p className="custom_bold_text">{cbText}</p>
}

export const CustomText = ({ cText, cStyles }) => {
  return <p className="custom_text" style={cStyles}>{cText}</p>;
};

export const VerySmallText = ({ vsText }) => {
  return <p className="very_small_text">{vsText}</p>
}

export const IconImage = ({ source, h, w }) => {
  return <img src={source} alt="noic" height={h} width={w} />;
};

export const InputValue = ({typeV, placehV, stylesV}) => {
  return <input type={typeV} placeholder={placehV} style={stylesV} />
}
