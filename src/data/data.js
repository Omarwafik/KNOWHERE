// ========== Values ==========
import img1 from "../assets/images/Values/people-comunity.webp";
import img2 from "../assets/images/Values/img2.jpg";
// import { Users, Briefcase, Building2, Globe } from "lucide-react";

//Categories
// ========== offices =========
import office from "../assets/images/Categories/Offices.avif";
// ========== SharedArea =========
import SharedArea from "../assets/images/Categories/SharedArea.avif";
// ========== Meeting Rooms =========
// import MeetingRoom from "../assets/images/Categories/";
// Virtual Office
// import SharedAreaimages from "../assets/images/SharedArea";

// ======= Rooms Data ======
import RoomsImages from "../assets/images";
import { Briefcase, Building2, Globe, Users } from "lucide-react";

const Categories = [
  {
    id: "1",
    category: "Shared Areas",
    image: SharedArea,
    description: "great for students to work & freelancers.",
    icon: Users,
  },

  {
    id: "2",
    category: "Meeting Rooms",
    image: office,
    description: "Have a Big Event? What are you wating for.",
    icon: Briefcase,
  },

  {
    id: "3",
    category: "Office",
    image: office,
    description: "Great Classic Offices with Modern Styles.",
    icon: Building2,
  },

  {
    id: "4",
    category: "Virtual Office",
    image: SharedArea,
    description: "Not on the Ground Yet? No Problem.",
    icon: Globe,
  },
];

const rooms = [
  {
    id: "1",
    name: "Single Room",
    category: "Meeting Rooms",
    capacity: "1 ~ 2",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.meetingRooms.SingleRoom,
    description:
      "A cozy and quiet private space designed for 1–2 people. Perfect if you need full focus, a private meeting, or a calm spot to work without distractions. Equipped with comfortable seating, high-speed internet, and a simple modern design, the Single Room creates the ideal environment for productivity and concentration.",
  },
  {
    id: "2",
    name: "Small Meeting Room",
    category: "Meeting Rooms",
    capacity: "6 ~ 7",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.meetingRooms.SmallMeetingRoom,
    description:
      "A modern, cozy space designed for focus and collaboration. Perfect for small team meetings, brainstorming sessions, or client calls. Equipped with a presentation screen, high-speed internet, and comfortable seating, this room accommodates 2–6 people in a quiet, productive environment.",
  },
  {
    id: "3",
    name: "Big Meeting Room",
    category: "Meeting Rooms",
    capacity: "14 ~ 16",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.meetingRooms.BigMeetingRoom,
    description:
      "A spacious and professional setting tailored for larger team discussions, workshops, or client presentations. With modern design, a large presentation screen, high-speed internet, and comfortable seating, this room accommodates 6–12 people while maintaining a productive and inspiring atmosphere.",
  },
  {
    id: "4",
    name: "Ex Meeting Room",
    category: "Meeting Rooms",
    capacity: "10 ~ 12",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.meetingRooms.ExMeetingRoom,
    description:
      "A unique meeting space designed for up to 10 people, featuring a round-table setup that encourages open discussion and collaboration. Ideal for strategy sessions, executive meetings, or creative brainstorming, this room combines comfort and professionalism with high-speed internet, a presentation screen, and a layout that keeps everyone connected and engaged.",
  },
  {
    id: "5",
    name: "V-10",
    category: "Meeting Rooms",
    capacity: "10 ~ 12",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.meetingRooms.V10,
    description:
      "An exclusive and premium meeting space designed for up to 10 people. Perfect for high-level discussions, board meetings, and executive sessions. The VIP Room combines elegance and functionality, featuring a large screen for presentations, high-speed internet, and a refined atmosphere that ensures comfort, privacy, and professionalism.",
  },
  {
    id: "6",
    name: "V-4",
    category: "Meeting Rooms",
    capacity: "4 ~ 5",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.meetingRooms.V4,
    description:
      "A stylish and compact meeting space ideal for small teams or private discussions. Designed for up to 4 people, the V-4 Room offers a comfortable setup with high-speed internet, a presentation screen, and a quiet atmosphere that supports focus and productivity.",
  },
  {
    id: "7",
    name: "Lecture Room",
    category: "Meeting Rooms",
    capacity: "40 ~ 45",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.meetingRooms.LectureRoom,
    description:
      "A versatile and spacious hall designed for workshops, training sessions, and large-scale meetings. With a modern setup that accommodates 35–45 participants, the Conference Hall is equipped with a projector/large screen, sound system, high-speed internet, and flexible seating arrangements. Perfect for courses, seminars, and events that require both comfort and professionalism.",
  },
  {
    id: "8",
    name: "Ex Office",
    category: "Office",
    capacity: "6 ~ 7",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.Offices.ExOffice,
    description:
      "A dedicated shared workspace designed for focus and productivity. Perfect for small teams or individual professionals, this area accommodates 6–7 people and provides comfortable desks, ergonomic seating, and high-speed internet. With a modern and well-lit setup, the Workstation creates the ideal environment to get work done efficiently.",
  },
  {
    id: "9",
    name: "Roof Office",
    category: "Office",
    capacity: "6 ~ 7",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.Offices.ExRoofOffice,
    description: "great room helwa gedan",
  },
  {
    id: "10",
    name: "partitions",
    category: "Office",
    capacity: "6 ~ 7",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.Offices.Partitions,
    description:
      "A comfortable and private setup designed for startups and small teams. Each partition offers a dedicated desk with enough privacy to stay focused, while still being part of the collaborative coworking environment. With ergonomic seating, high-speed internet, and a modern design, this space is perfect for productive work sessions in a relaxed atmosphere.",
  },
  {
    id: "11",
    name: "Roof big Offices",
    category: "Office",
    capacity: "8 ~ 10",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.Offices.RoofOffices,
    description:
      "A fully equipped office designed to give you privacy, comfort, and focus. Perfect for professionals, entrepreneurs, or small teams who need their own space. With modern furniture, high-speed internet, and a quiet atmosphere, the Private Office combines productivity with comfort, making it ideal for building and growing your business.",
  },
  {
    id: "11",
    name: "Shared Area 1",
    category: "Shared Areas",
    capacity: "25 ~ 30",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.sharedArea.floor1,
    description: "great room helwa gedan",
  },
  {
    id: "12",
    name: "Shared Area 2",
    category: "Shared Areas",
    capacity: "20 ~ 25",
    facilities: "aincs uaobs pamcs babs iwqows aocsacn ",
    img: RoomsImages.sharedArea.floor2,
    description: "great room helwa gedan",
  },
  {
    id: "13",
    name: "Shared Area 3",
    category: "Shared Areas",
    capacity: "35 ~ 40",
    facilities: "WiFi, Whiteboard, Printer, Projector, Tea, Coffee, Water,   ",
    img: RoomsImages.sharedArea.floor3,
    description: "great room helwa gedan",
  },
];
export { Categories, rooms };
