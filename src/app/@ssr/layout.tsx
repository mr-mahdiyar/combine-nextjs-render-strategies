import React, { Fragment, type PropsWithChildren } from "react";

export default function SsrContentLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <p className="mb-2">Browse by categories:</p>
      {children}
    </Fragment>
  );
}
