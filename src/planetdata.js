import gen from 'random-seed'
import mars from './planets/mars.jpg';
import earth from './planets/earth.jpg';
import jupiter from './planets/jupiter.jpg';
import mercury from './planets/mercury.jpg';
import naptune from './planets/Naptune.jpg';
import pluto from './planets/pluto.jpg';
import saturn from './planets/saturn.jpg';
import venus from './planets/Venus.jpg';
import uranus from './planets/uranus.jpg';

function getseedforhour(high, low, hour, day){
  const generator = gen(hour + day);

  return generator(high-low)+low;
}

const planethighsandlows = [
    {name: 'Mercury', high: 449, low:-180},
    {name: 'Venus', high: 465, low: 465},
    {name: 'Earth', high: 58, low:-50,},
    {name: 'Mars', high: 195, low: -173},
    {name: 'Jupiter', high: -13, low: -145,},
    {name: 'Saturn', high: -75, low:-175},
    {name: 'Uranus', high:-170, low:-200},
    {name: 'Neptune', high: -190, low:-371},
    {name: 'Pluto', high:-369, low:-387},
]

const allplanetweather = planethighsandlows.map(function(planetlistindex) {
    planetlistindex.weather = generatetempdata(planetlistindex)
    return planetlistindex
})

function generatetempdata(dictionary){
    const low = dictionary.low;
    const high = dictionary.high;
    const outputweatherdata = []
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    for (let day = 0; day < days.length; day++) {
        const dayname = days[day];
        for (let hour = 0; hour < 12; hour++) {
            outputweatherdata.push({day: dayname, time: hour*2, temp:getseedforhour(high, low, hour, dayname)})
        }
    }
    return outputweatherdata;
}


export const planetdata = [
    {name: 'Mercury', image: mercury, currenttemp: 425},
    {name: 'Venus', image: venus, currenttemp: 470},
    {name: 'Earth', image: earth, currenttemp: 25},
    {name: 'Mars', image: mars, currenttemp: -30},
    {name: 'Jupiter', image: jupiter, currenttemp: -110},
    {name: 'Saturn', image: saturn, currenttemp: -145},
    {name: 'Uranus', image: uranus, currenttemp: -190},
    {name: 'Neptune', image: naptune, currenttemp: -200},
    {name: 'Pluto', image: pluto, currenttemp: -245},
]


