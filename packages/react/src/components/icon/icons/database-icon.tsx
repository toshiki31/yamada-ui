import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Database } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `DatabaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DatabaseIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Database} className={cx("ui-lucide-icon", className)} {...rest} />
)