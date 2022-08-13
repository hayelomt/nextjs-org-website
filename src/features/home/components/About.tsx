import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ArrowedButton, ArrowedLink } from '../../../core/ui/shared/buttons';
import Icons from '../../../core/ui/utils/icons';
import { useEffect, useRef, useState } from 'react';
import { Project } from '../../ourprojects/project';
import Link from 'next/link';
import ImageUtils from '../../../core/ui/utils/image';

const animate = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  },
  items: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
};

const About = ({ projects }: { projects: Project[] }) => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const ProjectItem = ({ project }: { project: Project }) => (
    <div className="aspect-about flex w-full flex-col min-w-[300px] md:min-w-[400px] max-w-[400px] rounded-[20px] overflow-hidden">
      <div className="flex-1 bg-gray-100">
        <img
          src={ImageUtils.getMediaUrl(project.media[0])}
          alt="project cover"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex min-h-[110px] items-center justify-between bg-brand px-[18px] py-[12px] sm:px-[24px] sm:py-[20px]">
        <div className="flex flex-col text-white">
          <h3 className="mb-1 line-clamp-1">{project.title}</h3>
          <p className="body1 line-clamp-2">{project.description}</p>
        </div>

        <div className="center h-[70px] w-[70px] rounded-full bg-white flex-shrink-0">
          <Link href="/projects/[id]" as={`/projects/${project.id}`}>
            <a>
              <Icons.ArrowRight className="w-[24px] h-fit text-red" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    setWidth(
      carousel.current!.scrollWidth - carousel.current!.offsetWidth + 10
    );
  }, []);

  return (
    <>
      <div className="px-global bg-gray-bg">
        <div
          className="max-w-global relative mx-auto mb-[40px] h-[360px] w-full bg-white sm:mb-[84px]"
          style={{ boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.02)' }}
        >
          <div className="absolute top-[-72px] h-[373px] w-full justify-center px-2 md:px-[48px] mx-auto flex">
            <motion.div
              className="max-w-global px-global overflow-hidden cursor-grab mx-auto w-full"
              ref={carousel}
              whileTap={{ cursor: 'grabbing' }}
            >
              <motion.div
                variants={animate.container}
                initial="hidden"
                animate="show"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="mx-auto flex w-fit gap-x-[30px] place-items-center"
              >
                {projects.map((project) => (
                  <motion.div variants={animate.items} key={project.id}>
                    <ProjectItem project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-global mx-auto flex flex-col md:flex-row">
          <div
            className="mr-0 md:mr-[50px] h-[400px] md:h-[734px] w-full md:w-[400px] flex-shrink-0 rounded-[36px] lg:mr-[103px] lg:w-[630px] relative bg-cover bg-center"
            style={{ backgroundImage: 'url("/imgs/home/about-speech.jpeg")' }}
          >
            <div className="px-[20px] md:px-[30px] py-[16px] md:py-[23px] bg-brand center w-fit absolute center rounded-[20px] top-[50%] left-0 -translate-y-[50%]">
              <div className="flex text-white items-center">
                <p className="mr-[12px] text-[50px] md:text-[72px] leading-[72px] tracking-tighter font-barlow">
                  17
                </p>
                <div className="flex flex-col">
                  <p className="subheading !font-barlow text-[#D2D2D2]">
                    Years
                  </p>
                  <p className="subheading !font-barlow text-[#D2D2D2]">
                    of experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 md:p-0">
            <p className="subheading mb-1 text-red">About CORHA</p>
            <h2 className="mb-[35px] max-w-[433px] text-dark-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className="body1 mb-[54px] text-light-text">
              The Consortium of Reproductive Health Associations (CORHA) is a
              member driven umbrella organizations of 85 foreign and local
              NGOs/CSOs committed to the provision of comprehensive, integrated
              and sustainable Reproductive Health (RH) information and services
              in Ethiopia. Its ultimate goal is to contribute to improving the
              overall health status and quality of life for all Ethiopian
              people, thereby contributing to national development.
            </p>
            <div>
              <ArrowedLink label="Lean More" href="/about" as="/about" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
