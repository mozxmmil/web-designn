import { Button } from "@/components/ui/button";
import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
const LoginTw = cva("w-[40%]  flex justify-end gap-3 ", {
  variants: {
    variant: {
      defalut: "",
    },
  },
  defaultVariants: {
    variant: "defalut",
  },
});
interface Props
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LoginTw> {}

export const Login_Signin: React.FC<Props> = ({ variant, className }) => {
  return (
    <div className={twclx(LoginTw({ variant, className }))}>
      <Button variant={"secondary"} theme={"rounded"}>
        Log In
      </Button>
      <Button theme={"rounded"}>Sign In</Button>
    </div>
  );
};
