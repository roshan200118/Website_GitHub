window.onload = function () 
{
    if (localStorage.getItem('active') == 'true') 
    {
        document.body.classList.add('active');
    }
    else 
    {
        document.body.classList.remove('active');
    }
}
