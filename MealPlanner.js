// Lists of different meals that the user can eat
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const meals = { 
   Breakfast: ['overnight oats', 'blueberry smoothie', 'croissant', 'eggs and bacon', 'fruits with yoghurt', 'Avocado toast', 'Banana pancakes'],
   Lunch :['Noodle salad', 'Greek salad', 'Wrap', 'Falafel', 'Hot dog', 'Sushi', 'Protein shake'],
   Dinner : ['Beyond Burger', 'Tacos with salmon', 'Tomato soup', 'Pad thai', 'Spaghetti Bolognese', 'Strogannof with rice', 'Fried Rice']
}

// Function creates and returns a random number between 0 and 6
const randomNum = function(range) {
    let randNum = Math.floor(Math.random() * range);
    return randNum
}



function DailyMealPlan() {

    
    for(let days in daysOfWeek) {
        console.log(daysOfWeek[days] + '\n')
        for(let DailyMeals in meals){

            let index = randomNum(meals[DailyMeals].length-1);
            
            console.log(DailyMeals  +':' + " we suggest that you'll eat " + meals[DailyMeals][index]);
            
        } console.log('\n')
    } console.log('Have a wonderful and nutrious week!')

}

DailyMealPlan()
