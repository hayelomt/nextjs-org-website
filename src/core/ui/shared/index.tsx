export * from './buttons';

const Tag = ({ label }: { label: string }) => (
  <div className="py-[6px] px-[10px] sm:px-[16px] center bg-brand h-fit w-fit rounded-[8px]">
    <p className="label text-white">{label}</p>
  </div>
);

export { Tag };
