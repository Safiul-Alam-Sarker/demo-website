//start

const selectElement =(s) => document.querySelector(s);

//open the menu on click
selectElement('.open').addEventListener('click',()=>{
    selectElement('.nav-list').classList.add('active');
});


selectElement('.close').addEventListener('click',()=>{
    console.log('close me');
    selectElement('.nav-list').classList.remove('active');
});
