/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<any>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  // useEffect(() => {
  //   const handler = (event: any) => {
  //     if (divEl.current) {
  //       return;
  //     }

  //     if (!divEl.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   document.addEventListener("click", handler, true);
  //   return () => {
  //     document.removeEventListener("click", handler);
  //   };
  // }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderOptions = options.map((option: any) => {
    return (
      <option
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </option>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{renderOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
