const isLeapYear = (year)=> {
    if(year === undefined){
        throw new Error('Year must be exist');
    }

    if(typeof year !== "number"){
        throw new Error('Year must be number')
    }

    if(!Number.isInteger(year)){
        throw new Error('Year must be integer');
    }

    if(year < 42){
        throw new Error('Year must me 42 or more');
    }
    
    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return (days === 29);
};

module.exports = isLeapYear