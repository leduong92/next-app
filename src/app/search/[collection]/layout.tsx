import React from 'react'

const CollectionLayout = async ({ props, children }: {
    props: { colection: string },
    children: React.ReactNode
}) => {
    return (
        <div>{children}</div>
    )
}

export default CollectionLayout