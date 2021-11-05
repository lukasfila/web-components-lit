import {createComponent} from "@lit-labs/react";
import React from "react";
import {LitInput} from "../input";
import {LitForm} from "../form";
import {LitButton} from "../button";
import {LitConfig} from "../config";

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
	LitForm
);

export const LitButtonReact = createComponent(
	React,
	"lit-button",
	LitButton
);
export const LitConfigReact = createComponent(
	React,
	"lit-config",
	LitConfig
);