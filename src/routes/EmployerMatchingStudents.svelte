<script>
	import SectionTitle from '../components/SectionTitle.svelte';
</script>

<SectionTitle sectionTitle="Matching Students/Employees"/>
<select>
    <option value="" selected="selected">-- All Positions --</option>
    <option value="position1">Position 1</option>
    <option value="position2">Position 2</option>
    <option value="position3">Position 3</option>
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
