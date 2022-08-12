import appConstants from '../../utils/constants';
import { Media } from './types';

const ImageUtils = {
  getMediaUrl: (media: Media | null) => {
    return media
      ? `${appConstants.mediaUrl}/${media.id}/${media.file_name}`
      : '';
  },
};

export default ImageUtils;
