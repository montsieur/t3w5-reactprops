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
            <ul>
                {
                    foods.map(food => {
                        return <li><FoodCard foodName={food}/></li>
                    })
                }
            </ul>
        </section>
    )
}