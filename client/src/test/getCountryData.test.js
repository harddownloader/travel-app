import getCountryData from '../utils/getCountryData'
test('getCountryData-capital', async () => {
	expect.assertions(1)
	const data = await getCountryData('604bca5b007d728631fa8af3', 'ru')
	expect(data).toHaveProperty('capital')
})
test('getCountryData-ISOCode', async () => {
	expect.assertions(1)
	const data = await getCountryData('604bca5b007d728631fa8af3', 'ru')
	expect(data).toHaveProperty('ISOCode')
})
