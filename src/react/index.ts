import {createComponent} from "@lit-labs/react";
import React from "react";
import {LitInput} from "../input";
import {LitForm} from "../form";
import {LitButton} from "../button";
import {LitResize} from "../resize";

export const LitInputReact = createComponent(
	React,
	"lit-input",
	LitInput, {
		onkeypress: "keypress",
		onkeydown: "keydown",
		onValueChanged: "valueChanged"
	}
);

export const LitFormReact = createComponent(
	React,
	"lit-form",
	LitForm, {
		onFormSubmit: "formSubmit"
	}
);

export const LitButtonReact = createComponent(
	React,
	"lit-button",
	LitButton, {
		onButtonClick: "buttonClick"
	}
);
export const LitResizeReact = createComponent(
	React,
	"lit-resize",
	LitResize
);