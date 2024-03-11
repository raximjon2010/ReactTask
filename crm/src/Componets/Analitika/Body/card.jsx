import React, { useContext } from 'react';
import { BodyFunction } from '../../../context/Analitika/Body';

import {Body, BodyChild_1, BodyChild_1Wrapper, BoshIcon, Box, Div, Image, Title, TitleCard } from './bodyStyle';
import { IjtimoiyTarmoqlar } from '../utils/cardData';

const Card = () => {
  const [data, setData] = useContext(BodyFunction);
        return(
            <Body>
              <Div>

              {
                data.map((value) => {
                  return (
                    <Box  key={value.id}>
                  <BodyChild_1Wrapper>
              <BodyChild_1>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <BoshIcon src = {value.BoshIcon}/>
                <TitleCard>{value.title}</TitleCard>
                </div>
                <BoshIcon src = {value.AddIcon}/>
              </BodyChild_1>

              <BodyChild_1>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <BoshIcon src = {value.TopOrBottomIcon}/>
                <TitleCard title = 'number'>{value.number}</TitleCard>
                </div>
                <BoshIcon image = 'image' src = {value.image}/>
              </BodyChild_1>
                </BodyChild_1Wrapper>
            </Box>

)
})
}
</Div>
            {/* ===================================== */}
            <Title auto = 'true'>Ijtimoiy Tarmoqlar</Title>

            <Div gap = 'true'>
              {
                IjtimoiyTarmoqlar.map((value) => {
                  return (
                    <Box key={value.id} weight = {value?.weight}>
                    <BodyChild_1Wrapper>
                <BodyChild_1>
                  <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  <BoshIcon src = {value.BoshIcon}/>
                  <TitleCard>{value.title}</TitleCard>
                  </div>
                  <BoshIcon src = {value.AddIcon}/>
                </BodyChild_1>
  
                <BodyChild_1>
                  <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  <BoshIcon src = {value.TopOrBottomIcon}/>
                  <TitleCard title = 'number'>{value.number}</TitleCard>
                  </div>
                  <BoshIcon image = 'image' src = {value.image}/>
                </BodyChild_1>
                  </BodyChild_1Wrapper>
              </Box>
                  )
                })
              }
            </Div>
            </Body>
        )  
    }

export default Card;