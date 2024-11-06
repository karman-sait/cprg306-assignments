"use client";
import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    if (!ingredient) return []; 
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMealIdeas(ingredient).then(setMeals);
    }, [ingredient]);

    return (
        <div>
            {meals.length > 0 ? (
                <>
                    <h1>Meal Ideas</h1>
                    <p>Here are some meal ideas using {ingredient}:</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {meals.map(meal => (
                            <li key={meal.idMeal} style={{
                                backgroundColor: '#2c3e50', 
                                padding: '10px',
                                borderRadius: '8px',
                                marginBottom: '10px',
                                color: '#fff',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d35400'} 
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2c3e50'} 
                            >
                                {meal.strMeal}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>No meals found for {ingredient}</p>
            )}
        </div>
    );
}
//