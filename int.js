/*const $html = document.querySelector('html')
const $checkbox = document.querySelector('#toggler')

$checkbox.addEventListener('change', function(){

     $html.classList.toggle('dark-mode')

})*/


/*const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
  window
  .getComputedStyle(element)
 .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
   // bg: window.getComputedStyle(html).getPropertyValue("--bg")//pegar esse estilo do css
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
   // bg: window.getComputedStyle(html).getPropertyValue("--bg")//pegar esse estilo do css
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()
//const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) =>{
    Object.keys(colors).map(keys =>
        html.style.setProperty(transformKey(key), colors[key])
        
        )
}

checkbox.addEventListener("change", ({target}) => {
   target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

/*let a = document.getElementById('toggler')
function entrar(){
 let b = String(c.value)  
    if(b[0]:checked=="true"){
    body.style.background = '#ffffffaf'
    }
    else{
        body.style.background = '#ffffffaf'
    }
}*/