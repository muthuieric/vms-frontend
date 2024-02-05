import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8000/visits/";

export function getVisits() {
  return axios.get(API_BASE_URL)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching Visits:', error);
      throw error;
    });
}


export function deleteVisit(id) {
  return axios.delete(`${API_BASE_URL}${id}/`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.data)
    .catch(error => {
      console.error(`Error deleting Visit with id ${id}:`, error);
      throw error;
    });
}

export function addVisit(visit) {
  return axios
    .post(API_BASE_URL, {
      visitor: visit.visitor,
      id_number: visit.id_number,
      phone: visit.phone,
      host: visit.host,
      visit_type: visit.visit_type,
      purpose: visit.purpose,
      checkin: visit.checkin,
      checkout: visit.checkout,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error adding Visit:", error);
      throw error;
    });
}

export function updateVisit(id, visit) {
  return axios
    .put(`${API_BASE_URL}${id}/`, {
      visitor: visit.visitor,
      id_number: visit.id_number,
      phone: visit.phone,
      host: visit.host,
      visit_type: visit.visit_type,
      purpose: visit.purpose,
      checkin: visit.checkin,
      checkout: visit.checkout,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error updating Visit with id ${id}:`, error);
      throw error;
    });
}
