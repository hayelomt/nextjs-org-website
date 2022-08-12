import { apiInstance } from '../../src/core/services/api';
import { Paginated } from '../../src/core/ui/utils/types';
import OurProjectPage from '../../src/features/ourprojects/OurProjectsPage';
import { Project } from '../../src/features/ourprojects/project';

type ProjectProps = {
  projects: Paginated<Project>;
};

const OurProjects = ({ projects }: ProjectProps) => {
  return <OurProjectPage projects={projects} />;
};

export default OurProjects;

export async function getStaticProps(): Promise<{ props: ProjectProps }> {
  const result = await apiInstance.get('projects?limit=6');
  const projects = result.data as Paginated<Project>;
  projects.per_page = 6;

  return {
    props: {
      projects,
    },
  };
}
