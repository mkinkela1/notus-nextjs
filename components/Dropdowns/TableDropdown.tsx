import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { IRowActions } from "@components/Table/Table";
import styled from "styled-components";
import Flex from "@components/Flex";

interface IProps {
  id: string;
  rowActions?: IRowActions[];
}

const DropdownLink = styled.li`
  background: #fff;
  &:hover {
    background: rgba(241, 245, 249);
    cursor: pointer;
  }
  & > div {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.5rem 1rem;
    font-weight: 400;
    display: block;
    width: 100%;
    color: rgba(51, 65, 85);
    white-space: nowrap;
  }
`;

const TableDropdown: React.FC<IProps> = ({ rowActions, id }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        {rowActions.map(({ label, onClick, icon }, index) => (
          <DropdownLink key={index}>
            <div
              onClick={(e) => {
                e.preventDefault();
                onClick(id);
                setDropdownPopoverShow(false);
              }}
            >
              <Flex gap={10} alignItems="center">
                {icon}
                {label}
              </Flex>
            </div>
          </DropdownLink>
        ))}
      </div>
    </div>
  );
};

export default TableDropdown;
