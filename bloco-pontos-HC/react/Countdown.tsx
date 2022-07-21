import React from 'react'
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import { useCssHandles } from 'vtex.css-handles'
import productReleaseDate from './graphql/productReleaseDate.graphql'

const CSS_HANDLES = ['countdown']
function Countdown() {
  const handles = useCssHandles(CSS_HANDLES)

  const { product } = useProduct()
  const { data } = useQuery(productReleaseDate, {
    variables: {
      slug: product?.linkText,
    },
    ssr: false,
  }
  )

  console.log({data})

  var value = parseInt(product.priceRange.sellingPrice.lowPrice)
  

  return (
    <div className={`${handles.countdown} c-muted-1 db tc`}>
      <p>Você receberá <b>{value.toFixed()} Elefantinhos</b></p>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title: {
      title: 'I am a title',
      type: 'string',
      default: null,
    },
    targetDate: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown