let x=document.getElementById("Dom");
x.style.background="lightgreen"
x.style.color="red"
x.style.fontSize="24px"
x.style.padding="10px"
let p=document.createElement("div")
p.textContent= "This is a span Tag"
p.style.color="gray"
let Image=document.createElement("img")
Image.src="https://wallpaperaccess.com/full/393735.jpg"
Image.width="300"
x.append(p,Image)


let flower=document.createElement("Img")
flower.src="https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-wallpaper-free-image.jpg?w=600&quality=80"
x.replaceChild(flower,Image)

    
const D=x.cloneNode(true);
D.className
document.body.append(D)

let y=document.createElement("img");
y.setAttribute("src","https://media.istockphoto.com/id/1392896428/photo/inspirational-quote.jpg?s=612x612&w=0&k=20&c=CbqPLlx65768zd6QQpJqo55MZIAhA_o68cS0nLIfjw0=")
y.setAttribute("width","300")
y.style.background="yellow"
y.style.padding="20px"
y.removeAttribute("width")
document.body.appendChild(y)
y.style.borderRadius="30px"


