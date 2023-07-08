export interface slugType {
	_type: string;
	current: string;
}

export interface assetImageType {
	_type: string;
	_ref: string;
}
export interface imagesType {
	asset: assetImageType;
	_type: string;
	alt: string;
	_key: string;
}

export interface oneProductType {
	[x: string]: any;
	slug: any;
	quantity: number;
	_rev: string;
	_type: string;
	productName: string;
	_createdAt: string;
	_id: any;
	_updatedAt: string;
	image: Array<imagesType>;
	description: any;
	productTypes: Array<string>;
	size: Array<string>;
	price: number;
}

export interface responseType {
	map(
		arg0: (product: any) => import('react').JSX.Element
	): import('react').ReactNode;
	result: Array<oneProductType>;
}
