import BASE_PATH_FORAPI from '@/components/BasePath';
import AllProductsCompo from '@/components/AllProducts';

async function fetchAllProductData() {
	let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`, {
		next: {
			revalidate: 60,
		},
	});
	if (!res.ok) {
		new Error('Failed to fetch');
	}
	return res.json();
}

const Products = async () => {
	const ProdutcData = await fetchAllProductData();
	return <AllProductsCompo ProdutcData={ProdutcData} />;
};

export default Products;
