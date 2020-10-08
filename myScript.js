function nodays() 
{
    var da=parseInt(document.getElementById("date").value);
    var m=parseInt(document.getElementById("month").value);
    var y=parseInt(document.getElementById("year").value);
    var cda=parseInt(document.getElementById("cdate").value);
    var cm=parseInt(document.getElementById("cmonth").value);
    var cy=parseInt(document.getElementById("cyear").value);
    var sd=0;
    var sy=0; 
    if(cy>=y && m>0 && m<=12)
    {
        if(m==2)
        {
            if(y%4==0 && da<=29)
            {
                sd=sd+29-da;
            }
            else if(y%4!=0 && da<=28)
            {
                sd=sd+28-da;
            }
        }
        else if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12)
        {
            sd=sd+31-da;
        }
        else if(m==4 || m==6 || m==9 || m==11)
        {
            sd=sd+30-da;
        }
        sd=sd+cda;
        var sm=12-m;
        sm=sm+cm-1;
        if(y<cy)
        {
            sy=cy-1-y;
        }    
        while(sd>=30)
        {
            sm++;
            sd=sd-30;
        }
        while(sm>=12)
        {
            sy++;
            sm=sm-12;
        }    
        var a="Your Age Is ";
        var b=" Years ";
        var c=" Months ";
        var d=" Days";
        var result=a + sy + b + sm + c + sd + d;
        document.getElementById("final").innerHTML=result;    
    }
}