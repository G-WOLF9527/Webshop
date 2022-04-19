const wlcmbtn = document.querySelector(".button a");
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const chckout = document.querySelector(".checkout");
const body = document.querySelector("body");
const wlc = document.querySelector("h1");
const h3 = document.querySelector("h3");
const search = document.querySelector(".search");
const load = document.querySelector(".load");
const sb = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const foot = document.querySelector(".foot");
const laptop = document.querySelector("#laptop");
const desktop = document.querySelector("#desktop");
const i1 = document.querySelector(".item1");
const i2 = document.querySelector(".item2");
const i3 = document.querySelector(".item3");
const i4 = document.querySelector(".item4");
const i5 = document.querySelector(".item5");
const i6 = document.querySelector(".item6");
const tov = document.querySelector(".tov");
const sendv = document.querySelector(".sendv");
const i1b = document.querySelector(".item1 button");
const i2b = document.querySelector(".item2 button");
const i3b = document.querySelector(".item3 button");
const i4b = document.querySelector(".item4 button");
const i5b = document.querySelector(".item5 button");
const i6b = document.querySelector(".item6 button");
const ccout = document.querySelector(".cout");
const ccoutbtn = document.querySelector(".ccoutb");
const empty = document.querySelector(".empty");
const i1n = document.querySelector(".item1 .h1");
const i2n = document.querySelector(".item2 .h2");
const i3n = document.querySelector(".item3 .h3");
const i4n = document.querySelector(".item4 .h4");
const i5n = document.querySelector(".item5 .h5");
const i6n = document.querySelector(".item6 .h6");
const ccoutp = document.querySelector(".chck");
const order = document.querySelector(".order");
const summary = document.querySelector(".sumprice");
let flag1 = 0;
let flag2 = 0;
let flag3 = 0;
let flag4 = 0;
let flag5 = 0;
let flag6 = 0;
let i1count = 0;
let i2count = 0;
let i3count = 0;
let i4count = 0;
let i5count = 0;
let i6count = 0;
let help = 0;
let chhelp = 0;
let pricesum = 0;

wlcmbtn.addEventListener('click', show)
menu.addEventListener('click', sidemenu)
desktop.addEventListener('click', dcheck)
laptop.addEventListener('click', lcheck)
chckout.addEventListener('click', cout)
i1b.addEventListener('click',i1cart)
i2b.addEventListener('click',i2cart)
i3b.addEventListener('click',i3cart)
i4b.addEventListener('click',i4cart)
i5b.addEventListener('click',i5cart)
i6b.addEventListener('click',i6cart)
ccoutbtn.addEventListener('click', back)

function show(){
    loader();
    body.style.backgroundImage="none";
    wlcmbtn.style.display="none";
    h3.style.display="none";
    wlc.style.display="none";
    header.style.borderBottom="none";
    header.style.display="none";
}

function loader(){
    load.style.display="initial";
    setTimeout(deload,2000);
}

function deload() {
    load.style.display="none";
    search.style.display="flex";
    menu.style.display="initial";
    chckout.style.display="initial";
    header.style.display="flex";
    header.style.justifyContent="space-between";
    main.style.display="grid";
    foot.style.display="initial";
}

function sidemenu () {
    help++;
    if(help%2 === 0){
        sb.style.display="none";
    }else {
        sb.style.display="initial";
    }
}

function dcheck() {
    if(desktop.checked === true){
        i1.style.display="initial";
        i2.style.display="initial";
        i3.style.display="initial";
        i6.style.display="initial";
    }else{
        i1.style.display="none";
        i2.style.display="none";
        i3.style.display="none";
        i6.style.display="none";
    }
}

function lcheck() {
    if(laptop.checked === true){
        i4.style.display="initial";
        i5.style.display="initial";
    }else{
        i4.style.display="none";
        i5.style.display="none";
    }
}

function i1cart() {
    i1count++;

//ADD & DELETE LIKE FROM A TO-DO LIST
  /*  i1a.textContent = i1count;
    i1nn = document.createElement("p");
    i1nn.textContent = i1n.textContent;
    i1pr = document.createElement("p");
    i1pr.textContent = "Price: 1";
    i1btn = document.createElement("button");
    i1btn.textContent = "X";
    ccoutp.append(i1nn, i1pr, i1btn);
    i1btn.setAttribute("id", "i1"+i1count);
    i1btn.style.border="none";
    i1btn.style.color="red";
    i1btn.style.fontWeight="bold";
    i1nn.style.textAlign="center";
    ccoutp.style.marginTop="0";
    i1hr = document.createElement("hr");
    ccoutp.append(i1hr);
    pricesum += 1;
    i1btn.addEventListener('click', removeitm1)
    }

    function removeitm1(e) {
        let btn = document.getElementById(e.target.id);
        btn.previousElementSibling.previousElementSibling.remove();
        btn.previousElementSibling.remove();
        btn.nextElementSibling.remove();
        btn.remove();
        pricesum -=1;
        summary.textContent = "Price summary: "+pricesum;
        i1count--;
        i1a.textContent = i1count;
    }*/
}

function i2cart() {
    i2count++;
}

function i3cart() {
    i3count++;
}

function i4cart() {
    i4count++;
}

function i5cart() {
    i5count++;
}

function i6cart() {
    i6count++;
}

function cout(){
    chhelp++;
    if(chhelp%2 != 0){
        coutload();
        main.style.display="none";
        menu.style.cursor="no-drop";
        if(i1count != 0 || i2count != 0 || i3count != 0 || i4count != 0 || i5count != 0 || i6count != 0){
            pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
            empty.style.display="none";
            order.style.backgroundColor="blue";
            ccoutp.style.marginTop="0";
            summary.textContent = "Price summary: "+pricesum;
            if(i1count != 0 && flag1 === 0){
                let i1pr = document.createElement("p");              
                let i1btnd = document.createElement("button");              
                let i1c = document.createElement("p");
                let i1hr = document.createElement("hr");
                let i1nn = document.createElement("p");
                let i1btnm = document.createElement("button");
                let i1btnl = document.createElement("button");
                i1btnm.textContent = ">";
                i1btnl.textContent = "<";
                i1btnd.textContent = "X";
                i1nn.textContent = i1n.textContent;
                i1pr.textContent = "Price: 1";
                i1c.textContent = "In the cart: "+i1count;
                ccoutp.append(i1nn, i1pr, i1c, i1btnl, i1btnm, i1btnd, i1hr);
                i1nn.style.display = "initial";
                i1nn.style.marginRight = "2rem";
                i1pr.style.display = "initial";
                i1pr.style.marginRight = "2rem";
                i1c.style.display = "initial";
                i1c.style.marginRight = "2rem";
                i1btnm.style.marginRight = "2rem";
                i1btnd.setAttribute("id", "i1");
                i1btnl.setAttribute("id", "i1c");
                flag1 = 1;
                i1btnm.addEventListener('click', addcount1)
                function addcount1() {
                    i1count++;
                    i1c.textContent = "In the cart: "+i1count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                }
                i1btnl.addEventListener('click', removecount1)
                function removecount1(e) {
                    i1count--;
                    i1c.textContent = "In the cart: "+i1count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    if(i1count<1){
                        let del = document.getElementById(e.target.id);
                        del.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.remove();
                        del.remove();
                        pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                        summary.textContent = "Price summary: "+pricesum;
                        flag1 = 0;
                    }
                }
                i1btnd.addEventListener('click', deleteitem1)
                function deleteitem1(e){
                    let idel = document.getElementById(e.target.id);
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.remove();
                    idel.nextElementSibling.remove();
                    idel.remove();
                    i1count = 0;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    flag1 = 0;
                }
            } else if (i1count>1){
                let i1c = document.getElementById("i1c");
                i1c.textContent = "In the cart: "+i1count;
            }
            if(i2count != 0 && flag2 === 0){
                let i2pr = document.createElement("p");              
                let i2btnd = document.createElement("button");              
                let i2c = document.createElement("p");
                let i2hr = document.createElement("hr");
                let i2nn = document.createElement("p");
                let i2btnm = document.createElement("button");
                let i2btnl = document.createElement("button");
                i2btnm.textContent = ">";
                i2btnl.textContent = "<";
                i2btnd.textContent = "X";
                i2nn.textContent = i2n.textContent;
                i2pr.textContent = "Price: 2";
                i2c.textContent = "In the cart: "+i2count;
                ccoutp.append(i2nn, i2pr, i2c, i2btnl, i2btnm, i2btnd, i2hr);
                i2nn.style.display = "initial";
                i2nn.style.marginRight = "2rem";
                i2pr.style.display = "initial";
                i2pr.style.marginRight = "2rem";
                i2c.style.display = "initial";
                i2c.style.marginRight = "2rem";
                i2btnm.style.marginRight = "2rem";
                i2btnd.setAttribute("id", "i2");
                i2btnl.setAttribute("id", "i2c");
                flag2 = 1;
                i2btnm.addEventListener('click', addcount2)
                function addcount2() {
                    i2count++;
                    i2c.textContent = "In the cart: "+i2count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                }
                i2btnl.addEventListener('click', removecount2)
                function removecount2(e) {
                    i2count--;
                    i2c.textContent = "In the cart: "+i2count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    if(i2count<1){
                        let del = document.getElementById(e.target.id);
                        del.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.remove();
                        del.remove();
                        pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                        summary.textContent = "Price summary: "+pricesum;
                        flag2 = 0;
                    }
                }
                i2btnd.addEventListener('click', deleteitem2)
                function deleteitem2(e){
                    let idel = document.getElementById(e.target.id);
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.remove();
                    idel.nextElementSibling.remove();
                    idel.remove();
                    i2count = 0;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    flag2 = 0;
                }
            }else if (i2count>1){
                let i2c = document.getElementById("i2c");
                i2c.textContent = "In the cart: "+i2count;
            }
            if(i3count != 0 && flag3 === 0){
                let i3pr = document.createElement("p");              
                let i3btnd = document.createElement("button");              
                let i3c = document.createElement("p");
                let i3hr = document.createElement("hr");
                let i3nn = document.createElement("p");
                let i3btnm = document.createElement("button");
                let i3btnl = document.createElement("button");
                i3btnm.textContent = ">";
                i3btnl.textContent = "<";
                i3btnd.textContent = "X";
                i3nn.textContent = i3n.textContent;
                i3pr.textContent = "Price: 3";
                i3c.textContent = "In the cart: "+i3count;
                ccoutp.append(i3nn, i3pr, i3c, i3btnl, i3btnm, i3btnd, i3hr);
                i3nn.style.display = "initial";
                i3nn.style.marginRight = "2rem";
                i3pr.style.display = "initial";
                i3pr.style.marginRight = "2rem";
                i3c.style.display = "initial";
                i3c.style.marginRight = "2rem";
                i3btnm.style.marginRight = "2rem";
                i3btnd.setAttribute("id", "i3");
                i3btnl.setAttribute("id", "i3c");
                flag3 = 1;
                i3btnm.addEventListener('click', addcount3)
                function addcount3() {
                    i3count++;
                    i3c.textContent = "In the cart: "+i3count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                }
                i3btnl.addEventListener('click', removecount3)
                function removecount3(e) {
                    i3count--;
                    i3c.textContent = "In the cart: "+i3count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    if(i3count<1){
                        let del = document.getElementById(e.target.id);
                        del.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.remove();
                        del.remove();
                        pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                        summary.textContent = "Price summary: "+pricesum;
                        flag3 = 0;
                    }
                }
                i3btnd.addEventListener('click', deleteitem3)
                function deleteitem3(e){
                    let idel = document.getElementById(e.target.id);
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.remove();
                    idel.nextElementSibling.remove();
                    idel.remove();
                    i3count = 0;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    flag3 = 0;
                }
            }else if (i3count>1){
                let i3c = document.getElementById("i3c");
                i3c.textContent = "In the cart: "+i3count;
            }
            if(i4count != 0 && flag4 === 0){
                let i4pr = document.createElement("p");              
                let i4btnd = document.createElement("button");              
                let i4c = document.createElement("p");
                let i4hr = document.createElement("hr");
                let i4nn = document.createElement("p");
                let i4btnm = document.createElement("button");
                let i4btnl = document.createElement("button");
                i4btnm.textContent = ">";
                i4btnl.textContent = "<";
                i4btnd.textContent = "X";
                i4nn.textContent = i4n.textContent;
                i4pr.textContent = "Price: 4";
                i4c.textContent = "In the cart: "+i4count;
                ccoutp.append(i4nn, i4pr, i4c, i4btnl, i4btnm, i4btnd, i4hr);
                i4nn.style.display = "initial";
                i4nn.style.marginRight = "2rem";
                i4pr.style.display = "initial";
                i4pr.style.marginRight = "2rem";
                i4c.style.display = "initial";
                i4c.style.marginRight = "2rem";
                i4btnm.style.marginRight = "2rem";
                i4btnd.setAttribute("id", "i4");
                i4btnl.setAttribute("id", "i4c");
                flag4 = 1;
                i4btnm.addEventListener('click', addcount4)
                function addcount4() {
                    i4count++;
                    i4c.textContent = "In the cart: "+i4count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                }
                i4btnl.addEventListener('click', removecount4)
                function removecount4(e) {
                    i4count--;
                    i4c.textContent = "In the cart: "+i4count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    if(i4count<1){
                        let del = document.getElementById(e.target.id);
                        del.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.remove();
                        del.remove();
                        pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                        summary.textContent = "Price summary: "+pricesum;
                        flag4 = 0;
                    }
                }
                i4btnd.addEventListener('click', deleteitem4)
                function deleteitem4(e){
                    let idel = document.getElementById(e.target.id);
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.remove();
                    idel.nextElementSibling.remove();
                    idel.remove();
                    i4count = 0;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    flag4 = 0;
                }
            }else if (i4count>1){
                let i4c = document.getElementById("i4c");
                i4c.textContent = "In the cart: "+i4count;
            }
            if(i5count != 0 && flag5 === 0){
                let i5pr = document.createElement("p");              
                let i5btnd = document.createElement("button");              
                let i5c = document.createElement("p");
                let i5hr = document.createElement("hr");
                let i5nn = document.createElement("p");
                let i5btnm = document.createElement("button");
                let i5btnl = document.createElement("button");
                i5btnm.textContent = ">";
                i5btnl.textContent = "<";
                i5btnd.textContent = "X";
                i5nn.textContent = i5n.textContent;
                i5pr.textContent = "Price: 5";
                i5c.textContent = "In the cart: "+i5count;
                ccoutp.append(i5nn, i5pr, i5c, i5btnl, i5btnm, i5btnd, i5hr);
                i5nn.style.display = "initial";
                i5nn.style.marginRight = "2rem";
                i5pr.style.display = "initial";
                i5pr.style.marginRight = "2rem";
                i5c.style.display = "initial";
                i5c.style.marginRight = "2rem";
                i5btnm.style.marginRight = "2rem";
                i5btnd.setAttribute("id", "i5");
                i5btnl.setAttribute("id", "i5c");
                flag5 = 1;
                i5btnm.addEventListener('click', addcount5)
                function addcount5() {
                    i5count++;
                    i5c.textContent = "In the cart: "+i5count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                }
                i5btnl.addEventListener('click', removecount5)
                function removecount5(e) {
                    i5count--;
                    i5c.textContent = "In the cart: "+i5count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    if(i5count<1){
                        let del = document.getElementById(e.target.id);
                        del.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.remove();
                        del.remove();
                        pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                        summary.textContent = "Price summary: "+pricesum;
                        flag5 = 0;
                    }
                }
                i5btnd.addEventListener('click', deleteitem5)
                function deleteitem5(e){
                    let idel = document.getElementById(e.target.id);
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.remove();
                    idel.nextElementSibling.remove();
                    idel.remove();
                    i5count = 0;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    flag5 = 0;
                }
            }else if (i5count>1){
                let i5c = document.getElementById("i5c");
                i5c.textContent = "In the cart: "+i5count;
            }
            if(i6count != 0 && flag6 === 0){
                let i6pr = document.createElement("p");              
                let i6btnd = document.createElement("button");              
                let i6c = document.createElement("p");
                let i6hr = document.createElement("hr");
                let i6nn = document.createElement("p");
                let i6btnm = document.createElement("button");
                let i6btnl = document.createElement("button");
                i6btnm.textContent = ">";
                i6btnl.textContent = "<";
                i6btnd.textContent = "X";
                i6nn.textContent = i6n.textContent;
                i6pr.textContent = "Price: 6";
                i6c.textContent = "In the cart: "+i6count;
                ccoutp.append(i6nn, i6pr, i6c, i6btnl, i6btnm, i6btnd, i6hr);
                i6nn.style.display = "initial";
                i6nn.style.marginRight = "2rem";
                i6pr.style.display = "initial";
                i6pr.style.marginRight = "2rem";
                i6c.style.display = "initial";
                i6c.style.marginRight = "2rem";
                i6btnm.style.marginRight = "2rem";
                i6btnd.setAttribute("id", "i6");
                i6btnl.setAttribute("id", "i6c");
                flag6 = 1;
                i6btnm.addEventListener('click', addcount6)
                function addcount6() {
                    i6count++;
                    i6c.textContent = "In the cart: "+i6count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                }
                i6btnl.addEventListener('click', removecount6)
                function removecount6(e) {
                    i6count--;
                    i6c.textContent = "In the cart: "+i6count;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    if(i6count<1){
                        let del = document.getElementById(e.target.id);
                        del.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.previousElementSibling.remove();
                        del.previousElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.nextElementSibling.remove();
                        del.nextElementSibling.remove();
                        del.remove();
                        pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                        summary.textContent = "Price summary: "+pricesum;
                        flag6 = 0;
                    }
                }
                i6btnd.addEventListener('click', deleteitem6)
                function deleteitem6(e){
                    let idel = document.getElementById(e.target.id);
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.previousElementSibling.remove();
                    idel.previousElementSibling.remove();
                    idel.nextElementSibling.remove();
                    idel.remove();
                    i6count = 0;
                    pricesum = (i1count*1) + (i2count*2) + (i3count*3) + (i4count*4) + (i5count*5) + (i6count*6);
                    summary.textContent = "Price summary: "+pricesum;
                    flag6 = 0;
                }
            }else if (i6count>1){
                i6c.textContent = "In the cart: "+i6count;
            }
        }
    }else{
        ccout.style.display="none";
        main.style.display="grid";
        menu.style.cursor="pointer";
    }
}

function coutload() {
    load.style.display="initial";
    setTimeout(coutdeload,2000);
}

function coutdeload() {
    load.style.display="none";
    ccout.style.display="initial";
}

function back(){
    ccout.style.display="none";
    main.style.display="grid";
    menu.style.cursor="pointer";
}