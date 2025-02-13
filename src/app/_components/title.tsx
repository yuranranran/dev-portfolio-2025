type TitleProps = {
    title: string;
    subtitle?: string; // Optional property
};

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mt-16">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
      {subtitle && ( // Render subtitle only if it's provided
        <h3 className="text-xl text-gray-600 mt-2">
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default Title;
