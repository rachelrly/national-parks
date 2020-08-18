import $ from 'jquery';

function buildWithFormData(event) {
    event.preventDefault();

    const stateNames = [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 
        'California', 'Colorado', 'Connecticut', 'Delaware', 
        'District of Columbia', 'Florida', 'Georgia', 'Guam', 
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 
        'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 
        'Michigan', 'Minnesota', 'Minor Outlying Islands', 'Mississippi', 
        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 
        'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 
        'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 
        'U.S. Virgin Islands', 'Utah', 'Vermont', 'Virginia', 'Washington', 
        'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    let inputState = $('#state').val().toLowerCase;
    let stateValid = false;
    let inputNum = $('#max-results').val();

    for (let i = 0; i < stateNames.length; i++) {
        if (stateNames[i].toLowerCase === inputState) {
            stateValid = true;
        } else {
            throw new Error('Not a valid state abbreviation.');
        }
    }

    call(inputNum, inputState);

}

function displayResults(){
//create html for name
        //create html for web link
        //create html for description
        //render 
}




function formatQueryString(obj){
    const queryItems = Object.keys(obj)
    .map(key => `${}`)

}
//call function in above function, take in input num and input state to use in function here
function call(num, state){

const apiKey = "hXbNpaA7MHqphnXjOA8svZAq3ek2a8xtf0Z6EkUT";
const baseUrl = "https://developer.nps.gov/api/v1/parks?";

const params = {
    api_key: apiKey,
    q: state,
    maxResults: num
};

let queryString = formatQueryString(params);

let url = `${baseUrl}?${queryString}`;

fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));

}





//make object for parameters
//get list of state codes


function render(str){
    $("ul").html(str);
}






function main() {
    console.log('DOM is loaded');

    const startMsg = $('<p>Webpack is working</p>');
    $('#root').append(startMsg);
}











$('#submit').on('click', buildWithFormData);

$(main);