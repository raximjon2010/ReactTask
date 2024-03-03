import React from 'react';
import { CardData } from '../utils/cardData';
import {Body, BodyChild_1, BodyChild_1Wrapper, BoshIcon, Box, Image, TitleCard } from './bodyStyle';

const Card = () => {
        return(
            <Body>
              {
                CardData.map((value) => {
                  return (
                    <Box weight = {value?.weight}>
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
                <BoshIcon string = {value.image} image = 'image' src = {value.image}/>
              </BodyChild_1>
                </BodyChild_1Wrapper>
            </Box>

                    )
                })
                }
            {/* ===================================== */}

            </Body>
        )  
    }

export default Card;