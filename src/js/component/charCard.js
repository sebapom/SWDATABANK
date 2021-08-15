import { React, useState, useEffect, useContext } from "react";
import Carrusel from "../store/carrusel.js";
import { Context } from "../store/appContext";

export const CharCard = () => {
	const { store, actions } = useContext(Context);
	actions.getPeople();
	return Carrusel(store.peopleOfStarWars);
};
