import * as React from "react";

const ArrayLoop = () => {
   return (
    <>
        {Array.from(Array(4)).map((_, index) => (
          <div>{index}</div>
        ))}
    </>
  );
}
