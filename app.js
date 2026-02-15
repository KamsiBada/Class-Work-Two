async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    const container = document.getElementById("postsContainer");
    container.innerHTML = "";

    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "post-card";

      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    alert("Something went wrong.");
    console.error(error);
  }
}

document.getElementById("loadBtn").addEventListener("click", loadPosts);
