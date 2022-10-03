import React, { ReactElement } from "react";
import Admin from "@layouts/Admin";
import { NextPageWithLayout } from "@pages/_app";
import ToggleCell from "@components/Table/cells/ToggleCell";
import Table from "@components/Table/Table";

const Offers: NextPageWithLayout = () => {
  const data = React.useMemo(
    () => [
      {
        id: "2008051",
        name: "usluga šivanja",
        accepted: true,
        date: "06.08.2020.",
      },
      {
        id: "1",
        name: "Hello",
        accepted: "World",
        date: "World",
      },
      {
        id: "1",
        name: "Hello",
        accepted: "World",
        date: "World",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Broj ponude",
        accessor: "id",
      },
      {
        Header: "Naziv",
        accessor: "name",
      },
      {
        Header: "Ponuda prihvacena",
        accessor: "accepted",
        Cell: (row) => (
          <ToggleCell value={row.accepted} onChange={() => alert("sljaka")} />
        ),
      },
      {
        Header: "Datum izrade",
        accessor: "date",
      },
    ],
    []
  );

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Table
            columns={columns}
            data={data}
            tableName={"Offers"}
            rowActions={[
              {
                icon: <i className="fas fa-pen" />,
                label: "Edit",
                onClick: () => console.log("bla"),
              },
              {
                icon: <i className="fas fa-trash" />,
                label: "Delete",
                onClick: () => console.log("delete"),
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

Offers.getLayout = (page: ReactElement) => <Admin>{page}</Admin>;

export default Offers;
