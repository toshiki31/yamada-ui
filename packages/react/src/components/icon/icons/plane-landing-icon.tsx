import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { PlaneLanding } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PlaneLandingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlaneLandingIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={PlaneLanding}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)