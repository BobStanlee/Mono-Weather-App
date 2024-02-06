const splashContent = function() {
    let content = `<div class="splash-container">
                        <h1 class="title">
                        Mono Weather
                        </h1>
                    </div>`

    document.body.innerHTML = content;

    setTimeout(() => {
        // Remove the function from the load event
        document.body.innerHTML = '';
        console.log('The function has been removed after 5 seconds');
      }, 5000);
}

export default splashContent;