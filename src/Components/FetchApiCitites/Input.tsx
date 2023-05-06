import { FC, InputHTMLAttributes } from "react";

type P = {} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<P> = ({ value , onChange}) => {
    console.log(value);
  return (
    <div>
      <input
      onChange={onChange}
        value={value}
        className="py-5 px-10 border-gray-400 border-4"
        placeholder="Enter a keyword"
      />
    </div>
  );
};

export default Input;
