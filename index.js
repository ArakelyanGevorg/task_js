
function* randomNum(x) {
    let s2 = [];
    let retry = false
    let current = Math.floor(Math.random() * x.length);
    let next = 1;
    while (true) {
    	console.log(x)
        let reset = x[current];
        if (!reset) {
            retry = yield 'array is empty';
        } else
        retry = yield reset;

        s2.push(...x.splice(current, 1));
        current = Math.floor(Math.random() * x.length);
        next += 1;
        if (retry) {
            x = s2
            s2 = []

            next = 1
        }
        
    }
}

const sequence = randomNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

document.querySelector(".get_random_number").addEventListener('click', function(){
	let v = sequence.next().value
	console.log(v)
	if (v == 'array is empty') {
        modal_popup.classList.add("active");
    }
    else{
        document.querySelector("#result").innerHTML = v

    }
})


let modal_popup = document.querySelector(".modal_popup");


let popup_cancel_btn = document.querySelector(".popup_cancel_btn");

let popup_confirm_btn = document.querySelector(".popup_confirm_btn");


popup_confirm_btn.addEventListener("click", function(){
    sequence.next(true);
    modal_popup.classList.remove("active");

})
popup_cancel_btn.addEventListener("click", function(){
    modal_popup.classList.remove("active");
})
