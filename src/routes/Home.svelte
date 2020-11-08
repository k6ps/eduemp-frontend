<script>
	// import { Router, Link, Route } from "svelte-routing";
	// import StudentHome from "./StudentHome.svelte";
	// import EmployerHome from "./EmployerHome.svelte";
	// import UniversityHome from "./UniversityHome.svelte";
	import AddEMailToWaitList from '../components/AddEMailToWaitList.svelte';

	// export let url = "/";
</script>

<div class="hero">
	<div class="wrapper">
		<div class="col col-50">
			<div class="slogan">
				<!-- Students want to be hired, <br class="hideonmob">
				Employers are looking for talent, <br class="hideonmob">
				University programs are not able to keep up – <br class="hideonmob"> -->
				<span class="green">Smartpick brings higer education closer to career.</span>
			</div>
			<div>
				<AddEMailToWaitList/>
			</div>
			<!-- <Router url="{url}">
				<h3>Pick your role:</h3>
				<ul class="role-selection">
					<li><a class="button" href="student">Student</a></li>
					<li><a class="button" href="employer">Employer</a></li>
					<li><a class="button" href="university">University</a></li>
				</ul>
			</Router> -->
		</div>
		<div class="col col-50 col-vid">
			<iframe class="youtube" src="https://www.youtube.com/embed/IXkDFJkWSWU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</div>
</div>
<div class="content">
	<div class="wrapper">
		<div class="col col-100 center-headline">
			<h1 class="center-headline">Benefits</h1>
		</div>
		<div class="col col-30">
			<h2>Student</h2>
			<ul class="ul-bullet">
				<li>
					Easy access to most relevant internships and practical assignments
				</li>
				<li>
					Design your study journey through practical work to support your career from the beginning
				</li>
				<li>
					Get hired while you're studying
				</li>
			</ul>
		</div>
		<div class="col col-30">
			<h2>Employer</h2>
			<ul class="ul-bullet">
				<li>
					Opportunity to create an education path for the talents you want to hire
				</li>
				<li>
					Outsource tasks and discover great talent
				</li>
				<li>
					Strengthen your employer brand and recruit more efficiently
				</li>
			</ul>
		</div>
		<div class="col col-30">
			<h2>University</h2>
			<ul class="ul-bullet">
				<li>
					Innovative universities offer an agile approach to higher education
				</li>
				<li>
					Collaborating with employers
				</li>
				<li>
					Attracting students with the modern system in accordance with the job market they are about to enter
				</li>
			</ul>
		</div>
	</div>
</div>
