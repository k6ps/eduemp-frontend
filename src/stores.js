import { readable, writable } from 'svelte/store';

export const allSubjectsData = readable([
	{
		id: "subject1",
		title: "Anatomy and Physiology",
		uniersityOffers: true,
		employerNeeds: true
	},
	{
		id: "subject2",
		title: "Foundations of Nursing",
		uniersityOffers: false,
		employerNeeds: true
	},
	{
		id: "subject3",
		title: "Internal Patient Nursing",
		uniersityOffers: false,
		employerNeeds: false
	},
	{
		id: "subject4",
		title: "Mental Health Nursing",
		uniersityOffers: true,
		employerNeeds: false
	},
	{
		id: "subject5",
		title: "Psychology",
		uniersityOffers: false,
		employerNeeds: true
	},
	{
		id: "subject6",
		title: "War and Disaster Medicine",
		uniersityOffers: false,
		employerNeeds: true
	},
	{
		id: "subject7",
		title: "Adult Health Behaviour",
		uniersityOffers: true,
		employerNeeds: true
	},
	{
		id: "subject8",
		title: "In-Depth Knowledge in Intensive Nursing",
		uniersityOffers: true,
		employerNeeds: true
	},
]);

export const myCurriculumSubjectIds = writable(["subject1", "subject3"]);

export const myInterestedInSubjectIds = writable(["subject2", "subject4"]);

export const myRecommendedSubjectIds = writable(["subject4", "subject5", "subject6"]);
