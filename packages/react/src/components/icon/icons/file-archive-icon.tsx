import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { FileArchive } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `FileArchiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileArchiveIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={FileArchive}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)