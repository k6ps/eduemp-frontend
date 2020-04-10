<script>
	export let name;
</script>

<main>
    <section class="header">
		<div class="logo">
			<img src="img/logo.png" alt="EduEmp logo"/>
		</div>
    </section>
    <section class="content">
        <ul class="role-selection">
            <li><a href="student/index.html">I am student/potential employee</a></li>
            <li><a href="employer/index.html">I am employer representative</a></li>
            <li><a href="university/index.html">I am university programme manager</a></li>
        </ul>
		<div class="slogan">students want to be hired, employers need skilled workforce, univerisity  programmes are outdated!</div>
    </section>
    <section class="footer">
    </section>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>