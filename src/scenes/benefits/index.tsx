import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { SelectedPage, BenefitType } from "@/shared/types"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore nemo."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore nemo."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore nemo."
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
           hidden: { opacity: 0, x:-50 },
           visible: { opacity: 1, x: 0 }
          }}
          className="md:w-3/5 md:my-5"
          >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore nemo, sunt a quasi dolore temporibus repellendus corrupti vitae harum quaerat delectus ut illum facilis. Quibusdam explicabo sit totam cupiditate.</p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
          className="md:flex items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          >
          {benefits.length > 0 && 
            benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))
          }
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img 
            src={BenefitsPageGraphic} 
            alt="benefits-page-graphic"
            className="mx-auto" 
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible: { opacity: 1, x: 0 }
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                 hidden: { opacity: 0, x:-50 },
                 visible: { opacity: 1, x: 0 }
                }}
              >
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nostrum aliquid labore quod rem! Tempora mollitia facilis qui doloremque ipsum nobis, tempore corrupti, cum rem, dolorum dignissimos quos deserunt possimus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nobis commodi asperiores amet blanditiis itaque voluptates voluptatum culpa, adipisci velit ipsum quibusdam sequi iusto esse, numquam odio corporis, perspiciatis totam.</p>

                <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quod. Sapiente quaerat libero quas cum laborum ipsa magni minima vel deserunt autem dicta beatae officiis mollitia eum, voluptate quo tempore.</p>
              </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits