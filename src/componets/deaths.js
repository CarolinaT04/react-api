import React from "react";

const Deaths = ({ deaths }) => {
    return (
      <div class="container">
        <center><h1>Characters List</h1></center>
        {deaths.map((death) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{death.death}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{death.cause}</h6>
              <p class="card-text">@{death.responsible}</p>
              <p class="card-text">@{death.last_words}</p>
            </div>
          </div>
        ))}
      </div>
    )
  };

  export default Characters;