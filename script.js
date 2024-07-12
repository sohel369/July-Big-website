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
document.getElementById("role").addEventListener("click", function () {
    if (this.innerHTML === "Developer") {
        this.innerHTML = "Designer";
    } else {
        this.innerHTML = "Developer"
    }
});
document.querySelector('.notification').addEventListener('click', function () {
    var badge = this.querySelector('.badge');
    if (badge) {
        badge.style.display = 'none';
    }
});
document.getElementById("youtube").addEventListener("click", function () {
    let openYoutube = prompt("Password:", "sohel");
    if (openYoutube && openYoutube.toLocaleLowerCase() === "sohel") {
        window.open("https://www.youtube.com/", "New Youtube", "height=800,width=800");
    } else if (openYoutube && openYoutube.toLocaleLowerCase() !== "sohel") {
        alert("Password is incorrect.");
    } else {
        confirm("Are you sure to log out") ? document.write("Log out!") :this.accessKey;
    }
});
