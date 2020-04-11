<script>
	import SectionTitle from '../components/SectionTitle.svelte';
    import AddSubjectButtonAndDialog from '../components/AddSubjectButtonAndDialog.svelte';
    import { allSubjectsData, myInterestedInSubjectIds } from '../stores.js';

    let allSubjects = [];
	const unsubscribeAllSubjectsData = allSubjectsData.subscribe(it => {
		allSubjects = it;
    });
    
    let mySubjectIds = [];
	const unsubscribeMyInterestedInSubjectIds = myInterestedInSubjectIds.subscribe(it => {
		mySubjectIds = it;
    });
</script>

<SectionTitle sectionTitle="I Am Interested In"/>
<table>
    <thead>
        <tr>
            <td>Subjects</td>
            <td>University Offers</td>
            <td>Employer Needs</td>
        </tr>
    </thead>
    <tbody>
        {#each allSubjects as subject}
            {#if mySubjectIds.includes(subject.id)}
                <tr>
                    <td>{subject.title}</td>
                    <td>{subject.uniersityOffers ? 'yes' : 'no'}</td>
                    <td>{subject.employerNeeds ? 'yes' : 'no'}</td>
                </tr>
            {/if}
        {/each}
    </tbody>
</table>
<AddSubjectButtonAndDialog mySubjectIdsSource={'myInterestedInSubjectIds'}/>

