<script>
	import SectionTitle from '../components/SectionTitle.svelte';
</script>

<SectionTitle sectionTitle="If I Decided to Choose"/>
<input type="checkbox" value="subject6" />Subject 6
<input type="checkbox" value="subject2" />Subject 2

<SectionTitle sectionTitle="…then these jobs also match"/>
<ul class="profiles">
    <li>
        <div class="employer-with-match">
            <img src="/img/placeholder.svg" alt="Company 6 Logo" />
            <span>Company 6</span>
            <span>Job 6</span>
            <span>90%</span>
        </div>
    </li>
    <li>
        <div class="employer-with-match">
            <img src="/img/placeholder.svg" alt="Company 7 Logo" />
            <span>Company 7</span>
            <span>Job 7</span>
            <span>75%</span>
        </div>
    </li>
</ul>
