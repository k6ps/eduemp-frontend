<script>
	import StudentMyCurriculum from './StudentMyCurriculum.svelte';
	import StudentIAmInterestedIn from './StudentIAmInterestedIn.svelte';
	import StudentMatchingEmployers from './StudentMatchingEmployers.svelte';
	import StudentIfIDecidedToChoose from './StudentIfIDecidedToChoose.svelte';
</script>

<div class="content">
	<div class="wrapper">
		<div class="col">
			<StudentMyCurriculum/>
		</div>
		<div class="col">
			<StudentIAmInterestedIn/>
		</div>
		<div class="col">
			<StudentMatchingEmployers/>
		</div>
		<div class="col">
			<StudentIfIDecidedToChoose/>
		</div>
	</div>
</div>
