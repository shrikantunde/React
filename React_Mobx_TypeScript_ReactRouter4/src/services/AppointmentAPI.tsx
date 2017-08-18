/**
 * This file is used to to call appointment rest services
*/

import axios from 'axios';
import AppConfig from './../common/config/config';

const baseURI = AppConfig.baseUrl;

export function searchPatients(input) {
    return axios.get(baseURI + "Patient?$filter=contains(FirstName, '"+input+"') or contains( LastName, '"+input+"') or contains( EmailAddress, '"+input+"')");
}

export function getPatientsDetails(request) {
    return axios.get(baseURI+"Patient("+request+")");
}

export function saveAppointment(data) {
    return axios.post(baseURI+'Appointment', data);
}

export function getCalenderAppointment(request) {
    return axios.get(baseURI+"Office("+request.officeId+")?$expand=Operatories($expand=Appointments($filter=ScheduledDate ge "+request.scheduledDate+" and ScheduledDate lt "+request.nextDate+"))");
}

export function getCalenderAppointment2(request) {
    return axios.get(baseURI+"Appointment?$filter=ScheduledDate ge "+request.scheduledDate+" and OfficeID eq "+request.officeId+" and ScheduledDate lt "+request.nextDate)
}

export function getCalenderAppointment3(request) {
    return axios.get(baseURI+"Appointment?$filter=ScheduledDate ge "+request.scheduledDate+" and ScheduledDate le "+request.nextDate)
}

export function getCalenderChairs(request) {
    return axios.get(baseURI+"Office("+request.officeId+")?$expand=Operatories");
}

//Appointment?$filter=ScheduledDate%20ge%202017-02-16T00:00:00Z%20and%20OfficeID%20eq%2035651180-50e1-4f97-b25d-a1a5e7b5c29a%20and%20ScheduledDate%20lt%202017-02-16T23:59:59Z
