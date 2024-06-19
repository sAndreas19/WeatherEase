class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        border-radius: 5px;
        display: flex;
        top: 90px;
        position: sticky;
        margin: 40px auto;
        background-color: white;
      }
      
      .search-container > input {
        width: 80%;
        padding: 16px;
        border-radius: 4px 0 0 4px;
        border: 1px solid #2c3e50;
        font-weight: bold;
        color: black;
      }
      
      
      .search-container > input:focus {
        outline: 0;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-container >  input::placeholder {
        color: grey;
        font-weight: normal;
      }
      
      .search-container > button {
        width: 25%;
        cursor: pointer;
        font-weight: bold;
        padding: 16px;
        background-color: #2c3e50;
        color: white;
        border: 0;
        border-radius: 0 4px 4px 0;
        text-transform: capitalize;
      }

      .search-container > button:hover {
        font-weight: bolder;
        opacity: 0.8;
        color: white;
        border: 0;
      }

      @media screen and (max-width: 1600px){
        .search-container {
          width: 800px;
        }
      }

      @media screen and (max-width: 850px){
        .search-container {
          width: 600px;
        }
      }
      
      @media screen and (max-width: 650px){
        .search-container {
          flex-direction: initial;
          width: 440px;
          position: static;
        }
        
        .search-container > input {
          width: 90%;
          height: 45px;
        }
        
        .search-container > button {
          width: 40%;
          height: 45px;
        }
      }

      @media screen and (max-width: 500px){
        .search-container {
          width: 340px;
        }
      }

      @media screen and (max-width: 350px){
        .search-container {
          width: auto;
        }
      }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Nama Kota " id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;
    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);