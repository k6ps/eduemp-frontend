<script>
    import SectionTitle from '../components/SectionTitle.svelte';
    import { allSubjectsData } from '../stores.js';

    let allSubjects = [];
    
	const unsubscribeAllSubjectsData = allSubjectsData.subscribe(it => {
		allSubjects = it;
    });
    
    let mySubjectIds = ["subject1", "subject3"];

    let selectedSubjectId = '';
    let showAddSubjectDialog = false;
    function openAddSubjectDialog() {
        if (!showAddSubjectDialog) {
            showAddSubjectDialog = true;
            selectedSubjectId = '';
        }
    }
    function addSelectedSubjectAndCloseAddSubjectDialog() {
        if (showAddSubjectDialog) {
            if (selectedSubjectId && selectedSubjectId != '' && !mySubjectIds.includes(selectedSubjectId)) {
                mySubjectIds = [...mySubjectIds, selectedSubjectId];
            }
            showAddSubjectDialog = false;
        }
    }
    function cancelAndCloseAddSubjectDialog() {
        selectedSubjectId = '';
        if (showAddSubjectDialog) {
            showAddSubjectDialog = false;
        }
    }
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
{#if showAddSubjectDialog}
    <div class="dialog">
        <select bind:value={selectedSubjectId}>
            <option value="">-- Please Select Subject --</option>
            {#each allSubjects as subject}
                {#if !mySubjectIds.includes(subject.id)}
                    <option value="{subject.id}">{subject.title}</option>
                {/if}
            {/each}
        </select>
        <a class="button" on:click="{addSelectedSubjectAndCloseAddSubjectDialog}">Add</a>
        <a class="button" on:click="{cancelAndCloseAddSubjectDialog}">Cancel</a>
    </div>
{/if}
<a class="button" on:click="{openAddSubjectDialog}">Add a Subject</a>
