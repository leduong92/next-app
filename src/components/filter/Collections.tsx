import { Collection } from '@/types/item'
import React from 'react'
import Link from 'next/link';

const Collections = ({ collections }: { collections: Collection[] }) => {

    return (
        <div>
            {collections.map((collection) => (
                <div key={collection.id}>
                    <Link href={`/search/${collection.slug}`} >
                        <span className='uppercase'>{collection.name}</span>
                    </Link>
                    <ul className="list-none pl-6 flex flex-col gap-1 py-2">
                        {collection.items && collection.items.length > 0 ? (
                            collection.items.map((child) => (
                                <li key={child.name} className="">
                                    <Link href={`/search/${collection.slug}/${child.slug}`}>{child.name}</Link>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-500">No items available</li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Collections