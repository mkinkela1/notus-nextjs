import React, { ReactElement } from "react";

import Admin from "@layouts/Admin";
import { NextPageWithLayout } from "@pages/_app";
import CardTable from "@components/Cards/CardTable";

const Tables: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
};

Tables.getLayout = (page: ReactElement) => <Admin>{page}</Admin>;

export default Tables;
