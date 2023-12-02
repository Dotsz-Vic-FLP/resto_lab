const FoodPictures = () => { // Part 3
    const galleryDiv = document.createElement('div');
    galleryDiv.className = 'gallery';

    const keywords = ['fruit','steak','cake','pizza','sushi','pasta','salad','bread'];

    for (let i = 0; i < 15; i++) {
        const keyword = keywords[Math.floor(Math.random() * keywords.length)];
        const imageUrl = `https://loremflickr.com/320/240/${keyword}?random=${i}`;

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = '${keyword} image';
        img.className = 'gallery-item';
        galleryDiv.appendChild(img);
    }

    return galleryDiv;
}
export default FoodPictures;