import type { CSSUIObject } from "../../core"
import type { ModalHeaderProps } from "./modal-header"
import { forwardRef } from "../../core"
import { cx } from "../../utils"
import { useDialog } from "./modal-context"
import { ModalHeader } from "./modal-header"

export interface DialogHeaderProps extends ModalHeaderProps {}

export const DialogHeader = forwardRef<DialogHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const styles = useDialog()

    const css: CSSUIObject = { ...styles.header }

    return (
      <ModalHeader
        ref={ref}
        className={cx("ui-dialog__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

DialogHeader.displayName = "DialogHeader"
DialogHeader.__ui__ = "DialogHeader"