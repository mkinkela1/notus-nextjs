import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface IProps {
  url: string;
  icon: string;
  label: string;
}

const LinkItem: React.FC<IProps> = ({ url, label }) => {
  const router = useRouter();
  const isNotCurrentUrl = router.pathname.indexOf(url) !== -1;
  return (
    <li className="items-center">
      <Link href={url}>
        <a
          href="#pablo"
          className={
            "text-xs uppercase py-3 font-bold block " +
            (isNotCurrentUrl
              ? "text-lightBlue-500 hover:text-lightBlue-600"
              : "text-blueGray-700 hover:text-blueGray-500")
          }
        >
          <i
            className={
              "fas fa-tv mr-2 text-sm " +
              (isNotCurrentUrl ? "opacity-75" : "text-blueGray-300")
            }
          ></i>{" "}
          {label}
        </a>
      </Link>
    </li>
  );
};

export default LinkItem;
