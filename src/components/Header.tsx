import { HiPlusCircle } from 'react-icons/hi';

import { Flex, Image } from '@chakra-ui/react';

type HeaderProps = {
  openModal: () => void
}

export default function Header({ openModal }: HeaderProps) {
  return (
    <>
      <Flex
        bg='red.900'
        py={8}
        px={0}
      >
        <Flex
          as='header'
          w='1280px'
          my={0}
          mx='auto'
          pt={0}
          px={0}
          pb='160px'
          align='center'
          justify='space-between'
        >
          <Image src='/logo.svg' />

          <Flex
            as='button'
            onClick={openModal}
            fontWeight={600}
            borderRadius='8px'
            border={0}
            bg='blue.500'
            color='white'
            display='flex'
            flexDirection='row'
            alignItems='center'
          >
            <Flex
              px={6}
              py={4}
            >
              New Plate
            </Flex>
            <Flex
              p={4}
              bg='blue.400'
              borderTopRightRadius='8px'
              borderBottomRightRadius='8px'
            >
              <HiPlusCircle size={24} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

