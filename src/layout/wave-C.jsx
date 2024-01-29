import '../layout/Wave.scss';
import '../App.scss';

import { IconImage } from "../Components/zen-C";
import { InputValue } from '../Components/zen-C'
import { LargeHeadings } from "../Components/zen-C";
import { CustomBoldText } from '../Components/zen-C';
import { VerySmallText } from '../Components/zen-C';
import { CustomText } from "../Components/zen-C";
import { SubTittles } from "../Components/zen-C";

import Sidebar from "../assets/icon-pics/sidebar.png";
import Exclude from '../assets/icon-pics/exclude.png';
import Search from '../assets/icon-pics/search.png';
import MessageC from '../assets/icon-pics/message-circle.png';
import BellN from '../assets/icon-pics/bell.png';
import SmallProfile from '../assets/profile-images/avatar-pic.png';
import SmallProf from '../assets/profile-images/avatar-small.png';
import ChevronDown from '../assets/icon-pics/chevron-down.png';

const largeHeadings = ['Hiphonic'];

export const LogoComp = () => {
  return (
    <div className="logo_comp">
      <IconImage source={Sidebar} />
      <IconImage source={Exclude}/>
      <LargeHeadings lhsText={largeHeadings[0]}/>
    </div>
  );
}

export const ProfileBox = () => {
  const profileBox = ['Angela Lee', '@anglee'];
  return (
    <div className="profile_box">
      <IconImage source={SmallProf} />
      <div className="profile_names_box">
        <CustomBoldText cbText={profileBox[0]} />
        <VerySmallText vsText={profileBox[1]} />
      </div>
    </div>
  );
}

export const SubTittleBox = ({ stTxt }) => {
  return (
    <div className="sub_title_box all_boxes">
      <SubTittles sTittle={stTxt}/>
    </div>
  )
};

export const CustomTextBox = ({ ctTxt, src, iH, iW }) => {

  return (
    <div className="all_boxes" style={{gap:'20px'}}>
      <IconImage source={src} h={iH} w={iW} />
      <CustomText cText={ctTxt} />
    </div>
  );
};

export const BoldTextBox = ({ ctTxt, src, iH, iW }) => {
   const eachStyles = {
    fontWeight: 600,
    fontSize: '14px',
    color: 'black'
  };

  return (
    <div className="all_boxes" style={{ gap: "16px" }}>
      <IconImage source={src} h={iH} w={iW} />
      <CustomText cStyles={eachStyles} cText={ctTxt} />
    </div>
  );
};


export const SearchBox = () => {

  const sStyles = {
    width: '380px',
    height: '48px',
    borderRadius: '12px'
  }
  return (
    <div className="search_box">
      <InputValue typeV={"text"} placehV={"Search..."} stylesV={sStyles}/>
    </div>
  );
}



// function Navbar() {
//   return (
//     <div className="navbar">
//       <div className="navlogo">
//         {/* <img src={Sidebar} alt="" /> */}
//         <IconImage source={Sidebar} />
//         <IconImage source={Exclude} />
//         {/* <img src="" alt="" /> */}
//         <LargeHeadings lhsText={largeHeadings[0]}/>
//       </div>
//       <div className="nav_right">
//         <div className="input_value">
//           <InputValue typeV="text" placehV="Search" />
//         </div>
//         <div className="profile_icons">
//           <IconImage source={MessageC} />
//           <IconImage source={BellN} />
//           <IconImage source={SmallProfile} />
//           <IconImage source={ChevronDown} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar