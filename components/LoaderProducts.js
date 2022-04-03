import React from "react";
import Skeleton from "react-loading-skeleton";
import { Grid } from "@geist-ui/react";
export default function LoaderProducts() {
  return (
    <Grid.Container className="mt-5" gap={1}>
      {Array(8)
        .fill(0)
        .map(() => (
          <Grid sm={24} md={8} lg={6} className="flex-column mb-3">
            <Skeleton count={1} height={180} className="w-100" />
            <div className="mt-2 w-100">
              <Skeleton count={3} />
            </div>
          </Grid>
        ))}
    </Grid.Container>
  );
}
