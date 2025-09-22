

const SearchBar = ({type, placeholder, required = false, value, name, handleInputChange, rightIcon}) => {
  return (
    <div className="flex justify-center w-full max-w-md md:max-w-lg lg:max-w-xl mr-40">
      <div className="relative">
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`bg-black border border-gray-600 text-gray-300 text-sm  rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block p-2.5 outline-none px-8 placeholder:text-sm shadow-xl`}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center  pr-4 cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar
