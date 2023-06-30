import React, { ReactNode, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";
import { css } from "@emotion/css";
import { colors } from "../../tokens";

export interface ButtonProps extends AriaButtonProps {
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button
      {...buttonProps}
      className={css({ backgroundColor: colors.colorSecondary })}
    >
      {props.children}
    </button>
  );
};

export default Button;
