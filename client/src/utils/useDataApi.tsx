/* eslint-disable  @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useState, useEffect, useReducer, useContext } from 'react'
import { Context } from '@/utils/Context.jsx'

const dataFetchReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'FETCH_INIT':
			return {
				...state,
				isLoading: true,
				isError: false,
			}
		case 'FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			}
		case 'FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		default:
			throw new Error()
	}
}
const useDataApi = (
	initialUrl: string,
	initialData: Record<string, unknown>,
): any[] => {
	const { ContextCountries, ContextLeng, ContextData } = useContext(Context)
	const [, setData] = ContextData
	const [leng] = ContextLeng
	const [url, setUrl] = useState(
		`https://rsschool-travel-app-be.herokuapp.com/countries?lang=${leng}`,
	)

	const [, setCountries] = ContextCountries
	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: initialData,
	})

	useEffect(() => {
		setUrl(
			`https://rsschool-travel-app-be.herokuapp.com/countries?lang=${leng}`,
		)
		let didCancel = false
		const fetchData = async () => {
			dispatch({ type: 'FETCH_INIT' })

			try {
				const result = await axios(url)

				if (!didCancel) {
					dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
					setData(result.data)
					setCountries(result.data)
				}
			} catch (error) {
				if (!didCancel) {
					dispatch({ type: 'FETCH_FAILURE' })
				}
			}
		}

		fetchData()

		return () => {
			didCancel = true
		}
	}, [url, leng]) // eslint-disable-line

	return [state, setUrl]
}

export default useDataApi
