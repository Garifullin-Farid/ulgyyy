const form = document.getElementById("form");
form.addEventListener('submit',formSend);

async function formSend(e){
    e.preventDefault();
    let formData = new FormData(form);
    formData.append("image",formImage.files[0]);
    let response = await fetch("sendmail.php",{
        method: "POST",
        body:formData
    });
    if(response.ok){
        let result = await response.json();
        alert(result.massage);
        formPreview.innerHTML="";
        form.reset();
    }
    else{
        alert("ошибка");
    }
}

const formImage = document.getElementById("form_image");
const formPreview = document.getElementById("form_preview");

formImage.addEventListener("change",()=>{
    uploadFile(formImage.files[0]);
});
function uploadFile(file){
    if(!["image/jpeg","image/png"].includes(file.type)){
        alert("Разрешены только изображения");
        formImage.value = '';
    }
    else if(file.size > 2*1024*1024){
        alert("Файл должен быть меньше 2 мб");
       
    }
    else{
        var reader = new FileReader();
        reader.onload = function(e){
        form_preview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
         };
        reader.onerror = function(e){
        alert("Ошибка");
        }; 
        reader.readAsDataURL(file);
    }

    
}
