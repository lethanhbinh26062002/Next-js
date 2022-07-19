import { removeItem } from "api/products";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from 'swr'

type ProductsProps = {
    products: any[];
};
const url = 'http://localhost:3001/products';

const fetcher = async (url: string) => await (await fetch(url)).json()

// client
const ProductPage = () => {
    const { data, error } = useSWR(url, fetcher, { revalidateOnMount: false, revalidateOnFocus: true })
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            <div>
                <Link href={`/products/add`}>
                    <button>Add product</button>
                </Link>
            </div>
            <br />
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <Link href={`/products/${item.id}`}>{item.name}</Link>
                        <button className="ml-5" onClick={() => removeItem(item.id)}>Delete</button>
                        <Link href={`/products/edit/${item.id}`}>
                            <button className="ml-5">Edit</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
