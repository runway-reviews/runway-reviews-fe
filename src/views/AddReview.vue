<template>
  <div class="container">
    <form>
      <div class="item">
        <label>Select a category:</label>
        <select class="login-selection">
            <option>Security</option>
            <option>Restaurants</option>
            <option>Arrivals/Departures</option>
            <option>Amenities</option>
            <option>Accessibility</option>
        </select>
      </div>

        <div class="item-1">
          <label>Write your review here:</label>
          <input 
            class="review-input"
            type="text"
            placeholder="review"
            name="review"
            id="review"
        />
        </div>
        
        <router-link to="/">
            <button class="submit-review">Submit</button>
        </router-link>
    </form>
  </div>
</template>

<style>
* {
  font-size: 105%;
}
  .container {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    outline: 2px solid black;
    height: 14em;
    padding: 2em;
    margin: 2em 5em 0 5em;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .item-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .login-selection {
    margin-top: 0.6em;
  }

  .review-input {
    margin-top: 0.6em;
  }

  .submit-review {
    padding:0.3em;
    border-radius: 10px;
    width: 9em;
    height: 2em;
    border: 0;
    color: white;
    background-color: green;
  }
</style>