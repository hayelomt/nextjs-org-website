import { motion } from 'framer-motion';
import ImageUtils from '../../../core/ui/utils/image';
import { Organization } from '../organization';

const OrganizationCard = ({ organization }: { organization: Organization }) => {
  return (
    <>
      <motion.div
        whileHover={{ y: -15, scale: 1.01, transition: { stiffness: 80 } }}
        animate={{ y: 0, scale: 1, transition: { stiffness: 80 } }}
        className="h-[170px] w-full xs:w-[284px] max-w-[284px] bg-gray-300 rounded-[15px] overflow-hidden"
      >
        <img
          src={ImageUtils.getMediaUrl(organization.media[0])}
          alt={organization.name}
          className="w-full h-full bg-cover bg-center"
        />
      </motion.div>
    </>
  );
};

export default OrganizationCard;
