
// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.

const gilaki = document.querySelector("#buttontoremove");

// hier Arrow Function: (hat weniger code)
gilaki.addEventListener('click', ()=>{
    gilaki.remove();
});


// hier normal function:
// gilaki.addEventListener('click', function(){
//     gilaki.remove();
// });


// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://picsum.photos/id/180/2000/1600  ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
