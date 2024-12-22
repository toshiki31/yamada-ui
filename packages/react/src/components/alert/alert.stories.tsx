import type { Meta, StoryFn } from "@storybook/react"
import { noop } from "../../utils"
import { Box } from "../box"
import { CloseButton } from "../close-button"
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "./alert"

type Story = StoryFn<typeof Alert>

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Components / Alert",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <Alert status="info">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="error">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const Subtle: Story = () => {
  return (
    <>
      <Alert variant="subtle" status="info">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="subtle" status="success">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="subtle" status="warning">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="subtle" status="error">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const Surface: Story = () => {
  return (
    <>
      <Alert variant="surface" status="info">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="surface" status="success">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="surface" status="warning">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="surface" status="error">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const Solid: Story = () => {
  return (
    <>
      <Alert variant="solid" status="info">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="solid" status="success">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="solid" status="warning">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="solid" status="error">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const IslandAccent: Story = () => {
  return (
    <>
      <Alert variant="island-accent" status="info">
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="island-accent" status="success">
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="island-accent" status="warning">
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="island-accent" status="error">
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const TopAccent: Story = () => {
  return (
    <>
      <Alert variant="top-accent" status="info">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="top-accent" status="success">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="top-accent" status="warning">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="top-accent" status="error">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const LeftAccent: Story = () => {
  return (
    <>
      <Alert variant="left-accent" status="info">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="left-accent" status="success">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="left-accent" status="warning">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="left-accent" status="error">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const WithColorMode: Story = () => {
  return (
    <>
      <Alert colorScheme="green" status="info">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert colorScheme="purple" status="success">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert colorScheme="gray" status="warning">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert colorScheme="pink" status="error">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}

export const UseCustomLayout: Story = () => {
  return (
    <>
      <Alert
        alignItems="center"
        flexDirection="column"
        h="2xs"
        justifyContent="center"
        status="success"
        textAlign="center"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle fontSize="lg" mb={1} mr={0} mt={4}>
          セル
        </AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert status="success">
        <AlertIcon />
        <Box>
          <AlertTitle>セル</AlertTitle>
          <AlertDescription>
            か…完全体に………完全体になれさえすれば………！！！
          </AlertDescription>
        </Box>
        <CloseButton position="absolute" right={2} top={2} onClick={noop} />
      </Alert>
    </>
  )
}

export const WithLoading: Story = () => {
  return (
    <>
      <Alert variant="subtle" status="loading">
        <AlertIcon />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="solid" status="loading">
        <AlertIcon variant="grid" />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="subtle" status="loading">
        <AlertIcon variant="puff" color="blue.500" />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>

      <Alert variant="solid" status="loading">
        <AlertIcon variant="dots" />
        <AlertTitle>セル</AlertTitle>
        <AlertDescription>
          か…完全体に………完全体になれさえすれば………！！！
        </AlertDescription>
      </Alert>
    </>
  )
}