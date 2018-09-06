import React from "react";

import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilters from "./LinksListFilters";

export default () => {
  return (
    <div>
      <PrivateHeader title="this is your private header" />
      <LinksListFilters />
      <AddLink />
      <LinksList />
    </div>
  );
};
