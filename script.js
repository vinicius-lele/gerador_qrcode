function gerar() 
{
    let dado = document.getElementById('dado').value;
    let tamanho = document.getElementById('tamanho').value;
    if(dado)
    {
        document.getElementById("qrcode_gerado").src = "https://qrcode.tec-it.com/API/QRCode?data="+dado+"&backcolor=%111ccc23&size="+tamanho+"&quietzone=1";
        document.getElementById("mensagem").innerHTML = "Aqui está seu QR Code. :)"; 

    }
    else
    {
        document.getElementById("mensagem").innerHTML = "Por favor, insira um dado para que seja gerado seu QR Code."; 
    }
}
