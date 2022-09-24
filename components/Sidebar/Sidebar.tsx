import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LinkItem from "@components/Sidebar/LinkItem/LinkItem";

export default function Sidebar() {
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              Notus NextJS
            </a>
          </Link>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded "
            }
          >
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <LinkItem
                url={"/admin/dashboard"}
                icon={""}
                label={"Dashboard"}
              />
              <LinkItem url={"/admin/offers"} icon={""} label={"Ponude"} />
              <LinkItem url={"/admin/projects"} icon={""} label={"Projekti"} />
              <LinkItem
                url={"/admin/work-orders"}
                icon={""}
                label={"Radni nalozi"}
              />
              <LinkItem url={"/admin/calendar"} icon={""} label={"Kalendar"} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
