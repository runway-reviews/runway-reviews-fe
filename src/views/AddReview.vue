<template>
    <form>
        <label>Select a category:</label>
        <select>
            <option>Security</option>
            <option>Restaurants</option>
            <option>Arrivals/Departures</option>
            <option>Amenities</option>
            <option>Accessibility</option>
        </select>
        <label>Write your review here:</label>
        <input 
            type="text"
            placeholder="review"
            name="review"
            id="review"
        />
        <router-link to="/">
            <button>Submit Review</button>
        </router-link>
    </form>
</template>