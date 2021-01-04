function editadd(){
    document.getElementById("adder").insertAdjacentHTML("beforebegin",'<div class="tweetbox"><button onclick="del(event)">×</button>作者ツイート<input type="checkbox" class="tweetmode" checked><textarea class="tweet"></textarea></div>')
    let e = document.getElementById("edit");
    e.scrollTop = e.scrollHeight;
}

document.addEventListener("keydown", e => {
    if (e.target.classList.contains("tweet")) {
        if (e.code === "ArrowRight" || e.code === "ArrowDown") {
            if ((e.target.selectionStart === e.target.selectionEnd) && (e.target.selectionStart === e.target.value.length)) {
                if (e.target.parentNode.nextElementSibling.classList.contains("tweetbox")) {
                    e.target.parentNode.nextElementSibling.lastChild.focus()
                    e.preventDefault()
                }
            }
        } else if (e.code === "ArrowLeft" || e.code === "ArrowUp") {
            if ((e.target.selectionStart === 0) && (e.target.selectionEnd === 0)) {
                let p = e.target.parentNode.previousElementSibling
                if (p != null) {
                    p.lastChild.focus()
                    p.lastChild.setSelectionRange(p.lastChild.value.length, p.lastChild.value.length);
                    e.preventDefault()
                }
            }
        }
    }
})

function change(){
    for (let e of document.querySelectorAll(".tweet")){
        let val = e.value.replace(/&/g,"&amp;");
        val = val.replace(/\n/g,"&br;");
        val = val.replace(/\|/g,"&#65372;")
        val = val.replace(/>/g,"&gt;")
        val = val.replace(/~/g,"&#126;")
        if (val != "") {
            val = (e.previousElementSibling.checked ? "|BGCOLOR(#ffffee):" : "|") + val + "|\n"
            document.getElementById("resulttext").value += val
        }
    }
}
function del(e){
    e.target.parentNode.outerHTML = ""
}
