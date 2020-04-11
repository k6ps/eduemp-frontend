<script>
    import SectionTitle from '../components/SectionTitle.svelte';
    import AddSubjectButtonAndDialog from '../components/AddSubjectButtonAndDialog.svelte';
    import { allSubjectsData, myCurriculumSubjectIds } from '../stores.js';

    let allSubjects = [];
	const unsubscribeAllSubjectsData = allSubjectsData.subscribe(it => {
		allSubjects = it;
    });
    
    let mySubjectIds = [];
	const unsubscribeMyCurriculumSubjectIds = myCurriculumSubjectIds.subscribe(it => {
		mySubjectIds = it;
    });

</script>

<SectionTitle sectionTitle="My Curriculum"/>
<table>
    <thead>
        <tr>
            <td>My Subjects</td>
            <td>Employer Needs</td>
        </tr>
    </thead>
    <tbody>
        {#each allSubjects as subject}
            {#if mySubjectIds.includes(subject.id)}
                <tr>
                    <td>{subject.title}</td>
                    <td>{subject.employerNeeds ? 'yes' : 'no'}</td>
                </tr>
            {/if}
        {/each}
    </tbody>
</table>
<AddSubjectButtonAndDialog mySubjectIdsSource={'myCurriculumSubjectIds'}/>
