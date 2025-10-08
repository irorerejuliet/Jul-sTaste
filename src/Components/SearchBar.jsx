const SearchBar = ({
  type,
  placeholder,
  required = false,
  value,
  name,
  handleInputChange,
  rightIcon,
}) => {
  return (
    <div>
      <div className="relative">
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`bg-black border border-gray-600 text-gray-300 text-sm  rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block  p-3 outline-none px-5 placeholder:text-sm shadow-xl lg:w-full w-[350px]`}
        />
        {rightIcon && (
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center  lg:pr-4 pr-7 cursor-pointer"
          >
            {rightIcon}
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
