<script>
	import SectionTitle from '../components/SectionTitle.svelte';
</script>

<SectionTitle sectionTitle="Matching Employers"/>
<select>
    <option value="" selected="selected">-- All Fields --</option>
    <option value="marketing">Marketing</option>
    <option value="management">Management</option>
    <option value="it">IT</option>
</select>
<ul>
    <li>
        <div class="employer-with-match">
            <img src="default-employer-logo.png" alt="Company 1 Logo" />
            <span>Company 1</span>
            <span>100%</span>
        </div>
    </li>
    <li>
        <div class="employer-with-match">
            <img src="default-employer-logo.png" alt="Company 2 Logo" />
            <span>Company 2</span>
            <span>80%</span>
        </div>
    </li>
    <li>
        <div class="employer-with-match">
            <img src="default-employer-logo.png" alt="Company 3 Logo" />
            <span>Company 3</span>
            <span>67%</span>
        </div>
    </li>
</ul>
