import fs from 'fs';
import readline from './read_line.js';
const where_films = () => {
    console.log(`Insert the criteria you want to filter by it :
        write 1 if you want to filter by ID ,
        write 2 if you want to filter by title ,
        write 3 if you want to filter by director ,
        write 4 if you want to filter by release_year ,
        write 5 if you want to filter by genre .
    `);
    const choice = readline();
    if(choice === "1") {
        console.log('Insert the ID you want to filter by it :');
        let id = readline();
        fs.readFile('data.json', 'utf8', (error , data) => {
            if (error) {
                console.error(error);
                return;
            }
            try {
                const existingData = JSON.parse(data);
                let obj = existingData.filter(obj => obj.id === id);
                const xdata = JSON.stringify(obj);
                console.log(xdata);
            } catch (error) {
                console.error('Error parsing JSON:' , error);
            }
        });
    }
    else if(choice === "2") {
        console.log('Insert the title you want to filter by it :');
        let title = readline();
        fs.readFile('data.json', 'utf8', (error , data) => {
            if (error) {
                console.error(error);
                return;
            }
            try {
                const existingData = JSON.parse(data);
                let obj = existingData.filter(obj => obj.title === title);
                const xdata = JSON.stringify(obj);
                console.log(xdata);
            } catch (error) {
                console.error('Error parsing JSON:' , error);
            }
        });
    }
    else if(choice === "3") {
        console.log('Insert the director you want to filter by it :');
        let director = readline();
        fs.readFile('data.json', 'utf8', (error , data) => {
            if (error) {
                console.error(error);
                return;
            }
            try {
                const existingData = JSON.parse(data);
                let obj = existingData.filter(obj => obj.director === director);
                const xdata = JSON.stringify(obj);
                console.log(xdata);
            } catch (error) {
                console.error('Error parsing JSON:' , error);
            }
        });
    }
    else if(choice === "4") {
        console.log('Insert the release year you want to filter by it :');
        let release_year = readline();
        fs.readFile('data.json', 'utf8', (error , data) => {
            if (error) {
                console.error(error);
                return;
            }
            try {
                const existingData = JSON.parse(data);
                let obj = existingData.filter(obj => obj.release_year === release_year);
                const xdata = JSON.stringify(obj);
                console.log(xdata);
            } catch (error) {
                console.error('Error parsing JSON:' , error);
            }
        });
    }
    else if(choice === "5") {
        console.log('Insert the genre you want to filter by it :');
        let genre = readline();
        fs.readFile('data.json', 'utf8', (error , data) => {
            if (error) {
                console.error(error);
                return;
            }
            try {
                const existingData = JSON.parse(data);
                let obj = existingData.filter(obj => obj.genre === genre);
                const xdata = JSON.stringify(obj);
                console.log(xdata);
            } catch (error) {
                console.error('Error parsing JSON:' , error);
            }
        });
    }
}
export default where_films;