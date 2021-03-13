export  type CountryType = {
	ISOCode: string
	capital: string
	capitalLocation: {
		coordinates: [number, number]
		type: string
	}
	currency: string
	description: string
	id: string
	imageUrl: string
	name: string
	videoUrl: string
}