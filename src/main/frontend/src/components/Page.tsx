import React, { forwardRef, ReactNode, Ref } from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  children: ReactNode
  title: string
  className: any
}

const Page = forwardRef<Props, any>((props, ref) => {
  const { ...rest } = props
  return (
    <div
      ref={ref}
      {...rest}
    >
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      {props.children}
    </div>
  )
})

export default Page
