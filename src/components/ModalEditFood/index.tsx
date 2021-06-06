import React, { useRef } from 'react';
import { HiCheck } from 'react-icons/hi';

import { FormHandles } from '@unform/core';

import Input from '../Input';
import Modal from '../Modal';
import { Form } from './styles';
import { Flex, Heading } from '@chakra-ui/react';

type AddFood = {
  image: string,
  name: string,
  price: string
  description: string
}

type IFood = {
  id: number,
  name: string,
  description: string,
  price: string,
  available: boolean,
  image: string
}

type ModalEditFoodProps = {
  isOpen: boolean;
  setIsOpen: () => void,
  handleUpdateFood: (data: AddFood) => void
  editingFood: IFood
}

export default function ModalEditFood({ isOpen, setIsOpen, handleUpdateFood, editingFood }: ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data: AddFood) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <Heading
          as="h1"
          fontWeight={600}
          fontSize='36px'
          lineHeight='36px'
          mb='40px'
          color='gray.100'
        >
          New plate
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
            Edit Plate
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