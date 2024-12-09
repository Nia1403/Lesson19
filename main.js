
// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.

const gilaki = document.querySelector("#buttontoremove");
const sectionForProducts = document.querySelector("#products-list")

// hier Arrow Function: (hat weniger code)
gilaki.addEventListener('click', ()=>{
    gilaki.remove();
});


// hier normal function:
// gilaki.addEventListener('click', function(){
//     gilaki.remove();
// });


// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://picsum.photos/id/180/2000/1600  ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).

const imgTag = document.createElement("img");
const sectionPic = document.querySelector("#forPic")
const body = document.querySelector("body");
imgTag.setAttribute("src", "https://picsum.photos/id/180/2000/1600");
// body.append(section)
sectionPic.append(imgTag)


//.appendChild fügt element hinzu
// tag.appendChild(imgTag);
// body.appendChild(tag);
// body.appendChild(imgTag);


// 3. html-ში შექმენით <section id="products-list"></section>



// 4

function dataInString(data){
    const axaliData = data.map(
        (el)=> `
        <div class = "divArea">
        <img src='${el.photos[0].large}' alt="${el.title}"/>
        <h2>${el.title},</h2>
        <h4>${el.stripped_descr}</h4>
      

        <div> 
        <button class = shouMore> show more</button>
        <button class= Delete > Delete </button>
        </div>

        <div class = price wraper > 
        <p>price: ${el.price} Lari</p>
        </div>

        <div class = category> 
        ${el.category_tree.map((el)=>
            `
            <p>${el.title}</p>`).join("")}
        </div>
         </div> 
        `
    );
    return axaliData.join("");
}
sectionForProducts.innerHTML = dataInString(data);


const areas = document.querySelectorAll(".divArea");
areas.forEach((area)=>{
const deletebutton = area.querySelector(".Delete");
const showmorebutton = area.querySelector(".shouMore");
const categoryHere = area.querySelector(".category")

deletebutton.addEventListener("click", ()=> area.remove());

showmorebutton.addEventListener("click", ()=> categoryHere.classList.toggle("aktiv"))
});





// console.log(data);
// console.log(dataInString(data));




