<script>
	import EmployerMyRequirements from './EmployerMyRequirements.svelte';
	import EmployerMatchingStudents from './EmployerMatchingStudents.svelte';
	import AddEMailToWaitList from '../components/AddEMailToWaitList.svelte';
</script>

<div class="content">
    <div>
        <AddEMailToWaitList/>
    </div>
    <div class="wrapper wrapper-of-boxes">
        <div class="col col-50 col-box">
            <span>Testss</span>
            <EmployerMyRequirements/>
        </div>
        <div class="col col-50 col-box">
            <EmployerMatchingStudents/>
        </div>
	</div>
</div>
