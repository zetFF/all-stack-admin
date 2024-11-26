interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <>
      <div>
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </>
  );
};
