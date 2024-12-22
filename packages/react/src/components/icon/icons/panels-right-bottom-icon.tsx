import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PanelsRightBottom } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PanelsRightBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsRightBottomIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={PanelsRightBottom}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)