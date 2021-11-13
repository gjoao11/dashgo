import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Gilberto</Text>
          <Text color="gray.300" fontSize="small">
            gjoao11.dev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="João Gilberto" src="https://github.com/gjoao11.png" />
    </Flex>
  )
}
