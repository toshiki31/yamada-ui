import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx, mergeRefs } from "../../utils"
import { usePopover } from "./popover"

export interface PopoverHeaderProps extends HTMLUIProps<"header"> {}

export const PopoverHeader = forwardRef<PopoverHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const { headerRef, styles } = usePopover()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-start",
      ...styles.header,
    }

    return (
      <ui.header
        ref={mergeRefs(headerRef, ref)}
        className={cx("ui-popover__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

PopoverHeader.displayName = "PopoverHeader"
PopoverHeader.__ui__ = "PopoverHeader"