var giris=prompt("Veri Giriniz");
var regex = /^[A-Z a-z]+$/;

if (giris.length<1||giris.length>9) 
{
alert("Lütfen En Az 1 En Çok 9 Karakter Arasında Bir Veri Giriniz");
}

else if(regex.test(giris) === false) 
{
alert("Lütfen Özel Karakter Ve Sayi Girmeyiniz");
}

/*else if (giris.search(/[a-z]/) < 0)
alert("En Az Bir Küçük Harf Giriniz");

else if (giris.search(/[A-Z]/) < 0)
alert("En Az Bir Büyük Harf Giriniz");

else if (giris.search(/[0-9]/) < 0)
alert("En Az Bir Rakam Giriniz");*/

else
{
alert("Giris Basarili");
document.write("<br>");
document.write('<p id="p10">'+"Verinizin Kelime Sayisi: "+giris.length+'</p>')
document.write("<br>");
document.write('<p id="p11">'+"Veri: "+'</p>');
document.write('<p id="p12">'+giris+'</p>');
document.write("<br>");


var veri=giris;
var dizi1=veri.split("");

for (var i = 1; i <= giris.length; i++) 
{
random1=Math.floor(Math.random()*giris.length);
random2=Math.floor(Math.random()*giris.length);
random3=Math.floor(Math.random()*giris.length);
random4=Math.floor(Math.random()*giris.length);
random5=Math.floor(Math.random()*giris.length);
random6=Math.floor(Math.random()*giris.length);
random7=Math.floor(Math.random()*giris.length);
random8=Math.floor(Math.random()*giris.length);
random9=Math.floor(Math.random()*giris.length);

document.write("<br>"); 
if (i==1) {document.write('<p id="p1">'+i+" karakterli: "+dizi1[random1]+'</p>');}

else if (i==2) {document.write('<p id="p2">'+i+" karakterli: "+dizi1[random2]+dizi1[random9]+'</p>');}

else if (i==3) {document.write('<p id="p3">'+i+" karakterli: "+dizi1[random3]+dizi1[random8]+dizi1[random6]+'</p>');}

else if (i==4) {document.write('<p id="p4">'+i+" karakterli: "+dizi1[random4]+dizi1[random7]+dizi1[random2]+dizi1[random3]+'</p>');}

else if (i==5) {document.write('<p id="p5">'+i+" karakterli: "+dizi1[random5]+dizi1[random6]+dizi1[random4]+dizi1[random2]+dizi1[random1]+'</p>');}

else if (i==6) {document.write('<p id="p6">'+i+" karakterli: "+dizi1[random6]+dizi1[random5]+dizi1[random3]+dizi1[random4]+dizi1[random8]+dizi1[random9]+'</p>');}

else if (i==7) {document.write('<p id="p7">'+i+" karakterli: "+dizi1[random7]+dizi1[random4]+dizi1[random8]+dizi1[random5]+dizi1[random2]+dizi1[random1]+dizi1[random3]+'</p>');}

else if (i==8) {document.write('<p id="p8">'+i+" karakterli: "+dizi1[random8]+dizi1[random3]+dizi1[random7]+dizi1[random6]+dizi1[random4]+dizi1[random2]+dizi1[random5]+dizi1[random1]+'</p>');}

else if (i==9) {document.write('<p id="p9">'+i+" karakterli: "+dizi1[random9]+dizi1[random2]+dizi1[random1]+dizi1[random7]+dizi1[random5]+dizi1[random2]+dizi1[random6]+dizi1[random3]+dizi1[random8]+'</p>');}
}  
}
