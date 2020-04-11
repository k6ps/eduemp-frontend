<script>
    import SectionTitle from '../components/SectionTitle.svelte';
    import JobMatchItem from '../components/JobMatchItem.svelte';
    import { allSubjectsData, myCurriculumSubjectIds, myRecommendedSubjectIds } from '../stores.js';
    
    const potentialMatchingJobs = [
        {
            organizationName: 'Company 6',
            jobTitle: 'Job 6',
            matchPercentage: 90
        },
        {
            organizationName: 'Company 7777',
            jobTitle: 'Job 7',
            matchPercentage: 75
        }
    ];

    let allSubjects = [];
	const unsubscribeAllSubjectsData = allSubjectsData.subscribe(it => {
		allSubjects = it;
    });
    
    let curriculumSubjectIds = [];
	const unsubscribeMyCurriculumSubjectIds = myCurriculumSubjectIds.subscribe(it => {
		curriculumSubjectIds = it;
    });

    let recommendedSubjectIds = [];
	const unsubscribeMyRecommendedSubjectIds = myRecommendedSubjectIds.subscribe(it => {
		recommendedSubjectIds = it;
    });

    function addRecommendedSubjectToMyCurriculum(subjectId) {
        if (!curriculumSubjectIds.includes(subjectId)) {
            myCurriculumSubjectIds.update(it => [...it, subjectId]);
        }
    }

</script>

<SectionTitle sectionTitle="If I Decided to Choose"/>
<table>
    <thead>
        <tr>
            <td>Subjects</td>
            <td>Employer Needs</td>
            <td></td>
        </tr>
    </thead>
    <tbody>
        {#each allSubjects as subject}
            {#if recommendedSubjectIds.includes(subject.id) && !curriculumSubjectIds.includes(subject.id)}
                <tr>
                    <td>{subject.title}</td>
                    <td>{subject.employerNeeds ? 'yes' : 'no'}</td>
                    <td><a class="button" on:click="{addRecommendedSubjectToMyCurriculum(subject.id)}">+</a></td>
                </tr>
            {/if}
        {/each}
    </tbody>
</table>

<SectionTitle sectionTitle="…then these jobs also match"/>
<ul class="profiles">
    {#each potentialMatchingJobs as potentialMatchingJob}
    <li>
        <JobMatchItem jobMatch={potentialMatchingJob}/>
    </li>
    {/each}
</ul>
