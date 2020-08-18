import $ from 'jquery';

function main() {
    console.log('DOM is loaded');

    const startMsg = $('<p>Webpack is working</p>');
    $('#root').append(startMsg);
}

function buildWithFormData(event) {
    event.preventDefault();

    const stateCodes = [
        'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL',
        'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA',
        'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE',
        'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI',
        'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI',
        'WV', 'WY'
    ];

    let inputState = $('#state').val();
    let inputNum = $('#max-results').val();

    for (let i = 0; i < stateCodes.length; i++) {
        if (stateCodes[i] === inputState.toLocaleUpperCase) {
            return inputState;
        } else {
            throw new Error('Not a valid state abbreviation.');
        }
    }

    //make input to upper case
    //check against state codes
    //
}



//both of these need to account for the lowercase cases



const apiKey = "hXbNpaA7MHqphnXjOA8svZAq3ek2a8xtf0Z6EkUT";
const url = "https://developer.nps.gov/api/v1/parks?";

//make object for parameters
//get list of state codes
const params = {
    api_key: apiKey,
    q: query,
    maxResults,
    limiy
};

const sectionHeadnig = `Here are the results for parks in ${state}`;

function render(str, tag){
    $("tag").html(str);
}
$(main);