import { Link, routes } from '@redwoodjs/router'
import { Center, Heading, Button } from '@chakra-ui/core'

const HomePage = () => {
  return (
    <Center bg="green.500" w="full" h="100vh">
      <Heading pb="6">Future of home of Genopsys marketing materials</Heading>
      <Button as={Link} to={routes.login()}>
        Go to Login
      </Button>
    </Center>
  )
}

export default HomePage
