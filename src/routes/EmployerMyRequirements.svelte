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

    function currentlyFilteredJobsRequireSubject(subjectId) {
        let jobIds = [];
        myJobs.forEach(job => job.requiredSubjectIds.forEach(id => {
            if (!jobIds.includes(id)) {
                jobIds = [...jobIds, id];
            }
        }));
        return jobIds.includes(subjectId);
    }

</script>

<SectionTitle sectionTitle="My Requirements"/>
<select>
    <option value="" selected="selected">-- All Jobs --</option>
    <option value="job1">Job 1</option>
    <option value="job2">Job 2</option>
    <option value="job3">Job 3</option>
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
            {#if currentlyFilteredJobsRequireSubject(subject.id)}
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
