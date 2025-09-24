import bg1 from "../../assets/images/SharedArea/Floor2/Bar.avif";
import bg2 from "../../assets/images/Meeting Rooms/Ex-MeetingRoom/ExMeetingRoom.avif";
import bg3 from "../../assets/images/Meeting Rooms/BigMeetingRoom/BMR.jpg";
import { Check, ChevronRight, PackageOpen } from "lucide-react";
import { useState } from "react";
import { hover, motion } from "framer-motion";
import { fadeInDown, fadeInUp } from "../../Motion/motion";
const tiers = [
  {
    front: {
      name: "subscription One",
    },
    back: {
      name: "10 Days",
      id: "tier-10",
      href: "#",
      // priceMonthly: '$29',
      description: "Perfect if you're just getting started with our product.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
      ],
      featured: false,
      img: bg1,
    },
  },
  {
    front: {
      name: "subscription Two",
    },
    back: {
      name: "21 Days",
      id: "tier-21",
      href: "#",
      // priceMonthly: '$59',
      description: "Great for growing teams and small businesses.",
      features: [
        "100 products",
        "Up to 50,000 subscribers",
        "Advanced analytics",
        "Priority support",
        "Marketing automations",
      ],
      featured: true,
      img: bg2,
    },
  },
  {
    front: {
      name: "subscription Three",
    },
    back: {
      name: "30 Days",
      id: "tier-30",
      href: "#",
      // priceMonthly: '$99',
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "Dedicated support rep",
        "Custom integrations",
      ],
      featured: false,
      img: bg3,
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
    <div
      className="overflow-hidden w-full min-h-[90vh]  p-4 sm:p-16 lg:p-20"
      style={{
        background: "linear-gradient(135deg, #e4e2dd 50%, #ffff 50%)",
      }}
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
            className="bg-primary mx-auto flex items-center gap-2 sm:gap-5 w-fit px-4 py-2 rounded text-center"
          >
            <PackageOpen className="text-white" />
            <h2 className="text-sm font-semibold text-white uppercase tracking-wide">
              Subscription Packages
            </h2>
          </motion.div>
          <motion.p
            variants={fadeInDown}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl text-center"
          >
            Find the plan that fits you best
          </motion.p>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto  mt-4 max-w-2xl text-lg text-black"
          >
            Flexible and transparent pricing designed to match your needs.
            Choose a package that gives you the space, tools, and support to do
            your best work.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 capitalize">
          {tiers.map((tier) => (
            <div style={{ perspective: "1000px" }} className="">
              <motion.div
                key={tier.back.id}
                animate={{ rotateY: flipped[tier.back.id] ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full min-h-[400px] rounded-2xl shadow-md bg-gradient-to-r from-grad1 to-grad2 preserve-3d "
              >
                {/* FRONT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 backface-hidden">
                  <h3 className="text-3xl font-semibold text-white p-2 text-center">
                    {tier.front.name}
                  </h3>
                  <motion.div
                    whileHover="hover"
                    variants={{}} // مهم علشان يمرر الـ context للأبناء
                    className="py-3 px-4 bg-secondary rounded text-white flex items-center gap-1 cursor-pointer group"
                    onClick={() => toggleFlip(tier.back.id)}
                  >
                    <button className="text-lg">Show</button>
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
                      <ChevronRight className="group-hover:animate- transition duration-200" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 backface-hidden rotate-y-180 bg-black/80 rounded-2xl p-6 text-white">
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
  );
}
