import { Box } from "../components/box"
import { Center } from "../components/center"
import { Wrap } from "../components/flex"
import { HStack } from "../components/stack"
import { VStack } from "../components/stack"
import { Text } from "../components/text"

export default {
  title: "Styled System / Pseudo",
}

export const After = () => {
  return (
    <Box
      bg="primary"
      color="white"
      m="lg"
      p="lg"
      pos="relative"
      rounded="lg"
      _after={{
        bg: "secondary",
        color: "white",
        content: "'after'",
        left: "lg",
        p: "lg",
        pos: "absolute",
        rounded: "lg",
        top: "lg",
      }}
    >
      Box
    </Box>
  )
}

export const Before = () => {
  return (
    <Box
      bg="warning"
      color="white"
      m="lg"
      p="lg"
      pos="relative"
      rounded="lg"
      _before={{
        bg: "danger",
        color: "white",
        content: "'before'",
        left: "-lg",
        p: "lg",
        pos: "absolute",
        rounded: "lg",
        top: "-lg",
      }}
    >
      Box
    </Box>
  )
}

export const Hover = () => {
  return (
    <Box
      bg="primary"
      color="white"
      cursor="pointer"
      p="md"
      rounded="md"
      transitionDuration="slower"
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
      _hover={{ bg: "secondary" }}
    >
      Please Hover
    </Box>
  )
}

export const Group = () => {
  return (
    <VStack
      borderWidth="1px"
      outline="0"
      p="md"
      role="group"
      rounded="md"
      tabIndex={0}
      w="auto"
      _focusVisible={{ boxShadow: "outline" }}
    >
      <Text textAlign="center">Focus me!</Text>

      <HStack>
        <Center p="md" _groupFocus={{ color: "success" }}>
          1
        </Center>
        <Center p="md" _groupFocus={{ color: "warning" }}>
          2
        </Center>
        <Center p="md" _groupFocus={{ color: "danger" }}>
          3
        </Center>
      </HStack>
    </VStack>
  )
}

export const Peer = () => {
  return (
    <HStack>
      <Center
        data-peer
        borderWidth="1px"
        outline="0"
        p="md"
        rounded="md"
        tabIndex={0}
        _focusVisible={{ boxShadow: "outline" }}
      >
        Focus me!
      </Center>

      <Center bg="primary" p="md" rounded="md" _peerFocus={{ bg: "secondary" }}>
        Focus the peer
      </Center>
    </HStack>
  )
}

export const Orientation = () => {
  return (
    <Box
      bg="primary"
      color="white"
      p="md"
      rounded="lg"
      _portrait={{ bg: "secondary" }}
    >
      Box
    </Box>
  )
}

export const Other = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <Wrap gap="md">
      {numbers.map((number) => (
        <Center
          key={number}
          boxSize="5xs"
          color="white"
          rounded="md"
          _even={{ bg: "blue.500" }}
          _odd={{ bg: "red.500" }}
        >
          {number}
        </Center>
      ))}
    </Wrap>
  )
}