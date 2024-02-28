import Frame_2 from '../icon/Frame_2.svg'
import Frame from '../icon/Frame.svg'
import Guruhlar from '../icon/Gruhlar.svg'
import Kurslar from '../icon/Kurslar.svg'
import Moliya from '../icon/Moliya.svg'
import HR from '../icon/RD.svg'
import Talaba from '../icon/Talaba.svg'
import Vector from '../icon/Vector.svg'
import Arrow from '../icon/Arrow.svg'

export const NavLists = [
    { id: 1, title: "Anlitika", data: "", iconClass: Frame, iconArrow: Arrow,},
  {
    id: 2,
    title: "Buyurtma",
    data: [
      "Buyurtmalar ro'yxati",
      "Birinchi darsga yozilish",
      "Yangi talabalar ro'yxati",
    ],
    iconClass: Frame_2,
    iconArrow: Arrow,
  },
  {
    id: 3,
    title: "Moliya",
    data: "",
    iconClass: Moliya,
    iconArrow: Arrow,
  },
  {
    id: 4,
    title: "Talaba",
    data: ["Barcha Talabalar", "Davomat", "Active", "Arxiv", "Ota-onalar"],
    iconClass: Talaba,
    iconArrow: Arrow,
  },
  {
    id: 5,
    title: "Guruhlar",
    data: ["Guruhlar", "Dars Jadvali", "Xonalar"],
    iconClass: Guruhlar,
    iconArrow: Arrow,
  },
  {
    id: 6,
    title: "Kurslar",
    data: ["Barcha Kurslar", "Yo'nalishlar"],
    iconClass: Kurslar,
    iconArrow: Arrow,
  },
  {
    id: 7,
    title: "HR",
    data: ["Ro'llar", "Xodimlar"],
    iconClass: HR,
    iconArrow: Arrow,
  },
  {
    id: 8,
    title: "Sozlamalar",
    data: ["Umumiy Sozlamalar", "Manager", "Mentor", "Talaba"],
    iconClass: Vector,
    iconArrow: Arrow,
  },
];

