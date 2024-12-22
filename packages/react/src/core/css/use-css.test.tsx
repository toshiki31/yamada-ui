import type { FC } from "react"
import type { Dict } from "../../utils"
import { render, renderHook, screen } from "../../../test"
import { ui } from "../factory"
import { useCSS } from "./use-css"

describe("useCSS", () => {
  test("returns styles with theme values", () => {
    const Component: FC<any> = () => {
      const className = useCSS({
        color: "gray.500",
        display: "block",
        fontSize: "md",
        mx: "4",
      })

      return <ui.div className={className} data-testid="component" />
    }

    renderHook(() => <Component />)

    expect(screen.getByTestId("component")).toHaveStyle({
      color: "var(--ui-colors-gray-500)",
      display: "block",
      fontSize: "var(--ui-fontSizes-md)",
      marginInlineEnd: "var(--ui-spaces-4)",
      marginInlineStart: "var(--ui-spaces-4)",
    })
  })

  test("supports functional values", () => {
    const Component: FC = () => {
      const className = useCSS({
        color: (t: Dict) => t.colors?.gray?.[500],
      })

      return <ui.div className={className} data-testid="component" />
    }

    render(<Component />)

    expect(screen.getByTestId("component")).toHaveStyle({
      color: "#6b7280",
    })
  })
})