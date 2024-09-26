"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "block w-full rounded-md border border-slate-200 bg-white px-6 py-3 focus:outline-none focus:border-2 focus:border-black transition duration-200 placeholder:font-normal font-normal",
});

type TInput = VariantProps<typeof style>;
interface Props extends TInput, React.ComponentPropsWithRef<"input"> {}

export const Input = (props: Props) => {
  return (
    <input
      {...props}
      className={twMerge(style({ ...props }), props.className)}
    />
  );
};
