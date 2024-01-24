const CommonHeading = ({ heading, colorheading, subparagraph }) => {
  return (
    <>
      <div className="mt-6">
        <h2 className="mb-5 text-4xl text-center text-black font-bold">
          {heading} <span className="text-[#E28519]">{colorheading}</span>
        </h2>
        <p className="md:w-[770px] text-[15px] text-center md:px-0 px-3 mx-auto">
          {subparagraph}
        </p>
      </div>
    </>
  );
};

export default CommonHeading;
