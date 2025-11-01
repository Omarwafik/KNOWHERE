//Categories
// ========== offices =========
import office from "../assets/images/Categories/Offices.avif";
// ========== SharedArea =========
import SharedArea from "../assets/images/Categories/SharedArea.avif";
// ========== Meeting Room =========
import MeetingRoom from "../assets/images/Categories/V10-3.avif";
// ========== Virtual Office =========
import VirtualOffice from "../assets/images/Categories/VirtualOffice.avif";

// ======= Rooms Data ======
import RoomsImages from "../assets/images";
import {
  Briefcase,
  Building2,
  Globe,
  Users,
  Wifi,
  Monitor,
  Printer,
  Projector,
  Coffee,
  ClipboardPenLine,
} from "lucide-react";

const Categories = [
  {
    id: "1",
    category: "SharedAreas",
    image: SharedArea,
    description: "great for students to work & freelancers.",
    bigDescription:
      "Work, connect, and create in our vibrant shared workspace.Surrounded by innovators and entrepreneurs, you’ll find an inspiring atmosphere that boosts motivation and productivity.With comfortable desks, high-speed internet, and cozy break areas,it’s the perfect spot for focused work, casual meetings, or just enjoying your favorite coffee while getting things done.",
    icon: Users,
  },

  {
    id: "2",
    category: "MeetingRooms",
    image: MeetingRoom,
    description: "Have a Big Event? What are you wating for.",
    bigDescription:
      "Host your meetings in a professional space equipped with everything you need —high-quality screens, fast Wi-Fi, and a comfortable atmosphere that encourages collaboration.Whether it’s a client presentation or a team brainstorming session,our meeting rooms help you leave a strong and lasting impression.",
    icon: Briefcase,
  },

  {
    id: "3",
    category: "Office",
    image: office,
    description: "Great Classic Offices with Modern Styles.",
    bigDescription:
      "Enjoy your own fully equipped private office designed for focus, comfort, and productivity.Each space comes furnished with modern furniture, high-speed internet, and full administrative support.Ideal for entrepreneurs, small businesses, and teams who need a quiet and professional environment to get things done.",
    icon: Building2,
  },

  {
    id: "4",
    category: "VirtualOffice",
    image: VirtualOffice,
    description: "Not on the Ground Yet? No Problem.",
    bigDescription:
      "Get a prestigious business address that strengthens your company’s credibility — without the cost of a physical office.Our Virtual Office gives you an official address for all legal documents, invoices, and correspondence,along with mail handling, call answering, and meeting room access when needed.The perfect solution for startups and entrepreneurs who want a professional presence at minimal cost.",
    icon: Globe,
  },
];

const rooms = [
  {
    id: "1",
    name: "Single Room",
    category: "MeetingRooms",
    capacity: "1 ~ 2",
    tagline: "Focus. Create. Achieve — your personal workspace awaits.",
    rating: "",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.meetingRooms.SingleRoom,
    description:
      "A cozy and quiet private space designed for 1–2 people. Perfect if you need full focus, a private meeting, or a calm spot to work without distractions. Equipped with comfortable seating, high-speed internet, and a simple modern design, the Single Room creates the ideal environment for productivity and concentration.",
    prices: {
      hour: "150",
      halfDay: "350",
      FullDay: "500",
    },
  },
  {
    id: "2",
    name: "Small Meeting Room",
    category: "MeetingRooms",
    capacity: "6 ~ 7",
    tagline: "Perfect space for collaboration and creativity.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.meetingRooms.SmallMeetingRoom,
    description:
      "A modern, cozy space designed for focus and collaboration. Perfect for small team meetings, brainstorming sessions, or client calls. Equipped with a presentation screen, high-speed internet, and comfortable seating, this room accommodates 2–6 people in a quiet, productive environment.",
    prices: {
      hour: "450",
      halfDay: "1800",
      FullDay: "2500",
    },
  },
  {
    id: "3",
    name: "Big Meeting Room",
    category: "MeetingRooms",
    capacity: "14 ~ 16",
    tagline: "Big ideas need big spaces — make every meeting matter.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.meetingRooms.BigMeetingRoom,
    description:
      "A spacious and professional setting tailored for larger team discussions, workshops, or client presentations. With modern design, a large presentation screen, high-speed internet, and comfortable seating, this room accommodates 6–12 people while maintaining a productive and inspiring atmosphere.",
    prices: {
      hour: "750",
      halfDay: "2500",
      FullDay: "3750",
    },
  },
  {
    id: "4",
    name: "Ex Meeting Room",
    category: "MeetingRooms",
    capacity: "10 ~ 12",
    tagline: "Executive comfort meets creative collaboration.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.meetingRooms.ExMeetingRoom,
    description:
      "A unique meeting space designed for up to 10 people, featuring a round-table setup that encourages open discussion and collaboration. Ideal for strategy sessions, executive meetings, or creative brainstorming, this room combines comfort and professionalism with high-speed internet, a presentation screen, and a layout that keeps everyone connected and engaged.",
    prices: {
      hour: "750",
      halfDay: "2500",
      FullDay: "3750",
    },
  },
  {
    id: "5",
    name: "V10",
    category: "MeetingRooms",
    capacity: "10 ~ 12",
    tagline: "The VIP choice for high-level discussions.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.meetingRooms.V10,
    description:
      "An exclusive and premium meeting space designed for up to 10 people. Perfect for high-level discussions, board meetings, and executive sessions. The VIP Room combines elegance and functionality, featuring a large screen for presentations, high-speed internet, and a refined atmosphere that ensures comfort, privacy, and professionalism.",
    prices: {
      hour: "900",
      halfDay: "3800",
      FullDay: "6250",
    },
  },
  {
    id: "6",
    name: "V4",
    category: "MeetingRooms",
    capacity: "4 ~ 5",
    tagline: "Small space, big focus — perfect for your next idea.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.meetingRooms.V4,
    description:
      "A stylish and compact meeting space ideal for small teams or private discussions. Designed for up to 4 people, the V-4 Room offers a comfortable setup with high-speed internet, a presentation screen, and a quiet atmosphere that supports focus and productivity.",
    prices: {
      hour: "560",
      halfDay: "1560",
      FullDay: "2750",
    },
  },
  {
    id: "7",
    name: "Lecture Room",
    category: "MeetingRooms",
    capacity: "40 ~ 45",
    tagline: "Train, teach, and inspire — all in one space.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.meetingRooms.LectureRoom,
    description:
      "A versatile and spacious hall designed for workshops, training sessions, and large-scale meetings. With a modern setup that accommodates 35–45 participants, the Conference Hall is equipped with a projector/large screen, sound system, high-speed internet, and flexible seating arrangements. Perfect for courses, seminars, and events that require both comfort and professionalism.",
    prices: {
      hour: "1000",
      halfDay: "3600",
      FullDay: "8000",
    },
  },
  {
    id: "8",
    name: "Ex Office",
    category: "Office",
    capacity: "6 ~ 7",
    tagline: "Your private office for maximum productivity.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.Offices.ExOffice,
    description:
      "A dedicated shared workspace designed for focus and productivity. Perfect for small teams or individual professionals, this area accommodates 6 – 7 people and provides comfortable desks, ergonomic seating, and high-speed internet. With a modern and well-lit setup, the Workstation creates the ideal environment to get work done efficiently.",
    prices: {
      hour: "360",
      halfDay: "840",
      FullDay: "1200",
      Monthly: "30000",
    },
  },
  {
    id: "9",
    name: "Roof Office",
    category: "Office",
    capacity: "6 ~ 7",
    tagline: "Work with a view — inspiration starts here.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.Offices.ExRoofOffice,
    description:
      "A comfortable private office designed for up to 5 people — perfect for small teams or individuals who value focus and productivity. The space offers a calm, professional atmosphere that encourages deep work and collaboration. With ergonomic furniture, reliable Wi-Fi, and excellent sound insulation, it’s ideal for meetings, brainstorming sessions, or quiet solo work.",
    prices: {
      hour: "150",
      halfDay: "350",
      FullDay: "500",
      Monthly: "50000",
    },
  },

  {
    id: "10",
    name: "Partitions",
    category: "Office",
    capacity: "6 ~ 7",
    tagline: "Your personal zone in a vibrant shared office.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.Offices.Partitions,
    description:
      "A comfortable and private setup designed for startups and small teams. Each partition offers a dedicated desk with enough privacy to stay focused, while still being part of the collaborative coworking environment. With ergonomic seating, high-speed internet, and a modern design, this space is perfect for productive work sessions in a relaxed atmosphere.",
    prices: {
      hour: "240",
      halfDay: "600",
      FullDay: "900",
      Monthly: "15000",
    },
  },
  {
    id: "11",
    name: "Roof Big Offices",
    category: "Office",
    capacity: "8 ~ 10",
    tagline: "Spacious, private, and built for success.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Monitor, label: "Monitor" },
      { icon: Printer, label: "Printer" },
      { icon: Projector, label: "Projector" },
      { icon: Coffee, label: "Coffee" },
      { icon: ClipboardPenLine, label: "White Board" },
    ],
    facilities:
      "Wi-Fi, Coffee Bar, Bathroom, Projector, TV, Printer, Whiteboard, Reception Services",
    img: RoomsImages.Offices.RoofOffices,
    description:
      "A fully equipped office designed to give you privacy, comfort, and focus. Perfect for professionals, entrepreneurs, or small teams who need their own space. With modern furniture, high-speed internet, and a quiet atmosphere, the Private Office combines productivity with comfort, making it ideal for building and growing your business.",
    prices: {
      hour: "240",
      halfDay: "600",
      FullDay: "900",
      Monthly: "50000",
    },
  },
  {
    id: "12",
    name: "Shared Area 1",
    category: "SharedAreas",
    capacity: "25 ~ 30",
    tagline: "Connect. Collaborate. Create together.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Printer, label: "Printer" },
      { icon: Coffee, label: "Coffee" },
    ],
    facilities: "Wi-Fi, Coffee Bar, Bathroom, Reception Services",
    img: RoomsImages.sharedArea.Ground,
    description:
      "A bright and flexible shared workspace that blends indoor comfort with outdoor freshness. Whether you prefer working under soft lighting inside or enjoying a coffee in the open-air corner, this area gives you the best of both worlds — productivity and relaxation in perfect balance.",
    prices: {
      Student: {
        hour: "70",
        FullDay: "150",
      },
      Corporate: {
        hour: "70",
        FullDay: "200",
      },
    },
  },
  {
    id: "13",
    name: "Shared Area 2",
    category: "SharedAreas",
    capacity: "20 ~ 25",
    tagline: "Flexible space for creative collaboration.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Printer, label: "Printer" },
      { icon: Coffee, label: "Coffee" },
    ],
    facilities: "Wi-Fi, Coffee Bar, Bathroom, Reception Services",
    img: RoomsImages.sharedArea.floor1,
    description:
      "A calm, inspiring indoor space designed for focus and collaboration. The modern interior, cozy seating, and natural lighting create a professional yet welcoming atmosphere — ideal for deep work, team discussions, or simply enjoying your creative flow.",
    prices: {
      Student: {
        hour: "70",
        FullDay: "150",
      },
      Corporate: {
        hour: "70",
        FullDay: "200",
      },
    },
  },
  {
    id: "14",
    name: "Shared Area 3",
    category: "SharedAreas",
    capacity: "35 ~ 40",
    tagline: "Work. Network. Grow — all in one community space.",
    icons: [
      { icon: Wifi, label: "Wifi" },
      { icon: Printer, label: "Printer" },
      { icon: Coffee, label: "Coffee" },
    ],
    facilities: "Wi-Fi, Coffee Bar, Bathroom, Reception Services",
    img: RoomsImages.sharedArea.floor3,
    description:
      "A spacious rooftop area with a stunning view and a refreshing open-air vibe. Perfect for casual meetings, brainstorming sessions, or simply unwinding under the sky. With plenty of seating and a wide, comfortable layout, it’s where work meets inspiration — literally on top of the world.",
    prices: {
      Student: {
        hour: "70",
        FullDay: "150",
      },
      Corporate: {
        hour: "70",
        FullDay: "200",
      },
    },
  },
  {
    id: "15",
    name: "Virtual Office",
    category: "VirtualOffice",
    capacity: "",
    tagline: "",
    icons: "",
    facilities: "WiFi, Whiteboard, Printer, Projector, Tea, Coffee, Water",
    img: RoomsImages.virtualOffice,
    description: "A modern shared area that combines productivity and comfort.",
  },
];

export { Categories, rooms };
