<script>
	import StudentMyCurriculum from './StudentMyCurriculum.svelte';
	import StudentIAmInterestedIn from './StudentIAmInterestedIn.svelte';
	import StudentMatchingEmployers from './StudentMatchingEmployers.svelte';
	import StudentIfIDecidedToChoose from './StudentIfIDecidedToChoose.svelte';
</script>

<div class="content">
	<div class="wrapper wrapper-of-boxes">
		<div class="col col-50 col-box">
			<StudentMyCurriculum/>
		</div>
		<div class="col col-50 col-box">
			<StudentIAmInterestedIn/>
		</div>
		<div class="col col-50 col-box">
			<StudentMatchingEmployers/>
		</div>
		<div class="col col-50 col-box">
			<StudentIfIDecidedToChoose/>
		</div>
	</div>
</div>
