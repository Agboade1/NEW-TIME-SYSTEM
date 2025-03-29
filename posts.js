function shareLink() {
    let link = document.getElementById("postLink").value;
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(link);
    localStorage.setItem("posts", JSON.stringify(posts));
    alert("Link shared!");
}

function postAnnouncement() {
    let announcement = document.getElementById("adminPost").value;
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(announcement);
    localStorage.setItem("posts", JSON.stringify(posts));
    alert("Announcement posted!");
}
