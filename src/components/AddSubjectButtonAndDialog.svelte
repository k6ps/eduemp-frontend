<script>
    import { allSubjectsData, myCurriculumSubjectIds, myInterestedInSubjectIds } from '../stores.js';

    export let mySubjectIdsSource; 

    let allSubjects = [];
	const unsubscribeAllSubjectsData = allSubjectsData.subscribe(it => {
		allSubjects = it;
    });
    
    let mySubjectIds = [];
    const unsubscribeMyCurriculumSubjectIds = (mySubjectIdsSource == 'myInterestedInSubjectIds') ? 
    myInterestedInSubjectIds.subscribe(it => {
		mySubjectIds = it;
    }) : myCurriculumSubjectIds.subscribe(it => {
		mySubjectIds = it;
    });

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
                if (mySubjectIdsSource == 'myInterestedInSubjectIds') {
                    myInterestedInSubjectIds.update(it => [...it, selectedSubjectId]);
                } else {
                    myCurriculumSubjectIds.update(it => [...it, selectedSubjectId]);
                }
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
