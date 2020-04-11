<script>
    import SectionTitle from '../components/SectionTitle.svelte';
    import JobMatchItem from '../components/JobMatchItem.svelte';
    
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
</script>

<SectionTitle sectionTitle="If I Decided to Choose"/>
<input type="checkbox" value="subject6" />Subject 6
<input type="checkbox" value="subject2" />Subject 2

<SectionTitle sectionTitle="…then these jobs also match"/>
<ul class="profiles">
    {#each potentialMatchingJobs as potentialMatchingJob}
    <li>
        <JobMatchItem jobMatch={potentialMatchingJob}/>
    </li>
    {/each}
</ul>
