import { SubTittleBox, CustomTextBox, BoldTextBox } from "./wave-C";
import timelineIc from '../assets/icon-pics/timeline.png';
import friendsIc from "../assets/icon-pics/friends.png";
import groupsIc from "../assets/icon-pics/groups.png";
import videosIc from "../assets/icon-pics/videos.png";
import photosIc from "../assets/icon-pics/Photos.png";
import eventsIc from "../assets/icon-pics/events.png";
import PSq from "../assets/logo-pics/pinkR.png";
import CSq from "../assets/logo-pics/cyanR.png";
import OSq from "../assets/logo-pics/orangeR.png";

import './super.scss';

export const MenuContainer = () => {
   const mAr = ["Timeline", "Friends", "Groups", "Videos", "Photos", "Events"];
   return (
     <div className="menu_container">
       <SubTittleBox stTxt="Menu" />
       <CustomTextBox ctTxt={mAr[0]} src={timelineIc} iH={22} iW={22} />
       <CustomTextBox ctTxt={mAr[1]} src={friendsIc} iH={22} iW={22} />
       <CustomTextBox ctTxt={mAr[2]} src={groupsIc} iH={22} iW={22} />
       <CustomTextBox ctTxt={mAr[3]} src={videosIc} iH={22} iW={22} />
       <CustomTextBox ctTxt={mAr[4]} src={photosIc} iH={22} iW={22} />
       <CustomTextBox ctTxt={mAr[5]} src={eventsIc} iH={22} iW={22} />
     </div>
   );
}

export const ShortcutContainer = () => {
   const w = 40;
   const h = 40;
   const d = "Design";
   const shAr = [`Website${d}`, `Mobile${d}`, `Product${d}`];
   return (
      <div className="shortcut_container">
         <SubTittleBox stTxt="shortcuts" />
         <BoldTextBox ctTxt={shAr[0]} src={PSq} iH={h} iW={w}/>
         <BoldTextBox ctTxt={shAr[1]} src={CSq} iH={h} iW={w}/>
         <BoldTextBox ctTxt={shAr[2]} src={OSq} iH={h} iW={w}/>
      </div>
   )
}