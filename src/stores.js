import { readable, writable } from 'svelte/store';

export const allSubjectsData = readable([
	{
		id: "subject1",
		title: "Anatomy and Physiology",
		uniersityOffers: true,
		employerNeeds: 10
	},
	{
		id: "subject2",
		title: "Foundations of Nursing",
		uniersityOffers: false,
		employerNeeds: 17
	},
	{
		id: "subject3",
		title: "Internal Patient Nursing",
		uniersityOffers: false,
		employerNeeds: 3
	},
	{
		id: "subject4",
		title: "Mental Health Nursing",
		uniersityOffers: true,
		employerNeeds: 25
	},
	{
		id: "subject5",
		title: "Psychology",
		uniersityOffers: false,
		employerNeeds: 20
	},
	{
		id: "subject6",
		title: "War and Disaster Medicine",
		uniersityOffers: false,
		employerNeeds: 0
	},
	{
		id: "subject7",
		title: "Adult Health Behaviour",
		uniersityOffers: true,
		employerNeeds: 0
	},
	{
		id: "subject8",
		title: "In-Depth Knowledge in Intensive Nursing",
		uniersityOffers: true,
		employerNeeds: 2
	},
]);

export const myCurriculumSubjectIds = writable(["subject1", "subject3"]);

export const myInterestedInSubjectIds = writable(["subject2", "subject4"]);

export const myRecommendedSubjectIds = writable(["subject4", "subject5", "subject6"]);
