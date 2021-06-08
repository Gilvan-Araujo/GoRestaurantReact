import { HiPlusCircle } from 'react-icons/hi';

import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';

type HeaderProps = {
  openModal: () => void
}

export default function Header({ openModal }: HeaderProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Flex
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
          <Image src='/logo.svg' h={[12, 14]} alt='A fork and a knife crossing each other' />

          <Flex
            as='button'
            aria-label='Add food'
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
            {isWideScreen && (
              <Flex
                px={6}
                py={4}
              >
                New Dish
              </Flex>
            )}
            <Flex
              p={4}
              bg='blue.400'
              borderTopRightRadius={['8px']}
              borderBottomRightRadius={['8px']}
              borderTopLeftRadius={['8px', '8px', '8px', 0]}
              borderBottomLeftRadius={['8px', '8px', '8px', 0]}
            >
              <HiPlusCircle size={24} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

