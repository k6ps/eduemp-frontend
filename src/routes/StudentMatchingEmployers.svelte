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

    let filteredMatchingJobs = matchingJobs;
</script>

<SectionTitle sectionTitle="Matching Jobs"/>
<select>
    <option value="" selected="selected">-- All Fields --</option>
    <option value="marketing">Marketing</option>
    <option value="management">Management</option>
    <option value="it">IT</option>
</select>
<ul class="profiles">
    <li>
        <JobMatchItem jobMatch={filteredMatchingJobs[0]}/>
    </li>
    <li>
        <JobMatchItem jobMatch={filteredMatchingJobs[1]}/>
    </li>
    <li>
        <JobMatchItem jobMatch={filteredMatchingJobs[2]}/>
    </li>
</ul>
