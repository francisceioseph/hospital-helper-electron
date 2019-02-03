import { pickBy } from '../../utils';
import { handleActions } from 'redux-actions';

import {
  getPacients,
  createPacient,
  updatePacient,
  removePacient
} from './pacient.actions';

const initialState = {
  pacients : {},
  "pacient": {
		"personal_datum_attributes": {
			"skin_color": "branco",
			"gender": "masculino",
			"birth_datum_attributes": {
				"country_of_birth": "Brasil",
				"state_of_birth": "Ceara",
				"city_of_birth": "Aquiraz"
			},
		},
		"demographic_attributes": {
			"job_category": "assalariado_carteira",
			"is_estudying": false,
			"sexual_orientation": "none",
			"gender_identity": "none",
			"has_special_needs": false,
			"special_needs": "none"
		},
		"address": {
      "zipcode": "61700-000",
      "neighborhood": "",
      "city": "Aquiraz",
      "state": "Ceará"
    },
		"family_datum_attributes": {
			"mother_name": "",
			"father_name": "",
			"is_family_head": false
    }
  }
};

function handleGetPacients(state, action) {
  const { data } = action.payload;
  const pacients = pickBy(data, 'id');
  return {
    ...state,
    pacients
  };
}

function handleCreatePacient(state, action) {
  const pacient = action.payload;
  const pacientId = pacient.id.toString();

  const pacients = {
    ...state.pacients,
    [pacientId]: pacient
  };

  return {
    ...state,
    pacients,
  };
}

function handleUpdatePacient(state, action) {
  const { data: pacient } = action.payload;
  const pacientId = pacient.id.toString();

  const pacients = {
    ...state.pacients,
    [pacientId]: pacient
  };

  return {
    ...state,
    pacients,
  };
}

function handleRemovePacient(state, action) {
  const userProfileId = action.payload;
  const pacientId = userProfileId.toString();
  const { [pacientId]: del, ...pacients } = state.pacients;

  return {
    ...state,
    pacients
  };
}

export default handleActions(
  {
    [getPacients]   : handleGetPacients,
    [createPacient] : handleCreatePacient,
    [updatePacient] : handleUpdatePacient,
    [removePacient] : handleRemovePacient
  },
  initialState
);
