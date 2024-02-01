const jsonarray = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 2,
        "id": 51,
        "title": "non sunt voluptatem placeat consequuntur rem incidunt",
        "url": "https://via.placeholder.com/600/8e973b",
        "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
    },
    {
        "albumId": 2,
        "id": 52,
        "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
        "url": "https://via.placeholder.com/600/121fa4",
        "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
    },
    {
        "albumId": 2,
        "id": 53,
        "title": "soluta et harum aliquid officiis ab omnis consequatur",
        "url": "https://via.placeholder.com/600/6efc5f",
        "thumbnailUrl": "https://via.placeholder.com/150/6efc5f"
    },
    {
        "albumId": 2,
        "id": 54,
        "title": "ut ex quibusdam dolore mollitia",
        "url": "https://via.placeholder.com/600/aa8f2e",
        "thumbnailUrl": "https://via.placeholder.com/150/aa8f2e"
    },
    {
        "albumId": 2,
        "id": 55,
        "title": "voluptatem consequatur totam qui aut iure est vel",
        "url": "https://via.placeholder.com/600/5e04a4",
        "thumbnailUrl": "https://via.placeholder.com/150/5e04a4"
    },
    {
        "albumId": 3,
        "id": 101,
        "title": "incidunt alias vel enim",
        "url": "https://via.placeholder.com/600/e743b",
        "thumbnailUrl": "https://via.placeholder.com/150/e743b"
      },
      {
        "albumId": 3,
        "id": 102,
        "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
        "url": "https://via.placeholder.com/600/a393af",
        "thumbnailUrl": "https://via.placeholder.com/150/a393af"
      },
      {
        "albumId": 3,
        "id": 103,
        "title": "et eius nisi in ut reprehenderit labore eum",
        "url": "https://via.placeholder.com/600/35cedf",
        "thumbnailUrl": "https://via.placeholder.com/150/35cedf"
      },
      {
        "albumId": 3,
        "id": 104,
        "title": "et natus vero quia totam aut et minima",
        "url": "https://via.placeholder.com/600/313b40",
        "thumbnailUrl": "https://via.placeholder.com/150/313b40"
      },
      {
        "albumId": 3,
        "id": 105,
        "title": "veritatis numquam eius",
        "url": "https://via.placeholder.com/600/eaf2e1",
        "thumbnailUrl": "https://via.placeholder.com/150/eaf2e1"
      }
];

function display(mydata){
    let newJsonArray = mydata.map(function(v){
        return `<article class="menu-item">
        <div class="item-info">
          <header>
            <h4>${v.title}</h4>
          </header>
        </div>
        <img src="${v.url}" alt="menu item" class="photo" />
        <img src="${v.thumbnailUrl}" alt="menu item" class="photo" />
      </article>`;
    });
    document.getElementById("menu").innerHTML = newJsonArray.join("");
    
}
display(jsonarray);