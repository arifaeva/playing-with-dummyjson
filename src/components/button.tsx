import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "rounded-md border-2 border-black bg-pink-500 font-semibold text-black transition-all duration-100 [box-shadow:5px_5px_black] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_black] disabled:opacity-50",
  variants: {
    variant: {
      primary: "bg-pink-500 ",
      secondary: "bg-purple-500",
      tertiary: "bg-yellow-400",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-base",
      lg: "px-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type TButton = VariantProps<typeof style>;
interface Props extends TButton, React.ComponentPropsWithRef<"button"> {}

export const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={twMerge(style({ ...props }), props.className)}
    >
      {props.children}
    </button>
  );
};
