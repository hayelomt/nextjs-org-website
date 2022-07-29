import { motion } from 'framer-motion';

const OrganizationCard = () => {
  return (
    <>
      <motion.div
        whileHover={{ y: -15, scale: 1.01, transition: { stiffness: 80 } }}
        animate={{ y: 0, scale: 1, transition: { stiffness: 80 } }}
        className="h-[170px] w-full xs:w-[284px] max-w-[284px] bg-brand rounded-[15px]"
      ></motion.div>
    </>
  );
};

export default OrganizationCard;
