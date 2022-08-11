console.log("Code loaded into webpage");


function validateForm()
{
    var checkboxs=document.getElementsByName("c1");
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(okay) document.write("<p id=\"correct\">Thank you for checking a checkbox</p>");
    else document.write("<p id=\"error\">Please check at least one checkbox</p>");
    return okay;
};