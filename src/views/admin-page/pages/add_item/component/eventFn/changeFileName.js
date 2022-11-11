

export function changeFileName(event){
    const fileName = document.querySelector(".file-name");

    const fileList = event.target.files;

    console.log(fileList);

    if(fileList.length>0){
        fileName.textContent = fileList[0].name;
    }
}