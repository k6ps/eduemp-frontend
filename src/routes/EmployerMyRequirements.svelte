<script>
	import SectionTitle from '../components/SectionTitle.svelte';
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
        <tr>
            <td>Subject 1</td>
            <td>yes</td>
            <td>13/4</td>
        </tr>
        <tr>
            <td>Subject 2</td>
            <td>no</td>
            <td>0/10</td>
        </tr>
        <tr>
            <td>Subject 6</td>
            <td>yes</td>
            <td>no</td>
        </tr>
    </tbody>
</table>
<a class="button">Add a Job</a>
<a class="button">Add a Requirement</a>