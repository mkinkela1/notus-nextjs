import React from "react";
import Sidebar from "@components/Sidebar/Sidebar";

interface IProps {
  filters?: React.ReactNode;
  children: React.ReactNode;
}

export default function Admin({ children, filters }: IProps) {
  return (
    <>
      <Sidebar />
      <div
        className="relative md:ml-64 bg-blueGray-100 h-full min-h-full"
        style={{ minHeight: "100vh" }}
      >
        {/*<HeaderStats />*/}
        <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">{filters}</div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-10 mx-auto w-full -m-24">{children}</div>
      </div>
    </>
  );
}
