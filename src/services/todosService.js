import http from './httpService'

import config from '../config.json'

const endpoint = config.apiURL + '/api/cars'

function getEndpoint(id) {
	return !id ? endpoint : endpoint + '/' + id
}

function getAllCars() {
	return http.get(getEndpoint())
}

function getCarById(id) {
	return http.get(getEndpoint(id))
}

function createCar(payload) {
	return http.post(getEndpoint(), payload)
}

function updatyeCar(id, payload) {
	return http.put(getEndpoint(id), payload)
}

function deleteCar(id) {
	return http.delete(getEndpoint(id))
}

const todosService = {
	getAllCars,
	getCarById,
	createCar,
	updatyeCar,
	deleteCar,
}

export default todosService
