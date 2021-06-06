import React, { useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Flex, Input as ChakraInput } from '@chakra-ui/react';
import { useField } from '@unform/core';

type InputProps = {
  name: string,
  placeholder?: string,
  icon?: React.ComponentType<IconBaseProps>
}

export default function Input({ name, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Flex
        align='center'
        bg='gray.900'
        borderRadius='8px'
        px='18px'
        py='24px'
        width='100%'
        fontSize='16px'
        mb='24px'
        _last={{ marginBottom: '0' }}
      >
        {Icon && <Icon size={20} />}

        <ChakraInput
          display='flex'
          flex={1}
          bg='transparent'
          border={0}
          color='gray.100'
          _placeholder={{ color: 'gray.100' }}
          size='lg'
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </Flex>
    </>
  );
}
