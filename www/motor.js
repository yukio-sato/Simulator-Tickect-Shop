var vl;
if (localStorage.getItem("valorTotal"))
{vl = parseFloat(localStorage.getItem("valorTotal"))}
else
{vl = 0.0}
function teste(teste2)
{
if (document.getElementById(teste2).getAttribute("ocupado"))
{
    alert("Ocupado");
}
else if (document.getElementById("lbl").value != "" && document.getElementById("lbl").value != " ")
{
    alert("Selecionado");
    var ocupa = document.createAttribute("ocupado")
    ocupa.value = "true"
    localStorage.setItem(teste2, document.getElementById("lbl").value)

    vl = vl + parseFloat(document.getElementById(teste2).getAttribute("preco"))
    document.getElementById("gasto").textContent = "Valor gasto: "+vl+"\$";
    localStorage.setItem("valorTotal", vl)

    document.getElementById(teste2).setAttributeNode(ocupa)
}
else
{
    alert("Por favor coloque um nome");
}
}

function ocupar()
{
    document.getElementById("gasto").textContent = "Valor gasto: 0$"
    for (var i=0 ;i < localStorage.length; i++)
    {
    if (localStorage.key(i) != "valorTotal")
    {
    var ocupa = document.createAttribute("ocupado")
    ocupa.value = "true"
    document.getElementById(localStorage.key(i)).setAttributeNode(ocupa)
    }
    }
}

function calc()
{
    if (document.getElementById(cad).getAttribute("tipo") == "caro")
    {
        vl = vl + 10.5
    }
    else if (document.getElementById(cad).getAttribute("tipo") == "barato")
    {
        vl = vl + 5.25
    }

}


function tp()
{
    document.location.href = "index2.html"
}

function bk()
{
    document.location.href = "index.html"
}



function loading()
{
    for (var i=0 ;i < localStorage.length; i++)
    {
    if (localStorage.key(i) != "valorTotal")
    {
    var label = document.createElement("h1")
    label.textContent = localStorage.key(i)+": "+localStorage.getItem(localStorage.key(i))
    document.getElementById("tabela").appendChild(label)
    }
    }
    if (localStorage.getItem("valorTotal") != null)
    {
    document.getElementById("vl").textContent = "Valor Total: "+localStorage.getItem("valorTotal")+"$"
    }
    else
    {
    document.getElementById("vl").textContent = "Valor Total: 0$"
    }
}




function clr()
{
    for (var i=0;i < localStorage.length; i++)
    {
    if (localStorage.key(i) != "valorTotal")
    {
     document.getElementById(localStorage.key(i)).removeAttribute("ocupado")
    }
    }
    localStorage.clear();
    vl = 0.0
    document.getElementById("gasto").textContent = "Valor gasto: 0\$";
}