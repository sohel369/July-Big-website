const btn1 = document.getElementById("btn1");
const aa = document.getElementById("Facebook");
btn1.addEventListener("click", function () {
    confirm("Are you sure to Download") ? alert("Download Start") : document.body.style.backgroundColor = "green";
});

aa.addEventListener("click", function () {
    let aa = prompt("What would you like to do? (Type 'sohel')", "sohel");
    if (aa.toLowerCase() === "sohel") {
        window.open("https://www.facebook.com/", "New Tab", "height=auto,width=auto")
    } else if (aa.toLowerCase() === "rana") {
        alert("Password will be 'sohel'");
    } else {
        alert("password is not work")
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var imageUrl = button.getAttribute('data-src');
            downloadImage(imageUrl);
        });
    });

    function downloadImage(imageUrl) {
        var a = document.createElement('a');
        a.href = imageUrl;
        a.download = 'image.jpg'; // You can set the download filename here
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
});