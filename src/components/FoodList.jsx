import FoodCard from "./FoodCard";

let foods = [
    'bokkeumbap',
    'ramen',
    'sushi',
    'pasta',
    'pork buns',
    'lasagna',
    'pizza',
    'dumplings',
    'Butter Chicken',
    'Laksa'
];

export default function FoodList(){
    return (
        <section>
                {
                    foods.map((food, index) => {
                        return <p><FoodCard key={index} foodName={food}/></p>
                    })
                }
        </section>
    )
}