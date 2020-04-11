import { readable, writable } from 'svelte/store';

export const allSubjectsData = readable([
	{
		id: "subject1",
		title: "Subject 1",
		uniersityOffers: true,
		employerNeeds: true
	},
	{
		id: "subject2",
		title: "Subject 2",
		uniersityOffers: false,
		employerNeeds: true
	},
	{
		id: "subject3",
		title: "Subject 333",
		uniersityOffers: false,
		employerNeeds: false
	},
	{
		id: "subject4",
		title: "Subject 4",
		uniersityOffers: true,
		employerNeeds: false
	},
	{
		id: "subject5",
		title: "Subject 5",
		uniersityOffers: false,
		employerNeeds: true
	},
	{
		id: "subject6",
		title: "Subject 6",
		uniersityOffers: false,
		employerNeeds: true
	},
	{
		id: "subject7",
		title: "Subject 7777",
		uniersityOffers: true,
		employerNeeds: true
	},
]);

export const myCurriculumSubjectIds = writable(["subject1", "subject3"]);
