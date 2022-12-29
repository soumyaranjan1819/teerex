import React from 'react'

const ProductCard = ({item}) => {

  return (
    <div className=' w-[16vw]  py-3 px-2.5 bg-slate-200 rounded'>
            <img src={item.imageURL} alt={item.name} className=' w-[11.5rem]' />
            {item.name}
            <div className='flex justify-between mt-2'>
              <span className=' font-semibold text-lg'>Rs {item.price}</span>
              <span className='text-sm py-1 px-2 rounded bg-black text-white'>Add to cart </span>
            </div>
          </div>
  )
}

export default ProductCard