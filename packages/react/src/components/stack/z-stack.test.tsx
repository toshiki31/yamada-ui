import { render, screen } from "../../../test"
import { Box } from "../box"
import { ZStack } from "./z-stack"

describe("<ZStack />", () => {
  test("ZStack renders correctly", () => {
    render(<ZStack>ZStack</ZStack>)
  })

  test("startIndex property works correctly", () => {
    render(
      <ZStack startIndex={10}>
        <Box>ZStack Item</Box>
      </ZStack>,
    )

    expect(screen.getByText("ZStack Item")).toHaveStyle({ zIndex: 10 })
  })

  test("Child elements are correctly overlaid and rendered", () => {
    render(
      <ZStack>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )

    expect(screen.getByText("Item 1")).toHaveStyle({ position: "absolute" })
    expect(screen.getByText("Item 2")).toHaveStyle({ position: "absolute" })
  })

  test("Whether the direction is working properly", () => {
    render(
      <ZStack direction="right">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )
    expect(screen.getByText("Item 1")).toHaveStyle({
      position: "absolute",
      zIndex: 0,
    })
    expect(screen.getByText("Item 2")).toHaveStyle({
      position: "absolute",
      zIndex: 1,
    })
  })

  test("Whether the reverse is working properly", () => {
    render(
      <ZStack reverse>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )
    expect(screen.getByText("Item 1")).toHaveStyle({
      position: "absolute",
      zIndex: 0,
    })
    expect(screen.getByText("Item 2")).toHaveStyle({
      position: "absolute",
      zIndex: 1,
    })
  })

  test("applies correct styles with direction set to top", () => {
    render(
      <ZStack direction="top">
        <Box>Box1</Box>
        <Box>Box2</Box>
      </ZStack>,
    )

    expect(screen.getByText("Box1")).toHaveStyle({
      left: 0,
      position: "absolute",
      zIndex: 0,
    })
    expect(screen.getByText("Box2")).toHaveStyle({
      left: 0,
      position: "absolute",
      zIndex: 1,
    })
  })

  test("applies correct styles with direction set to left", () => {
    render(
      <ZStack direction="left">
        <Box>Box1</Box>
        <Box>Box2</Box>
      </ZStack>,
    )

    expect(screen.getByText("Box1")).toHaveStyle({
      position: "absolute",
      top: 0,
      zIndex: 0,
    })
    expect(screen.getByText("Box2")).toHaveStyle({
      position: "absolute",
      top: 0,
      zIndex: 1,
    })
  })
})