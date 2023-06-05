import fs from 'fs';
let movies = [];
const select_films = async () => {
    try {
        fs.readFile("data.json" , "utf-8" , (error , data) => {
            if (error) {
                console.log("Something went wrong while reading the file!");
                console.log(error.message);
            } else {
                movies = JSON.parse(data);  // Convert string to json
                console.log(movies);
            }
        });
        console.log(`Movie catalog loaded :`);
    } catch (error) {
        console.error(`Error loading movie catalog : `, error);
    }
};
export default select_films;
