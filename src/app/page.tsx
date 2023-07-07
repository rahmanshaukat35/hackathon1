import Hero from '@/views/Hero';
import ProductList from '@/views/ProductList';
import ProductsType from '@/views/ProductTypes';
import BASE_PATH_FORAPI from '@/components/BasePath';
import {
	oneProductType,
	responseType,
} from '@/components/utils/ProductsDataArrayAndType';
import Jewellery from '@/components/Jewellery';
import NewsLetter from '@/components/NewsLetter';

async function fetchAllProductsData() {
	let res = await fetch(
		`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`,
		{
			next: {
				revalidate: 60,
			},
		}
	);

	if (!res.ok) {
		throw new Error('Failed to fetch');
	}

	return res.json();
}

export default async function Home() {
	let { result }: responseType = await fetchAllProductsData();
	return (
		<>
			<Hero />
			<ProductsType />
			<ProductList ProductData={result} />
			<Jewellery />
			<NewsLetter />
		</>
	);
}
