import bookStoreBg from '../../../../assets/book-store-bg.webp'

// const books = [
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
//     {
//         name: 'Lord of the Rings',
//         cover: 'https://m.media-amazon.com/images/I/81nV6x2ey4L.jpg',
//         author: 'J.R.R. TOLKIEN',
//     },
// ];

async function fetchBookDetails(bookName) {
    const booksList = []
    const arr = bookName.split(' ');
    const bookNameTrimmed = arr.join('+');
    // console.log(bookNameTrimmed);
    const response = await fetch(`https://openlibrary.org/search.json?q=${bookNameTrimmed}`)//url to fetch the books.
    if(response){
        
        const data = await response.json();
        console.log(data);
        
        data.docs.map((bookObj)=>{
            const cover = bookObj.cover_i;
            // console.log(bookObj.title , cover);
            // const img_cover = fetchImage(`https://covers.openlibrary.org/b/isbn/${bookObj.isbn[0]}-M.jpg`);
            let img_cover;
            if(bookObj.isbn){
                img_cover = `https://covers.openlibrary.org/b/isbn/${bookObj.isbn[0]}-M.jpg`;
            }
            else{
                img_cover = {bookStoreBg};
            }
            console.log(img_cover);
            
            const bookDetails = {
                title:bookObj.title,
                cover:img_cover,
                author:bookObj.author_name,
            }
            booksList.push(bookDetails);
        })
        return booksList;
    }
    else{
        return ['Error'];
    }
    
}
// async function fetchImage(url) {
//     const response = await fetch(url);
//     const blob = await response.blob();
    
    
//     const source = URL.createObjectURL(blob);
//     const src = source.replace('blob:','');
//     console.log(src);
    
// }
async function handleInput(e){
    e.preventDefault();
    
    const searchQuery = document.getElementById('search-bar').value;
    console.log(searchQuery);
    
    const response = await fetchBookDetails(searchQuery);
    if(response){
      console.log(response);
    }
  }
  function handleKeyDown(e){
    if(e.key ==='Enter'){
      handleInput(e);
    }
  }

export {fetchBookDetails,handleInput,handleKeyDown };
