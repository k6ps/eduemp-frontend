<script>
    import SectionTitle from '../components/SectionTitle.svelte';
    import JobMatchItem from '../components/JobMatchItem.svelte';

    const matchingJobs = [
        {
            organizationName: 'Company 1',
            jobField: {
                code: 'marketing',
                label: 'Marketing',
            },
            jobTitle: 'Job 1',
            matchPercentage: 100
        },
        {
            organizationName: 'Company 2',
            jobField: {
                code: 'management',
                label: 'Management',
            },
            jobTitle: 'Job 2',
            matchPercentage: 80
        },
        {
            organizationName: 'Company 33',
            jobField: {
                code: 'it',
                label: 'IT',
            },
            jobTitle: 'Job 33',
            matchPercentage: 67
        }
    ];

    let filterValue;
    let filteredMatchingJobs = matchingJobs;

    function filterMatchingJobs() {
        if (!filterValue || filterValue == '') {
            filteredMatchingJobs = matchingJobs;
        } else {
            filteredMatchingJobs = [];
            matchingJobs.forEach(it => {
                if (it.jobField && it.jobField.code && filterValue == it.jobField.code) {
                    filteredMatchingJobs = [...filteredMatchingJobs, it];
                }
            });
        }
    }
</script>

<SectionTitle sectionTitle="Matching Jobs"/>
<select bind:value={filterValue} on:change="{filterMatchingJobs}">
    <option value="" selected="selected">-- All Fields --</option>
    <option value="marketing">Marketing</option>
    <option value="management">Management</option>
    <option value="it">IT</option>
</select>
<ul class="profiles">
    {#each filteredMatchingJobs as filteredMatchingJob}
    <li>
        <JobMatchItem jobMatch={filteredMatchingJob}/>
    </li>
    {/each}
</ul>
