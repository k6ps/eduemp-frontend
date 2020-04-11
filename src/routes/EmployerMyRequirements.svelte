<script>
	import SectionTitle from '../components/SectionTitle.svelte';
    import { allSubjectsData } from '../stores.js';
    
    let allSubjects = [];
	const unsubscribeAllSubjectsData = allSubjectsData.subscribe(it => {
		allSubjects = it;
    });

    let myJobs = [
        {
            id: 'job1',
            title: 'Job 1',
            requiredSubjectIds: ['subject1', 'subject3', 'subject5']
        },
        {
            id: 'job2',
            title: 'Job 2',
            requiredSubjectIds: ['subject2', 'subject4', 'subject6']
        },
        {
            id: 'job3',
            title: 'Job 3',
            requiredSubjectIds: ['subject1', 'subject2', 'subject3']
        },
    ];

    let filteredJobs = myJobs;
    let filterValue;
    function createCurrentlyFilteredJobSubjectIds() {
        let subjectIds = [];
        filteredJobs.forEach(job => job.requiredSubjectIds.forEach(id => {
            if (!subjectIds.includes(id)) {
                subjectIds = [...subjectIds, id];
            }
        }));
        return subjectIds;
    }
    let filteredJobSubjectIds = createCurrentlyFilteredJobSubjectIds();
    function filterMyJobs() {
        if (!filterValue || filterValue == '') {
            filteredJobs = myJobs;
        } else {
            filteredJobs = [];
            myJobs.forEach(it => {
                if (it.id && filterValue == it.id) {
                    filteredJobs = [...filteredJobs, it];
                }
            });
        }
        filteredJobSubjectIds = createCurrentlyFilteredJobSubjectIds();
    }

</script>

<SectionTitle sectionTitle="My Requirements"/>
<select bind:value={filterValue} on:change={filterMyJobs}>
    <option value="" selected="selected">-- All Jobs --</option>
    {#each myJobs as job}
        <option value={job.id}>{job.title}</option>
    {/each}
</select>
<table>
    <thead>
        <tr>
            <td>Subjects</td>
            <td>University Offers</td>
            <td>Job Seekers Have/Interested in</td>
        </tr>
    </thead>
    <tbody>
        {#each allSubjects as subject}
            {#if filteredJobSubjectIds.includes(subject.id)}
                <tr>
                    <td>{subject.title}</td>
                    <td>{subject.employerNeeds > 0 ? 'yes' : 'no'}</td>
                    <td>{subject.studentsInCurriculum}/{subject.studentsInterested}</td>
                </tr>
            {/if}
        {/each}
    </tbody>
</table>
<a class="button">Add a Job</a>
<a class="button">Add a Requirement</a>
