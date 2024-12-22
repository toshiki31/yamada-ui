import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ScanBarcode } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ScanBarcodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScanBarcodeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ScanBarcode}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)