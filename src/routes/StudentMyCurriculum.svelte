<script>
    import SectionTitle from '../components/SectionTitle.svelte';
    
    const allSubjects = [
        {
            id: "subject1",
            title: "Subject 1",
            employerNeeds: true
        },
        {
            id: "subject3",
            title: "Subject 333",
            employerNeeds: false
        },
    ];
    let mySubjectIds = ["subject1", "subject3"];
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
<a class="button">Add a Subject</a>
