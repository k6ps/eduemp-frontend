<!-- <script>
    let eMailAddress = '';
    let role = '';

    function addToInterestedList() {
        alert("Thank you, " + eMailAddress + " (" + role + "), for your interest!");
        eMailAddress = '';
        role = '';
    }
</script> -->

<div class="add-email-to-waiting-list">
    <h3>Sounds interesting?</h3>
    <!-- <span>I am a: </span>
    <label>
        <input type="radio" bind:group={role} value={'student'}>
        Student
    </label>
    <label>
        <input type="radio" bind:group={role} value={'employer'}>
        Employer representative
    </label>
    <label>
        <input type="radio" bind:group={role} value={'university'}>
        University representative
    </label>
    <input bind:value={eMailAddress} placeholder="My email" />
    <a class="button" on:click="{addToInterestedList}">I am interested!</a> -->
    <a class="button" target="_blank" href="https://forms.gle/JMNRKJegiYnBoMga8">Get in touch!</a>
</div>
