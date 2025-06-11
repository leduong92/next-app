import React from 'react'
import Breadcrumb from '../../components/layout/Breadcrumb'

const ProductLayout = async ({ children }: {
    children: React.ReactNode
}) => {

    return (
        <div>
            <Breadcrumb />
            {children}
        </div>
    )
}

export default ProductLayout