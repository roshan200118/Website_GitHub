let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => 
{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');




themeToggler.onclick = () => 
{
    themeToggler.classList.toggle('fa-sun');

    if (themeToggler.classList.contains('fa-sun')) 
    {
        document.body.classList.add('active');
    }
    else 
    {
        document.body.classList.remove('active');
    }
    
    localStorage.setItem('active', themeToggler.classList.contains('fa-sun'));
}

// console.log('active: '+localStorage.getItem('active'));

if (localStorage.getItem('active') == 'true') {
    themeToggler.classList.toggle('fa-sun');
}

$("#file-upload").change(function(){
    $("#file-name").text(this.files[0].name);
  });


function showCourses(projectBoxId, buttonIconId) 
{
    if (document.getElementById(projectBoxId).style.display == "none") 
    {
        document.getElementById(projectBoxId).style.display = "block";
        $('#' + buttonIconId).find("i").attr('class', "fa fa-arrow-down")
    }
    else 
    {
        document.getElementById(projectBoxId).style.display = "none";
        $('#' + buttonIconId).find("i").attr('class', "fa fa-arrow-right")
    }
}