<script>
	let eMailAddress = '';

    function addToInterestedList() {
        alert("Thank you, " + eMailAddress + ", for your interest!");
    }
</script>

<div class="add-email-to-waiting-list">
    <input bind:value={eMailAddress} placeholder="Please enter your e-mail" />
    <a class="button" on:click="{addToInterestedList}">I am interested!</a>
</div>