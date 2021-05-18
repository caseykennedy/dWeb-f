// HNS Chart

// ___________________________________________________________________

import React, { useContext, useEffect, useState } from 'react'
import CoinGecko from 'coingecko-api'
import styled from 'styled-components'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'

// ___________________________________________________________________

const Coin: React.FC<{ coin: any }> = ({ coin }) => {
  const coinName = coin.name
  const currentPrice = coin.current_price
  const currentChange = coin.price_change_percentage_24h

  let color
  let carat
  if (typeof parseFloat(currentChange) === 'number') {
    const currentChangeFixed = currentChange.toFixed(2)
    if (currentChangeFixed.toString(2).startsWith('-')) {
      color = theme.colors.accent
      carat = ``
    } else {
      color = theme.colors.primary
      carat = `+`
    }
  }
  return (
    <>
      <Box sx={{ flex: 1 }} className="coin__image">
        <img height="18px" src={coin.image} />
      </Box>
      <Box sx={{ flex: 3 }}>
        <Flex className="coin-title">
          <div className="coin-title__name">{coinName}</div>
          {/* <div className="coin-title__marker">24h</div> */}
        </Flex>
        <Flex color={color} className="coin-info">
          <div className="coin-info__price">${currentPrice.toFixed(2)}</div>
          <div className="coin-info__carat">{carat}</div>
          <div className="coin-info__change">{currentChange.toFixed(2)}%</div>
        </Flex>
      </Box>
    </>
  )
}

const HNSChart = () => {
  const CoinGeckoClient = new CoinGecko()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await CoinGeckoClient.coins.markets({
          vs_currency: 'usd',
          per_page: 1,
          page: 1,
          ids: ['handshake'],
          sparkline: true,
          price_change_percentage: '24h',
        })
        console.log('try', results)
        setData(results)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  })

  return (
    <>
      {!isLoading ? (
        <StyledCoin>
          <Coin coin={data} />
        </StyledCoin>
      ) : (
        <Box pl={theme.gutter.axis}>loading...</Box>
      )}
    </>
  )
}

export default HNSChart

const StyledCoin = styled(Flex)`
  display: flex;
  align-items: center;
  flex-direction: row;

  border-right: ${theme.border};
  padding: 0 ${theme.space[3]};
  max-width: 150px;

  @media ${theme.mq.tablet} {
    max-width: 180px;
    padding: 0 ${theme.space[4]};
  }

  .coin {
    &__image {
      flex: 1;
      margin-right: ${theme.space[3]};
    }

    &-title {
      color: ${theme.colors.primary};
      font-family: ${theme.fonts.sans};
      font-size: ${theme.fontSizes[1]};
      line-height: 1.35;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[1]} * 1.15);
      }

      &__name {
        font-weight: 500;
      }

      &__marker {
        color: ${theme.colors.primary};
        font-size: calc(${theme.fontSizes[1]} / 1.15);
        font-weight: 600;
        margin-left: ${theme.space[1]};
        vertical-align: super;
      }
    }

    &-info {
      display: flex;
      align-items: center;

      font-size: ${theme.fontSizes[0]};
      line-height: 1.35;

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[1]} * 1.15);
      }

      &__price {
        font-family: ${theme.fonts.sans};
        margin-right: ${theme.space[3]};
      }

      &__carat {
      }

      &__change {
        font-size: ${theme.fontSizes[1]};
      }
    }
  }
`
