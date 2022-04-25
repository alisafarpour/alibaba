import React from 'react'
import Img1 from '../../public/EP.png';
import Img2 from '../../public/I3.png';
import Img3 from '../../public/IV.png';
import Img4 from '../../public/FP.png';
import Img5 from '../../public/QB.png';
import Img6 from '../../public/PA.png';


function DataFilterBox() {
    const items = [
        {
          label: "کاسپین",
          ticketKind: "سیستمی",
          imgSrc: Img3,
        },
        {
          label: "آتا",
          ticketKind: "چارتر",
          imgSrc: Img2,
        },
        {
          label: "آسمان",
          ticketKind: "سیستمی",
          imgSrc: Img1,
        },
        {
          label: "فلای پرشین",
          ticketKind: "سیستمی",
          imgSrc: Img4,
        },
        {
          label: "علی ایرلاین",
          ticketKind: "سیستمی",
          imgSrc: Img5,
        },
        {
          label: "قشم ایر",
          ticketKind: "سیستمی",
          imgSrc: Img6,
        },
      ];
  return items
}

export default DataFilterBox