import React from 'react'
import Img1 from '../../public/EP.png';
import Img2 from '../../public/I3.png';
import Img3 from '../../public/IV.png';
import Img4 from '../../public/FP.png';
import Img5 from '../../public/QB.png';
import Img6 from '../../public/PA.png';


function Data() {
    const items = [
        {
          label: "کاسپین",
          startTime: "۱۵:۰۰",
          endTime: "۱۶:۱۵",
          startLocation: "تهران",
          endLocation: "اهواز",
          flightNumber: 842,
          price: "۶،۰۰۰،۰۰۰",
          seat: 10,
          flightKind: "اکونومی",
          baggageWeight: "۱۵ کیلوگرم",
          terminalNumber: 'ترمینال ۲',
          airplaneName: "Boeing MD",
          ticketKind: "سیستمی",
          imgSrc: Img3,
        },
        {
          label: "آتا",
          startTime: "۶:۰۰",
          endTime: "۸:۱۵",
          startLocation: "تهران",
          endLocation: "اهواز",
          flightNumber: 320,
          price: "۹،۰۰۰،۰۰۰",
          seat: 5,
          flightKind: "اکونومی",
          baggageWeight: "۲۵ کیلوگرم",
          terminalNumber: 'ترمینال ۴',
          airplaneName: "Boeing 735",
          ticketKind: "چارتر",
          imgSrc: Img2,
        },
        {
          label: "آسمان",
          startTime: "۲۱:۰۰",
          endTime: "۲۲:۳۵",
          startLocation: "تهران",
          endLocation: "اهواز",
          flightNumber: 620,
          price: "۱۲،۰۰۰،۰۰۰",
          seat: 8,
          flightKind: "اکونومی",
          baggageWeight: "۲۵ کیلوگرم",
          terminalNumber: 'ترمینال ۱',
          airplaneName: "Fokker 100",
          ticketKind: "سیستمی",
          imgSrc: Img1,
        },
        {
          label: "فلای پرشین",
          startTime: "۱۰:۴۵",
          endTime: "۱۲:۱۵",
          startLocation: "تهران",
          endLocation: "اهواز",
          flightNumber: 120,
          price: "۵،۰۰۰،۰۰۰",
          seat: 23,
          flightKind: "اکونومی",
          baggageWeight: "۲۵ کیلوگرم",
          terminalNumber: 'ترمینال ۴',
          airplaneName: "Fokker 100",
          ticketKind: "سیستمی",
          imgSrc: Img4,
        },
      ];
  return items
}

export default Data