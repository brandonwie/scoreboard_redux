import * as PlayerActionTypes from '../actiontypes/player';
const moment = require('moment');

const initialState = {
	players: [
		{
			name: 'Jim Hoskins',
			score: 31,
			created: '11/8/2016',
			updated: '11/9/2016',
		},
		{
			name: 'Andrew Chalkley',
			score: 20,
			created: '11/9/2016',
			updated: '11/10/2016',
		},
		{
			name: 'Alena Holligan',
			score: 50,
			created: '11/11/2016',
			updated: '11/12/2016',
		},
	],
	selectedPlayerIndex: -1,
};

export default function Player(state = initialState, action) {
	const { type, index, name, score } = action;
	const { players, selectedPlayerIndex } = state;

	switch (type) {
		case PlayerActionTypes.ADD_PLAYER:
			const addPlayerList = [
				...state.players,
				{
					name,
					score: 0,
					created: moment().format('l'),
				},
			];
			return {
				...state,
				players: addPlayerList,
			};

		case PlayerActionTypes.REMOVE_PLAYER:
			const removePlayerList = [
				...state.slice(0, index),
				...state.slice(index + 1),
			];
			return {
				...state,
				players: removePlayerList,
			};

		case PlayerActionTypes.UPDATE_PLAYER_SCORE:
			const updatePlayerList = players.map((player, index) => {
				if (index === action.index) {
					return {
						...player,
						score: player.score + score,
						updated: moment().format('l'),
					};
				} else {
					return player;
				}
			});
			return {
				...state,
				players: updatePlayerList,
			};

		case PlayerActionTypes.SELECT_PLAYER:
			return {
				...state,
				selectedPlayerIndex: index,
			};

		default:
			return state;
	}
}
