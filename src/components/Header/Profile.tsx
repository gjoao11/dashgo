import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Gilberto</Text>
        <Text color="gray.300" fontSize="small">
          gjoao11.dev@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="João Gilberto" src="https://github.com/gjoao11.png" />
    </Flex>
  )
}
