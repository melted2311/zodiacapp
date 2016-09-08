var chineseZodiac = [
{
    sign: 'Rat',
    year: [1912, 1924, 1936, 1946, 1960, 1972, 1984, 1996, 2008, 2020],
    image: 'img/ratyear.png',
    strength: 'Adaptable, smart, cautious, acute, alert, positive, flexible, outgoing, cheerful',
    weakness: 'Timid, unstable, stubborn, picky, lack of persistence, querulous',
    bestMatches: 'Ox, Rabbit, Dragon',
    badMatches: 'Horse, Rooster'
},
{
    sign: 'Ox',
    year: [1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
    image: 'img/oxyear.png',
    strength: 'honest, industrious, patient, cautious, level-headed, strong-willed, persistent',
    weakness: 'obstinate, inarticulate, prudish, distant',
    bestMatches: 'Rat, Monkey, Rooster',
    badMatches: 'Tiger, Dragon, Horse, Sheep'
},
{
    sign: 'Tiger',
    year: [1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
    image: 'img/tigeryear.png',
    strength: 'Tolerant, loyal, valiant, courageous, trustworthy, intelligent, virtuous',
    weakness: 'Arrogant, short-tempered, hasty, traitorous',
    bestMatches: 'Dragon, Horse, Pig',
    badMatches: 'Ox, Tiger, Snake, Monkey'
},
{
    sign: 'Rabbit',
    year: [1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
    image: 'img/rabbityear.png',
    strength: 'Gentle, sensitive, compassionate, amiable, modest, and merciful',
    weakness: 'Amorous, hesitant, stubborn, timid, conservative',
    bestMatches: 'Sheep, Monkey, Dog, Pig',
    badMatches: 'Snake, Rooster'
},
{
    sign: 'Dragon',
    year: [1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
    image: 'img/dragonyear.png',
    strength: 'Decisive, inspiring, magnanimous, sensitive, ambitious, romantic',
    weakness: 'Eccentric, tactless, fiery, intolerant, unrealistic',
    bestMatches: 'Rat, Tiger, Snake',
    badMatches: 'Ox, Sheep, Dog'
},
{
    sign: 'Snake',
    year: [1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
    image: 'img/snakeyear.png',
    strength: 'Soft-spoken, humorous, sympathetic, determined, passionate, smart',
    weakness: 'Jealous, suspicious, sly, fickle, nonchalant',
    bestMatches: 'Dragon, Rooster',
    badMatches: 'Tiger, Rabbit, Snake, Sheep, Pig'
},
{
    sign: 'Horse',
    year: [1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
    image: 'img/horseyear.png',
    strength: 'Most have nice personalities, such as warm-hearted, upright and easygoing. Hence, they usually have a lot of friends flocking around them. Independence and endurance makes them more powerful, and they do not easily give up when in difficulties. Positive attitude leads to a brighter direction.',
    weakness: 'The love of spending seems to be the biggest problem since they must be financially well off to support their social activities and outlook. Besides, their frank attitude at times leads to letting out secret easily. Persistence is what they lack on the path of success.',
    bestMatches: 'Tiger, Sheep, Rabbit',
    badMatches: 'Rat, Ox, Rooster'
},
{
    sign: 'Sheep',
    year: [1919,, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
    image: 'img/sheepyear.png',
    strength: 'gentle, softhearted, considerate, attractive, hardworking, persistent, thrift',
    weakness: 'indecisive, timid, vain, pessimistic, moody, weak-willed',
    bestMatches: 'Horse, Rabbit, Pig',
    badMatches: 'Ox, Tiger, Dog'
},
{
    sign: 'Monkey',
    year: [1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
    image: 'img/monkeyyear.png',
    strength: 'enthusiastic, self-assured, sociable, innovative',
    weakness: 'jealous, suspicious, cunning, selfish, arrogant',
    bestMatches: 'Ox, Rabbit',
    badMatches: 'Tiger, Pig'
},
{
    sign: 'Rooster',
    year: [1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
    image: 'img/roosteryear.png',
    strength: 'Independent, capable, warm-hearted, self-respect, quick minded',
    weakness: 'Impatient, critical, eccentric, narrow-minded, selfish',
    bestMatches: 'Ox, Snake',
    badMatches: 'Rat, Rabbit, Horse, Rooster, Dog'

},
{
    sign: 'Dog',
    year: [1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
    image: 'img/dogyear.png',
    strength: 'Valiant, loyal, responsible, clever, courageous, lively',
    weakness: 'Sensitive, conservative, stubborn, emotional',
    bestMatches: 'Rabbit',
    badMatches: 'Dragon, Sheep, Rooster'
},
{
    sign: 'Pig',
    year: [1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
    image: 'img/pigyear.png',
    strength: 'Warm-hearted, good-tempered, loyal, honest, gentle',
    weakness: 'Naive, gullible, sluggish, short-tempered',
    bestMatches: 'Tiger, Rabbit, Sheep',
    badMatches: 'Snake, Monkey'
}
]

console.log(chineseZodiac)

function getZodiac(){

    var x = document.getElementById('zodiac').value
    console.log(x)
    for(var i = 0; i < chineseZodiac.length; i++) {
        for(var j = 0; j < chineseZodiac[i].year.length; j++){
            if(x == chineseZodiac[i].year[j]){
            
            document.getElementById('zodiacname').innerHTML = 'Sign: ' + chineseZodiac[i].sign
            document.getElementById('zodiacyear').innerHTML = 'Year: ' + chineseZodiac[i].year
            document.getElementById('zodiacimage').src = chineseZodiac[i].image
            document.getElementById('zodiacstrength').innerHTML = '<i>Strength</i>: ' + chineseZodiac[i].strength
            document.getElementById('zodiacweakness').innerHTML = '<i>Weakness</i>: ' + chineseZodiac[i].weakness
            document.getElementById('best').innerHTML = '<i>Best Matches are</i>: ' + chineseZodiac[i].bestMatches
            document.getElementById('bad').innerHTML = '<i>Bad Matches are</i>: ' + chineseZodiac[i].badMatches
            document.getElementById("chinesebirthdaypie").style.display='none';
            return
        }

        else {
            document.getElementById('zodiacname').innerHTML = 'Try Again, make sure to enter 4 digit number of your birth year.'
            document.getElementById('zodiacyear').innerHTML = ''
            document.getElementById('zodiacimage').src = ''
            document.getElementById('zodiacstrength').innerHTML = ''
            document.getElementById('zodiacweakness').innerHTML = ''
            document.getElementById('best').innerHTML = ''
            document.getElementById('bad').innerHTML = ''

        }
        }
        
    }


}


