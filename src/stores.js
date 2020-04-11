import { readable } from 'svelte/store';

export const allSubjectsData = readable([
	{
		id: "subject1",
		title: "Subject 1",
		employerNeeds: true
	},
	{
		id: "subject2",
		title: "Subject 2",
		employerNeeds: true
	},
	{
		id: "subject3",
		title: "Subject 333",
		employerNeeds: false
	},
	{
		id: "subject4",
		title: "Subject 4",
		employerNeeds: false
	},
	{
		id: "subject5",
		title: "Subject 5",
		employerNeeds: true
	},
	{
		id: "subject6",
		title: "Subject 6",
		employerNeeds: true
	},
	{
		id: "subject7",
		title: "Subject 7777",
		employerNeeds: true
	},
]);
