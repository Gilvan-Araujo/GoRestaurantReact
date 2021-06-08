import { useState } from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi';

import { Button, Flex, Heading, Icon, Image, Switch, Text } from '@chakra-ui/react';

import api from '../services/api';

type IFood = {
  id: number,
  name: string,
  description: string,
  price: string,
  available: boolean,
  image: string
}

type FoodProps = {
  food: IFood,
  handleEditFood: (food: IFood) => void,
  handleDelete: (id: number) => void
}

export default function Food({ food, handleEditFood, handleDelete }: FoodProps) {
  const { available } = food
  const [isAvailable, setIsAvailable] = useState(available)

  const toggleAvailable = async () => {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });

    setIsAvailable(!isAvailable);
  }

  const setEditingFood = () => {
    handleEditFood(food);
  }

  return (
    <Flex
      flexDir='column'
      bg='gray.800'
      borderRadius='8px'
    >
      <Flex
        as='header'
        justify='center'
        bg='#ffb84d'
        borderTopLeftRadius='8px'
        borderTopRightRadius='8px'
        height='192px'
        overflow='hidden'
      >
        <Image
          src={food.image}
          alt={food.name}
          opacity={isAvailable ? '1' : '0.3'}
          transition='0.25s opacity'
          objectFit='cover'
          pointerEvents='none'
          userSelect='none'
        />
      </Flex>

      <Flex
        p={8}
        color='gray.100'
        flexDir='column'
      >
        <Heading
          as='h2'
        >
          {food.name}
        </Heading>
        <Text
          as='p'
          mt={8}
        >
          {food.description}
        </Text>
        <Text
          fontStyle='normal'
          fontSize='24px'
          lineHeight='34px'
          color='green.500'
          mt={8}
        >
          R$ {food.price}
        </Text>
      </Flex>

      <Flex
        as='section'
        justify='space-between'
        align='center'
        py='20px'
        px='30px'
        bg='gray.700'
        borderBottomRightRadius='8px'
        borderBottomLeftRadius='8px'
      >
        <Flex
          as='div'
        >
          <Button
            aria-label='Edit dish'
            bg='gray.600'
            p='10px'
            borderRadius='8px'
            display='flex'
            border='none'
            transition='0.1s'
            _hover={{ bg: 'gray.600' }}
            onClick={setEditingFood}
          >
            <Icon
              as={HiPencil}
              w={5}
              h={5}
              color='gray.100'
            />
          </Button>
          <Button
            aria-label='Delete dish'
            bg='gray.600'
            p='10px'
            borderRadius='8px'
            display='flex'
            border='none'
            transition='0.1s'
            _hover={{ bg: 'gray.600' }}
            onClick={() => handleDelete(food.id)}
            ml='6px'
          >
            <Icon
              as={HiTrash}
              w={5}
              h={5}
              color='gray.100'
            />
          </Button>
        </Flex>
        <Flex
          as='div'
          align='center'
        >
          <Text
            color='gray.100'
          >
            {isAvailable ? 'Available' : 'Unavailable '}
          </Text>
          <Switch
            aria-label='Toggle dish availability'
            size='lg'
            colorScheme='blue'
            isChecked={isAvailable}
            onChange={toggleAvailable}
            ml='12px'
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

