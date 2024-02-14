"use client"

import { useEffect, useState } from "react";

interface Product {
    id: number
    userId: number
    title: string
    completed: boolean
}

function Data() {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchData() {
            let data: any = await fetch('https://jsonplaceholder.typicode.com/todos')
            data = await data.json()
            console.log(data)
            setProduct(data)
        }
        fetchData()
    }, [])
  return (
    <div>Data
        <div>
            {product ? (product.map((item: any) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                </div>
            ))): (<p>Loading...</p>)}
        </div>
    </div>
  )
}

export default Data