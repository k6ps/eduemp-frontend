<script>
	import { Router, Link, Route } from "svelte-routing";

	import Home from "./routes/Home.svelte";
	import StudentHome from "./routes/StudentHome.svelte";
	import EmployerHome from "./routes/EmployerHome.svelte";
	import UniversityHome from "./routes/UniversityHome.svelte";

    export let url = "";
</script>

<Router url="{url}">
    <header>
        <div class="wrapper">
            <div class="logo">
                <a href="/">
                	<img src="img/logo.svg" alt="EduEmp logo"/>
                </a>
            </div>
        </div>
    </header>
    <main>
        <Route path="student" component="{StudentHome}" />
        <Route path="employer" component="{EmployerHome}" />
        <Route path="university" component="{UniversityHome}" />
        <Route path="/"><Home /></Route>
    </main>
    <footer>
        <div class="content">
            <div class="wrapper">
                <div class="col col-50">
                    <span>developed @ <a href="https://theglobalhack.com" target="_blank">#theglobalhack</a></span>
                </div>
								<div class="col col-50 social">
										<a href="https://www.linkedin.com/in/marivalgepea/" target="_blank"><img src="img/icon-linkedin.svg" alt="LinkedIn"/></a>
										<a href="https://www.youtube.com/watch?v=IXkDFJkWSWU" target="_blank"><img src="img/icon-youtube.svg" alt="Youtube"/></a>
										<a href="https://www.instagram.com/smartpick.talents/" target="_blank"><img src="img/icon-instagram.svg" alt="Instagram"/></a>
								</div>
            </div>
        </div>
    </footer>
</Router>
