<template>
  <div class="container">
    <form>
    <router-link to="/">
        <button class="close-button link">✖️</button>
    </router-link>
      <div class="item">
        <label class="review-label">Select a category:</label>
        <select class="login-selection">
            <option>Security</option>
            <option>Restaurants</option>
            <option>Arrivals/Departures</option>
            <option>Amenities</option>
            <option>Accessibility</option>
        </select>
      </div>

        <div class="item-1">
          <label class="review-label">Write your review here:</label>
          <input 
            class="review-input"
            type="text"
            placeholder="review"
            name="review"
            id="review"
        />
        <router-link to="/">
            <button class="submit-review">Submit</button>
        </router-link>
        </div>
        
    </form>
  </div>
</template>

<style>

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60vw;
    height: 50vh;
    padding: 2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    transform: translate(30%, 30%);
  }

  .item,
  .item-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .login-selection {
    margin-top: 0.6em;
    font-size: 1.2em;
  }

  .review-input {
    margin-top: 0.6em;
    font-size: 1.2em;
    height: 5em;
  }

  .submit-review {
    padding: 0.3em;
    margin: 15px;
    border-radius: 10px;
    width: 9em;
    height: 2em;
    border: 0;
    color: white;
    background-color: green;
    font-size: 1.2em;
  }

  .submit-review:hover {
      cursor: pointer;  
      transform:scale(1.3); 
      text-decoration: underline;
  }

  .review-label {
    font-size: 1.2em;
  }

  .close-button {
    background-color: white;
    border:0;
    font-size: 1.6em;
  }
</style>
