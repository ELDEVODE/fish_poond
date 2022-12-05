function level() {
    var input = document.getElementById("userInput").value
    document.documentElement.style.setProperty('--my-height', ((280-(400*input)/100)) + 'px')
    
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--my-height'))
}

// ((400-(400*input)/100))
export default level