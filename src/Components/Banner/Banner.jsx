const Banner = () => {
  return (
    <div>
      <div
        className="hero bg-cover min-h-[520px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/n87tDHq/photo-1423592707957-3b212afa6733.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              Best Online Classes From{" "}
              <span className="text-[#E28519]">EduBuzz</span>
            </h1>
            <p className="mb-5 text-lg">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deserunt mollit.
            </p>
            <button className="px-5 py-3 rounded-md border border-[#E28519] text-[#E28519]">
              Find Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
