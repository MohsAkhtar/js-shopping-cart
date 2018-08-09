// Variables
const courses = document.querySelector('#courses-list'),
        shoppingCartContent = document.querySelector('#cart-content tbody');

// Listeners
loadEventListeners();


function loadEventListeners(){
    // Load all event listeners for this project

    // When a new course is added
    courses.addEventListener('click', buyCourse);
}

// Functions
// Remember to use delegation you have to pass the event (e)
function buyCourse(e){
    /* to stop page jumping to top every time you click
    use e.preventDefault()
    this is because browser tries to open new page every time
    you click a link */
    // PREVENT PAGE JUMPING TO TOP ON LINK CLICK
    e.preventDefault();

    // Use delegation to find the course that was added into shopping cart
    if(e.target.classList.contains('add-to-cart')){
        // read course values using parent element
        const course = e.target.parentElement.parentElement;

        // read the values
        getCourseInfo(course);
    }
}

//Reads the HTML information of the selected course
function getCourseInfo(course){
    // Create an Object with Course Data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    
    // Insert into shopping cart
    addIntoCart(courseInfo);
}

// Display selected course into shopping cart
function addIntoCart(course){
    // create a <tr></tr> in table in shopping cart
    const row = document.createElement('tr');

    // Build template of passed in course info in table row
    row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}" width=100>
            </td>
            <td>
                ${course.title}
            </td>
            <td>
                ${course.price}
            </td>
            <td>
                <a href = "#" class="remove" data-id="${course.id}">X</a>
            </td>
        </tr>
    `;
    // Add into the shopping cart
    shoppingCartContent.appendChild(row);
}