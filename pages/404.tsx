import React, { ReactElement } from "react";
import { NextPageWithLayout } from "@pages/_app";
import Admin from "@layouts/Admin";

const Error404: NextPageWithLayout = () => {
  return <>404</>;
};

Error404.getLayout = (page: ReactElement) => <Admin>{page}</Admin>;

export default Error404;
