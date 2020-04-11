<script>
	export let jobMatch;
</script>

<div class="employer-with-match">
    <img src="/img/placeholder.svg" alt="{jobMatch.organizationName} Logo" />
    <span>{jobMatch.organizationName}</span>
    <span>{jobMatch.jobTitle}</span>
    <span>{jobMatch.matchPercentage}%</span>
</div>