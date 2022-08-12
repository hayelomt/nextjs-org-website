import { useState } from 'react';
import Layout from '../../core/ui/layout/Layout';
import PaginationGroup from '../../core/ui/pagination/group';
import { Toggle } from '../../core/ui/shared/buttons';
import { TextHeading } from '../../core/ui/shared/heading';
import { Paginated } from '../../core/ui/utils/types';
import OurProjectCard from './components/OurProjectCard';
import useProjectController from './hooks/useProjectController';
import { Project } from './project';

const OurProjectPage = ({
  projects: initProjects,
}: {
  projects: Paginated<Project>;
}) => {
  const {
    tag,
    setTag,
    data: projects,
    fetchData,
    ...pagination
  } = useProjectController(initProjects);

  return (
    <>
      <Layout showHeaderShadow={true}>
        <TextHeading
          title={
            <h1 className="mb-3">
              Our <strong className="text-red">Projects</strong>
            </h1>
          }
          crumbLinks={[{ label: 'Home', url: '/' }, { label: 'Projects' }]}
          description={
            <div className="mt-[20px] mb-[20px] max-w-[736px] sm:mt-[32px] sm:mb-[40px]">
              <p className="body1 text-center text-light-text">
                Maecenas suscipit in nulla tristique pretium. Praesent eget
                tellus nibh. Praesent mi orci, fringilla sed est ac, efficitur
                auctor velit. Fusce fermentum feugiat lacinia. Maecenas eleifend
                bibendum tellus ac pretium. Etiam odio arcu, vestibulum id
                mattis ut, gravida sed ante. Nam ut cursus m
              </p>
            </div>
          }
        />

        <div className="px-global  pb-[60px] sm:pb-[136px]">
          <div className="max-w-global mx-auto">
            <div className="mb-[35px] sm:mb-[70px] flex flex-wrap items-center gap-[12px]  md:gap-[20px] max-w-full overflow-x-auto py-2 justify-center">
              <Toggle
                active={tag === 'all' || tag === ''}
                onClick={() => {
                  setTag('all');
                }}
                label="ALL"
              />
              <Toggle
                active={tag === 'children'}
                onClick={() => {
                  setTag('children');
                }}
                label="CHILDREN"
              />
              <Toggle
                active={tag === 'std'}
                onClick={() => {
                  setTag('std');
                }}
                label="STD"
              />
              <Toggle
                active={tag === 'contraception'}
                onClick={() => {
                  setTag('contraception');
                }}
                label="CONTRACEPTION"
              />
            </div>

            <div className="w-full mb-[25px] sm:mb-[58px]">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-[40px]">
                {projects.map((project) => (
                  <OurProjectCard project={project} key={project.id} />
                ))}
              </div>
            </div>

            <div className="w-full center gap-x-[14px] max-w-full overflow-x-auto">
              <PaginationGroup
                buttonsLimit={5}
                currentPage={pagination.currentPage}
                pageCount={Math.ceil(pagination.total / pagination.perPage)}
                disabled={pagination.loading}
                onPageChange={(page) => {
                  fetchData(
                    'projects',
                    `?page=${page}&limit=${pagination.perPage}&tag=${
                      tag === 'all' ? '' : tag
                    }`
                  );
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OurProjectPage;
