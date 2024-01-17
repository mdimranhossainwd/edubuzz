const Button = ({ name }) => {
  return (
    <div>
      <button className="w-full px-5 py-3 rounded-md border-none bg-[#E28519] text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
