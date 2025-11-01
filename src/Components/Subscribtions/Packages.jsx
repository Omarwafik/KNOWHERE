import bg1 from "../../assets/images/SharedArea/Ground/Ground1.avif";
import bg2 from "../../assets/images/Meeting Rooms/Ex-MeetingRoom/ExMeetingRoom.avif";
import bg3 from "../../assets/images/Meeting Rooms/BigMeetingRoom/BMR1.avif";
import { Check, ChevronRight, PackageOpen } from "lucide-react";
import { useState } from "react";
import { hover, motion } from "framer-motion";
import { fadeInDown, fadeInUp } from "../../Motion/motion";
import packages from "../../assets/images/Subscriptions/index";
import { Helmet } from "react-helmet-async";
// console.log(packages.package1);
const tiers = [
  {
    front: {
      name: "Subscription One",
    },
    back: {
      name: "10 Days",
      id: "tier-10",
      href: "#",
      description:
        "A flexible plan for individuals exploring our shared workspace. Ideal for light users seeking comfort and focus.",
      features: [
        "10 days (within 1 months)",
        "Flexible scheduling",
        "25% discount compared to daily rate",
        "High-speed Wi-Fi , shared facilities & coffee area",
      ],
      featured: false,
      img: packages.package1,
    },
  },
  {
    front: {
      name: "Subscription Two",
    },
    back: {
      name: "21 Days",
      id: "tier-21",
      href: "#",
      description:
        "A Silver Plan for regular users who enjoy flexibility with consistent access and extra savings.",
      features: [
        "21 days access (within 1.5 months)",
        "Full shared area privileges",
        "25% discount compared to daily rate",
        "High-speed Wi-Fi , shared facilities & coffee area",
      ],
      featured: false,
      img: packages.package2,
    },
  },
  {
    front: {
      name: "Subscription Three",
    },
    back: {
      name: "30 Days",
      id: "tier-30",
      href: "#",
      description:
        "A Gold plan for professionals who want full-month access and maximum value.",
      features: [
        "30 days access (within 2 months)",
        "Priority access to all shared areas",
        "25% discount compared to daily rate",
        "High-speed Wi-Fi , shared facilities & coffee area",
      ],
      featured: false,
      img: packages.package3,
    },
  },
  {
    front: {
      name: "Dedicated Desk",
    },
    back: {
      name: "Monthly Access",
      id: "tier-40",
      href: "#",
      description:
        "A premium plan for professionals who need their own permanent spot.",
      features: [
        "Permanent personal desk within shared area",
        "Secure space to keep your belongings and devices",
        "Full access to all shared facilities",
        "Perfect for professionals seeking stability and privacy",
      ],
      featured: false,
      img: packages.package4,
    },
  },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Package() {
  const [flipped, setFlipped] = useState({});
  const toggleFlip = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
     <Helmet>
              <title>Knowhere – Find Your Perfect Workspace</title>
              <meta
                name="description"
                content="Discover and book coworking spaces, private offices, and meeting rooms with Knowhere. Perfect for freelancers, startups, and teams seeking flexible workspaces."
              />
              <meta
                name="keywords"
                content="coworking spaces, shared office, meeting rooms, virtual office, workspace Egypt"
              />
                      <link rel="canonical" href="https://knowhere-eg.com/" />
            
            </Helmet>
    <div
      className="overflow-hidden w-full min-h-[90vh] mt-12 md:mt-0 p-4 sm:p-14 lg:p-16"
      style={
        {
          // background: "linear-gradient(135deg, #e4e2dd 50%, #ffff 50%)",
        }
      }
      id="subscriptions"
    >
      <div className="relative isolate p-2 sm:p-5">
        {/* Title */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-primary mx-auto flex items-center gap-2 sm:gap-3 w-fit px-3 py-1 md:px-4 md:py-2 rounded text-center"
          >
            <PackageOpen className="text-white" />
            <h2 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wide">
              SHared Area Packages
            </h2>
          </motion.div>
          <motion.p
            variants={fadeInDown}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary  text-center"
          >
            Find the plan that fits you best
          </motion.p>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto  mt-4 max-w-2xl text-sm md:text-lg text-black"
          >
            Flexible and transparent pricing designed to match your needs.
            Choose a package that gives you the space, tools, and support to do
            your best work.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 capitalize ">
          {tiers.map((tier) => (
            <div
              key={tier.back.id}
              style={{ perspective: "1000px" }}
              className=""
            >
              <motion.div
                animate={{ rotateY: flipped[tier.back.id] ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full min-h-[400px] rounded-2xl shadow-md bg-primary preserve-3d "
              >
                {/* FRONT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 backface-hidden">
                  <h3 className=" text-2xl md:text-3xl font-semibold text-white p-2 text-center">
                    {tier.front.name}
                  </h3>
                  <motion.div
                    whileHover="hover"
                    variants={{}} // مهم علشان يمرر الـ context للأبناء
                    className="py-2 px-3 md:py-3 md:px-4 bg-secondary rounded text-white flex items-center gap-1 cursor-pointer group"
                    onClick={() => toggleFlip(tier.back.id)}
                  >
                    <button className="text-sm md:text-lg">Discover</button>
                    <motion.div
                      variants={{
                        hover: {
                          x: [0, 8, 0],
                          transition: {
                            duration: 0.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        },
                      }}
                    >
                      <ChevronRight className="group-hover:animate- transition duration-200 " />
                    </motion.div>
                  </motion.div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 backface-hidden rotate-y-180  rounded-2xl p-3 text-white bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${tier.back.img})`,
                  }}
                >
                  <h3 className="text-2xl font-bold ">{tier.back.name}</h3>
                  <p className="text-sm">{tier.back.description}</p>
                  <ul className="text-sm space-y-2 self-start">
                    {tier.back.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-auto py-2 px-6 bg-secondary rounded"
                    onClick={() => toggleFlip(tier.back.id)}
                  >
                    Back
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
