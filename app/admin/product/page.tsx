'use client'

import { GetProducts } from '@/actions/products'
import Menu from '@/components/menu'
import { Button } from '@/components/ui/button'
import getImageLink from '@/utils/getImageLink'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'

type Props = {}

const Page = (props: Props) => {

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => GetProducts(),
  });

  const sanitizedData = useCallback(() => {
    if (!data) return []

    return data.map((menu) => ({
      id: menu.id,
      product_name: menu.product_name,
      product_price: menu.product_price,
      image_url: menu?.expand?.image_url?.map((image: any) => {
        return getImageLink(image)
      }
      ) ?? [],
      addons: menu?.expand?.addons_id ?? []
    }))
  }, [data])

  const productsData = useMemo(() => sanitizedData(), [sanitizedData])

  return (
    <div className='w-full'>
      <div className='flex justify-end'>
        <Button variant={'admin'}>
          <Link href={'/admin/product/create'}>
            Create Product
          </Link>
        </Button>
      </div>

      <div className='grid grid-cols-5'>
        {productsData?.map((menu) => (
          <Menu
            key={menu?.id}
            imageUrl={menu?.image_url[0]}
            name={menu?.product_name}
            price={menu?.product_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Page