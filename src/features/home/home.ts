import { OtherSay } from '../about/about';
import { Blog } from '../blog/blog';
import { Gallery } from '../gallery/gallery';
import { Organization } from '../memberorganization/organization';
import { Project } from '../ourprojects/project';
import { UpcomingEvent } from '../upcomingevents/upcoming-event';

export type HomeResponse = {
  projects: Project[];
  blogs: Blog[];
  galleries: Gallery[];
  otherSay: OtherSay[];
  events: UpcomingEvent[];
  organizations: Organization[];
};
