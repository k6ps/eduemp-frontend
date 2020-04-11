<script>
	import SectionTitle from '../components/SectionTitle.svelte';
</script>

<SectionTitle sectionTitle="Matching Students/Employees"/>
<select>
    <option value="" selected="selected">All Jobs</option>
    <option value="job1">Job 1</option>
    <option value="job2">Job 2</option>
    <option value="job3">Job 3</option>
</select>
<ul class="profiles">
    <li>
        <div class="student-with-match">
            <img src="/img/placeholder.svg" alt="Student 2 Profile Photo" />
            <span>Person 2</span>
            <span>100%</span>
        </div>
    </li>
    <li>
        <div class="student-with-match">
            <img src="/img/placeholder.svg" alt="Student 5 Profile Photo" />
            <span>Person 5</span>
            <span>80%</span>
        </div>
    </li>
    <li>
        <div class="student-with-match">
            <img src="/img/placeholder.svg" alt="Student 1 Profile Photo" />
            <span>Person 1</span>
            <span>67%</span>
        </div>
    </li>
</ul>
