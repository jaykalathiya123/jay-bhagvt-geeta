let name = document.getElementById('name');
let ch = document.getElementById('che');
let summry = document.getElementById('summry');
let en_summry = document.getElementById('summry-en');
let en_che = document.getElementById('che-en');
let en = document.getElementById('en');
let author = document.getElementById('author');
fetch('https://vedicscriptures.github.io/chapters')
  .then(response => response.json())
  .then((data) => {
    const list = data.name;

    // console.log(data);
    data.forEach(ele => {
      // console.log(ele.name)
      // console.log(ele.summary.hi)
      name.innerHTML += `<li onclick="return ditil(${ele.chapter_number})">${ele.chapter_number}.${ele.name}</li>`;
      // sumary.innerHTML +=`${ele.summary.hi}<br>`;
      // for (let key in list) {
      //   name.innerHTML += ` ${key.name[0]}<br>`;
      // }
    });

  })
  .catch((err) => {
    console.log("err", err)
  })

let ditil = (chapter) => {
  fetch(`https://vedicscriptures.github.io/slok/${chapter}/1`)
  .then(response => response.json())
  .then((data) => {
    const list = data.message;
    console.log(data.chapter);
    ch.innerHTML=`${data.chapter}`;
    en_che.innerHTML=`${data.slok}`;
    summry.innerHTML=`${data.transliteration}`;
    en_summry.innerHTML=`${data.rams.ht}`;
    author.innerHTML=`${data.rams.author}`;
    en.innerHTML=`${data.rams.hc}`;

    // data.forEach(ele => {
      // console.log(ele.name)
      // console.log(ele.summary.hi)
      // sumary.innerHTML += `<h1>${ele.chapter} </h1>`;
      // sumary.innerHTML +=`${ele.summary.hi}<br>`;
      // for (let key in list) {
      //   name.innerHTML += ` ${key.name[0]}<br>`;
      // }
    // });

  })
  .catch((err) => {
    console.log("err", err)
  })
}

