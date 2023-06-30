import React, { ReactNode, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";
import { css } from "@emotion/css";
import { colors, spacings } from "../../tokens";

export interface ButtonProps extends AriaButtonProps {
  children?: ReactNode;
}

const styles = {
  backgroundColor: colors.colorPrimary,
  margin: spacings.md,
  fontSize: '25px'
}

const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button
      {...buttonProps}
      className={css(styles)}
    >
      {props.children}
    </button>
  );
};

export default Button;
