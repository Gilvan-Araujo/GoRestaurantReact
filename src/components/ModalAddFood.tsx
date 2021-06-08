import { useRef } from 'react';
import { HiCheck } from 'react-icons/hi';

import { Flex, Heading } from '@chakra-ui/layout';
import { FormHandles } from '@unform/core';

import Input from './Input';
import Modal from './Modal';
import { Form } from './ModalStyle';

type AddFood = {
  image: string,
  name: string,
  price: string
  description: string
}

type ModalAddFoodProps = {
  isOpen: boolean;
  setIsOpen: () => void,
  handleAddFood: (data: AddFood) => void
}

export default function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data: AddFood) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Heading
          as="h1"
          fontWeight={600}
          fontSize='36px'
          lineHeight='36px'
          mb='40px'
          color='gray.100'
        >
          New dish
        </Heading>
        <Input name="image" placeholder="Paste the link here" />

        <Input name="name" placeholder="E.g.: Italian style" />
        <Input name="price" placeholder="E.g.: $19.90" />

        <Input name="description" placeholder="Description" />

        <Flex
          as='button'
          type='submit'
          fontWeight={600}
          borderRadius='8px'
          border={0}
          bg='blue.500'
          color='white'
          display='flex'
          flexDirection='row'
          alignItems='center'
          mt='48px'
          alignSelf='flex-end'
        >
          <Flex
            px={6}
            py={4}
          >
            Add Plate
            </Flex>
          <Flex
            p={4}
            bg='blue.400'
            borderTopRightRadius='8px'
            borderBottomRightRadius='8px'
            my={0}
            mx='auto'
          >
            <HiCheck size={24} />
          </Flex>
        </Flex>
      </Form>
    </Modal>
  );
}
