import { readable, writable } from 'svelte/store';

export const allSubjectsData = readable([
	{
		id: "subject1",
		title: "Anatomy and Physiology",
		uniersityOffers: true,
		employerNeeds: 10,
		studentsInCurriculum: 80,
		studentsInterested: 111
	},
	{
		id: "subject2",
		title: "Foundations of Nursing",
		uniersityOffers: false,
		employerNeeds: 17,
		studentsInCurriculum: 443,
		studentsInterested: 34
	},
	{
		id: "subject3",
		title: "Internal Patient Nursing",
		uniersityOffers: false,
		employerNeeds: 3,
		studentsInCurriculum: 8,
		studentsInterested: 8
	},
	{
		id: "subject4",
		title: "Mental Health Nursing",
		uniersityOffers: true,
		employerNeeds: 25,
		studentsInCurriculum: 23,
		studentsInterested: 344
	},
	{
		id: "subject5",
		title: "Psychology",
		uniersityOffers: false,
		employerNeeds: 20,
		studentsInCurriculum: 223,
		studentsInterested: 342
	},
	{
		id: "subject6",
		title: "War and Disaster Medicine",
		uniersityOffers: false,
		employerNeeds: 0,
		studentsInCurriculum: 11,
		studentsInterested: 212
	},
	{
		id: "subject7",
		title: "Adult Health Behaviour",
		uniersityOffers: true,
		employerNeeds: 0,
		studentsInCurriculum: 23,
		studentsInterested: 224
	},
	{
		id: "subject8",
		title: "In-Depth Knowledge in Intensive Nursing",
		uniersityOffers: true,
		employerNeeds: 2,
		studentsInCurriculum: 10,
		studentsInterested: 11
	},
]);

export const myCurriculumSubjectIds = writable(["subject1", "subject3"]);

export const myInterestedInSubjectIds = writable(["subject2", "subject4"]);

export const myRecommendedSubjectIds = writable(["subject4", "subject5", "subject6"]);
