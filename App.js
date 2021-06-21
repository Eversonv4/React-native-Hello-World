import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justifyContent:center;
  alignItems:center;
`;

export default () => {
  return (
    <Page>
        <Text style={{color:'#000'}}>
          oi
        </Text>
    </Page>
  );
}
