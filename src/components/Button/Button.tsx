import React, { ReactNode, useRef } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'

export interface ButtonProps extends AriaButtonProps {
  children?: ReactNode
}

const Button = (props: ButtonProps) => {
  const ref = useRef(null)
  const { buttonProps } = useButton(props, ref)

  return (
    <button {...buttonProps}>{props.children}</button>
  )
}

export default Button