<script>
    import SectionTitle from '../components/SectionTitle.svelte';
    
    const allSubjects = [
        {
            id: "subject1",
            title: "Subject 1",
            employerNeeds: true
        },
        {
            id: "subject2",
            title: "Subject 2",
            employerNeeds: true
        },
        {
            id: "subject3",
            title: "Subject 333",
            employerNeeds: false
        },
        {
            id: "subject4",
            title: "Subject 4",
            employerNeeds: false
        },
        {
            id: "subject5",
            title: "Subject 5",
            employerNeeds: true
        },
        {
            id: "subject6",
            title: "Subject 6",
            employerNeeds: true
        },
    ];
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
