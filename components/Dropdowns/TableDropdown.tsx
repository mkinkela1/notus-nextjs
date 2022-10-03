import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { createPopper } from "@popperjs/core";

const TableDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log(dropdownPopoverShow);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("touchend", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("touchend", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (event: MouseEvent) => {
    if (!container?.current?.contains(event.target as Node)) {
      setDropdownPopoverShow(false);
    }
  };

  const openDropdownPopover = () => {
    createPopper(
      container.current as Element,
      dropdownRef.current as HTMLElement,
      {
        placement: "left-start",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -40],
            },
          },
        ],
      }
    );
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div ref={container}>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={dropdownRef as LegacyRef<HTMLDivElement>}
        className={
          (dropdownPopoverShow ? "block z-100 " : "invisible z-0 ") +
          "bg-white text-base float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-yellow-900"
          }
          onClick={(e) => alert("1")}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => alert("2")}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => alert("3")}
        >
          Something else here
        </a>
      </div>
    </div>
  );
};

export default TableDropdown;
