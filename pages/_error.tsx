import React, { ReactElement } from "react";
import { NextPageWithLayout } from "@pages/_app";
import Admin from "@layouts/Admin";

const Error: NextPageWithLayout = () => {
  return <>Error</>;
};

Error.getLayout = (page: ReactElement) => <Admin>{page}</Admin>;

export default Error;
